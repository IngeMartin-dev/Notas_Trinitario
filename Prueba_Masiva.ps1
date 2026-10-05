<#
  PRUEBA MASIVA - Notas Trinitario
  No modifica NADA del codigo: solo llama a los endpoints que ya existen.

  Por cada GRADO x SALON manda 4 JOBS (uno por periodo: 1, 2, 3 y 4), cada uno con TODOS
  los estudiantes del salon y con objetivo en cada materia.
  Luego pide el consolidado de cada periodo de ese salon.

  USO (PowerShell, backend en localhost:8080):
    .\prueba-masiva.ps1                       # pide usuario/contrasena de ADMIN
    .\prueba-masiva.ps1 -Token "eyJ..."       # si tu usuario tiene 2FA
    .\prueba-masiva.ps1 -Periodos 1,2         # solo algunos periodos
    .\prueba-masiva.ps1 -Grados 1,2           # solo algunos grados (prueba rapida)
    .\prueba-masiva.ps1 -SoloBoletines | -SoloConsolidados

  Si PowerShell lo bloquea:  powershell -ExecutionPolicy Bypass -File .\prueba-masiva.ps1
#>
param(
  [string]$Base = "http://localhost:8080",
  [string]$Token,
  [int[]]$Periodos = @(1,2,3,4),
  [int[]]$Grados = @(1..11),
  [switch]$SoloBoletines,
  [switch]$SoloConsolidados
)

$ErrorActionPreference = "Stop"
$ordinal = [string][char]186
function Enc([string]$s) { [uri]::EscapeDataString($s) }

# Algunas versiones de PowerShell devuelven el JSON de la API como UN arreglo dentro de otro.
# Aplanar deja una lista simple de elementos (estudiantes, materias, jobs...).
function Aplanar($x) {
  if ($null -eq $x) { return }
  if ($x -is [System.Collections.IEnumerable] -and $x -isnot [string] -and $x -isnot [System.Collections.IDictionary]) {
    foreach ($i in $x) { Aplanar $i }
  } else { $x }
}

# ---------- Login ----------
if (-not $Token) {
  $user = Read-Host "Usuario (ADMIN)"
  $sec  = Read-Host "Contrasena" -AsSecureString
  $pass = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec))
  $loginJson = ConvertTo-Json -InputObject @{ username = $user; password = $pass }
  $r = Invoke-RestMethod -Method Post -Uri "$Base/api/auth/login" -ContentType "application/json; charset=utf-8" `
        -Body ([Text.Encoding]::UTF8.GetBytes($loginJson))
  if ($r.twoFactorRequired) { throw "Ese usuario tiene 2FA: usa -Token con el valor de localStorage 'token' del navegador." }
  $Token = $r.token
}
$H = @{ Authorization = "Bearer $Token" }

$errores = New-Object System.Collections.ArrayList
$boletinesOk = 0; $consolidadosOk = 0
$inicio = Get-Date
$tmp = Join-Path $env:TEMP "consolidado_prueba.pdf"

foreach ($g in $Grados) {
  foreach ($s in @("A","B")) {
    $grade = "Grado $g$ordinal"; $classroom = "Salon $s"
    $et = "$grade $classroom"
    Write-Host ""
    Write-Host "== $et ==" -ForegroundColor Cyan

    # ----- Estudiantes: MISMO endpoint que usa el formulario del frontend -----
    try {
      $raw = @(Aplanar (Invoke-RestMethod -Uri "$Base/api/students/grade/$(Enc $grade)/class/$(Enc $classroom)" -Headers $H))
      $q = "grade=$(Enc $grade)&classroom=$(Enc $classroom)"
      $materias = @(Aplanar (Invoke-RestMethod -Uri "$Base/api/boletines/materias-todas?$q" -Headers $H))
    } catch {
      [void]$errores.Add("$et (consulta): $($_.Exception.Message)"); continue
    }

    # Ids robustos: el backend puede devolver algun estudiante solo como numero (JsonIdentityInfo)
    $ids = New-Object System.Collections.ArrayList
    foreach ($e in $raw) {
      if ($e -is [ValueType]) { [void]$ids.Add([long]$e) }
      elseif ($null -ne $e.id -and $e.active -ne $false) { [void]$ids.Add([long]$e.id) }
    }
    if ($ids.Count -eq 0) { Write-Host "  sin estudiantes, se omite" -ForegroundColor DarkGray; continue }
    Write-Host "  $($ids.Count) estudiantes, $(@($materias).Count) materias, periodos: $($Periodos -join ',')" -ForegroundColor DarkGray

    # ----- Boletines: UN job POR PERIODO (4 jobs), cada uno con TODOS los estudiantes del salon -----
    if (-not $SoloConsolidados) {
      $trabajos = @()
      foreach ($p in $Periodos) {
        $lista = New-Object System.Collections.ArrayList
        $n = 0
        foreach ($id in $ids) {
          $n++
          $ind = New-Object System.Collections.ArrayList
          foreach ($m in $materias) {
            $nombre = "$m"   # string PLANO (evita ClassCastException en Java)
            [void]$ind.Add(@{
              subjectName     = $nombre
              objetivoPeriodo = "Objetivo de $nombre - Periodo $p"
              ih = 1; fa = 1; faa = 1
            })
          }
          [void]$lista.Add(@{
            studentId = [long]$id; grade = "$grade"; classroom = "$classroom"; period = [int]$p; nLista = $n
            schoolYear = (Get-Date).Year.ToString()
            studentSubjectIndicators = $ind.ToArray()
            objetivoPeriodo = "Objetivo de prueba - Periodo $p"
            valoracionAcudiente = 0; valoracionAcudienteNota = 0
            compSocial = 0; compSocialIndicadores = ""; compSocialObjetivo = "Objetivo de Comportamiento Social - Periodo $p"
            compSocialIh = 1; compSocialFa = 1; compSocialFaa = 1
            directorSignature = $null; leftSignature = $null
          })
        }
        try {
          $body = ConvertTo-Json -InputObject @{ grade = "$grade"; classroom = "$classroom"; period = [int]$p; students = $lista.ToArray() } -Depth 8
          $job = Invoke-RestMethod -Method Post -Uri "$Base/api/boletines/generaciones" -Headers $H `
                   -ContentType "application/json; charset=utf-8" -Body ([Text.Encoding]::UTF8.GetBytes($body))
          $trabajos += @{ id = $job.jobId; periodo = $p; enviados = $lista.Count }
          Write-Host "  Periodo $p : job enviado con $($job.total) estudiantes" -ForegroundColor Cyan
        } catch { [void]$errores.Add("$et P$p (job): $($_.Exception.Message)") }
      }

      # Esperar a que terminen los jobs de este salon (el backend corre 2 a la vez, los demas quedan en cola)
      $pendientes = @($trabajos | ForEach-Object { $_.id })
      $resultado = @{}
      while ($pendientes.Count -gt 0) {
        Start-Sleep -Milliseconds 1000
        try {
          $jobs = @(Aplanar (Invoke-RestMethod -Uri "$Base/api/boletines/generaciones" -Headers $H))
        } catch { continue }
        $hechos = 0; $total = 0
        foreach ($t in $trabajos) {
          $j = $jobs | Where-Object { $_.jobId -eq $t.id } | Select-Object -First 1
          if ($null -eq $j) { $resultado[$t.id] = $null; continue }
          $hechos += $j.completed; $total += $j.total
          if ($j.status -ne "RUNNING" -and -not $resultado.ContainsKey($t.id)) { $resultado[$t.id] = $j }
        }
        $pendientes = @($trabajos | Where-Object { -not $resultado.ContainsKey($_.id) } | ForEach-Object { $_.id })
        Write-Progress -Activity "Boletines $et" -Status "$hechos / $total" -PercentComplete ([int](100 * $hechos / [Math]::Max(1, $total)))
      }
      Write-Progress -Activity "Boletines $et" -Completed

      foreach ($t in $trabajos) {
        $j = $resultado[$t.id]
        $cant = if ($j) { @($j.files).Count } else { 0 }
        $boletinesOk += $cant
        Write-Host "  Periodo $($t.periodo): $cant de $($t.enviados) boletines generados" -ForegroundColor Green
        if ($j) { foreach ($e in @($j.errors)) { [void]$errores.Add("$et P$($t.periodo) boletin: $e") } }
      }
    }

    # ----- Consolidados de cada periodo de este salon -----
    if (-not $SoloBoletines) {
      foreach ($p in $Periodos) {
        try {
          Invoke-WebRequest -UseBasicParsing -Uri "$Base/api/consolidado/grado-salon?$q&period=$p" -Headers $H -OutFile $tmp | Out-Null
          $consolidadosOk++
        } catch { [void]$errores.Add("$et P$p (consolidado): $($_.Exception.Message)") }
        finally { if (Test-Path $tmp) { Remove-Item $tmp -Force } }
      }
      Write-Host "  consolidados listos" -ForegroundColor Green
    }
  }
}

$dur = [int]((Get-Date) - $inicio).TotalSeconds
Write-Host ""
Write-Host "======== RESUMEN ($dur s) ========" -ForegroundColor Cyan
Write-Host "Boletines generados    : $boletinesOk"
Write-Host "Consolidados generados : $consolidadosOk"
Write-Host "Errores                : $($errores.Count)"
if ($errores.Count -gt 0) { $errores | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow } }