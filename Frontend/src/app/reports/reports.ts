import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Student {
  id: number;
  name: string;
  surname: string;
  grade: string;
  classGroup: string;
  documentNumber: string;
}

@Component({
  selector: 'app-reports',
  imports: [FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports implements OnInit {
  grades: string[] = ['Grado 1º', 'Grado 2º', 'Grado 3º', 'Grado 4º', 'Grado 5º', 'Grado 6º', 'Grado 7º', 'Grado 8º', 'Grado 9º', 'Grado 10º', 'Grado 11º'];
  classrooms: string[] = ['Salon A', 'Salon B'];
  
  selectedReportType: string = 'boletin';
  selectedGrade: string = '';
  selectedClassroom: string = '';
  selectedStudentId: string = '';
  selectedPeriod: string = '';
  showPreview: boolean = false;
  previewContent: string = '';
  
  allStudents: Student[] = [];
  filteredStudents: Student[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Reports component initialized');
    this.fetchAllStudents();
  }

  fetchAllStudents() {
    console.log('=== FETCHING ALL STUDENTS ===');
    this.http.get<Student[]>('http://localhost:8080/api/students').subscribe({
      next: (students) => {
        console.log('✅ All students loaded:', students.length);
        this.allStudents = students;
      },
      error: (error) => {
        console.error('❌ Failed to fetch students:', error);
        this.allStudents = [];
      }
    });
  }

  selectReportType(type: string) {
    this.selectedReportType = type;
    this.showPreview = false;
    console.log('Selected report type:', type);
  }

  onGradeChange() {
    this.filterStudents();
    this.showPreview = false;
  }

  onClassroomChange() {
    this.filterStudents();
    this.showPreview = false;
  }

  filterStudents() {
    if (this.selectedGrade && this.selectedClassroom) {
      this.filteredStudents = this.allStudents.filter(student => 
        student.grade === this.selectedGrade && student.classGroup === this.selectedClassroom
      );
    } else {
      this.filteredStudents = [];
    }
  }

  canGenerateReport(): boolean {
    if (this.selectedReportType === 'boletin') {
      return !!(this.selectedGrade && this.selectedClassroom && this.selectedStudentId && this.selectedPeriod);
    } else {
      return !!(this.selectedGrade && this.selectedClassroom && this.selectedPeriod);
    }
  }

  async previewReport() {
    if (!this.canGenerateReport()) return;
    
    const student = this.selectedReportType === 'boletin' 
      ? this.filteredStudents.find(s => s.id.toString() === this.selectedStudentId) || null
      : null;

    const content = await this.generateReportContent(student);
    this.previewContent = content;
    this.showPreview = true;
  }

  async generateReport() {
    console.log('=== GENERATING REPORT WITH HIDDEN IFRAME (NO NEW TABS) ===');
    
    if (!this.canGenerateReport()) return;
    
    // For boletin (report cards), use the PDF endpoint from backend
    if (this.selectedReportType === 'boletin') {
      await this.generateReportCardPDF();
    } else {
      // For other reports, use hidden iframe approach (no new tabs)
      const student = this.selectedReportType === 'boletin' 
        ? this.filteredStudents.find(s => s.id.toString() === this.selectedStudentId) || null
        : null;

      const reportContent = await this.generateReportContent(student);
      
      // Create hidden iframe for printing (no new tabs/windows)
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      
      // Add to DOM (hidden)
      document.body.appendChild(iframe);
      
      // Wait for iframe to load
      iframe.onload = () => {
        setTimeout(() => {
          // Print from iframe
          if (iframe.contentWindow) {
            iframe.contentWindow.print();
            console.log('✅ Print command sent from hidden iframe');
          }
          
          // Clean up after printing
          document.body.removeChild(iframe);
        }, 500);
      };
      
      // Write content to iframe
      if (iframe.contentDocument) {
        iframe.contentDocument.write(reportContent);
        iframe.contentDocument.close();
      }
    }
  }

  async generateReportCardPDF() {
    console.log('=== GENERATING REPORT CARD PDF FROM BACKEND ===');
    
    try {
      // First, we need to find or create a report card for this student
      const studentId = this.selectedStudentId;
      const period = this.selectedPeriod;
      
      // Check if report card exists for this student and period
      const reportCardsUrl = `http://localhost:8080/api/reportcards`;
      
      this.http.get<any[]>(reportCardsUrl).subscribe({
        next: async (reportCards) => {
          console.log('✅ Found report cards:', reportCards.length);
          
          // Look for existing report card for this student and period
          let reportCard = reportCards.find(rc => 
            rc.student?.id?.toString() === studentId && 
            rc.academicPeriod === period
          );
          
          if (!reportCard) {
            alert('No existe un boletín de calificaciones para este estudiante en el período seleccionado. Por favor, genere primero las calificaciones.');
            return;
          }
          
          // Get the PDF
          const pdfUrl = `http://localhost:8080/api/reportcards/${reportCard.id}/pdf`;
          console.log('Opening PDF from:', pdfUrl);
          
          // Create hidden iframe for PDF
          const iframe = document.createElement('iframe');
          iframe.style.position = 'fixed';
          iframe.style.top = '-10000px';
          iframe.style.left = '-10000px';
          iframe.style.width = '0';
          iframe.style.height = '0';
          iframe.style.border = 'none';
          
          document.body.appendChild(iframe);
          
          // Set up message listener for cleanup
          const cleanup = () => {
            setTimeout(() => {
              if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
              }
            }, 100);
          };
          
          // Load PDF - browser will show its built-in PDF viewer
          iframe.src = pdfUrl;
          iframe.onload = cleanup;
          
          console.log('✅ PDF opened in hidden iframe');
        },
        error: (error) => {
          console.error('❌ Failed to fetch report cards:', error);
          alert('Error al cargar los boletines de calificaciones.');
        }
      });
      
    } catch (error) {
      console.error('❌ Error generating PDF:', error);
      alert('Error al generar el PDF del boletín.');
    }
  }

  async generateReportContent(student: Student | null | undefined): Promise<string> {
    // Try multiple paths to load the logo (simplified)
    const logoPaths = [
      './Frontend/public/Logo Colegio.png',
      'Frontend/public/Logo Colegio.png',
      'Logo Colegio.png',
      '/Frontend/public/Logo Colegio.png'
    ];
    
    let logoBase64 = '';
    
    // Try to load logo as base64
    for (const path of logoPaths) {
      try {
        const logoResponse = await fetch(path);
        if (logoResponse.ok) {
          const logoBlob = await logoResponse.blob();
          logoBase64 = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(logoBlob);
          });
          console.log('Logo loaded successfully from:', path);
          break;
        }
      } catch (error) {
        console.log('Failed to load logo from:', path);
      }
    }
    
    const getLogoHTML = () => {
      return logoBase64 ? `
        <img src="${logoBase64}" alt="Logo Colegio" class="logo" id="schoolLogo">
      ` : `
        <div class="logo-fallback">🏫</div>
      `;
    };

    let reportTitle = '';
    let reportSubtitle = '';
    let reportContent = '';

    switch (this.selectedReportType) {
      case 'boletin':
        reportTitle = 'BOLETÍN DE CALIFICACIONES';
        reportSubtitle = `Período Académico: ${this.getPeriodName(this.selectedPeriod)}`;
        reportContent = this.generateReportCardContent(student!);
        break;
      case 'estudiantes':
        reportTitle = 'LISTA DE ESTUDIANTES';
        reportSubtitle = `Grado ${this.selectedGrade} - ${this.selectedClassroom} | ${this.getPeriodName(this.selectedPeriod)}`;
        reportContent = this.generateStudentListContent();
        break;
      case 'calificaciones':
        reportTitle = 'REPORTE DE CALIFICACIONES';
        reportSubtitle = `Grado ${this.selectedGrade} - ${this.selectedClassroom} | ${this.getPeriodName(this.selectedPeriod)}`;
        reportContent = this.generateGradesReportContent();
        break;
    }

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${reportTitle}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            background: white;
            color: #333;
          }
          
          /* Hide browser headers and footers */
          @page {
            margin: 15mm;
            size: A4;
          }
          
          /* Hide URL, date, and other browser-generated content */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Hide browser headers/footers */
          @media print {
            @page {
              margin: 15mm;
              size: A4;
            }
            
            /* Hide browser generated content */
            * {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            /* Hide URL bar and other browser chrome */
            html, body {
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Additional print optimizations */
            body::after {
              content: "" !important;
            }
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
            padding: 20px;
            border: 3px solid #007bff;
            border-radius: 10px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          }
          .header-content {
            text-align: center;
            flex: 1;
          }
          .logo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid #007bff;
            object-fit: contain;
            background: white;
            padding: 5px;
          }
          .logo-fallback {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid #007bff;
            background: linear-gradient(135deg, #007bff, #0056b3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
          }
          .school-name {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin: 0 0 10px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .document-title {
            font-size: 18px;
            color: #333;
            margin: 0 0 5px 0;
            font-weight: 600;
          }
          .subtitle {
            font-size: 14px;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .info-section {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 5px;
            border: 1px solid #dee2e6;
            flex-wrap: wrap;
            gap: 10px;
          }
          .info-item {
            font-size: 12px;
            color: #495057;
            flex: 1;
            min-width: 150px;
          }
          .info-label {
            font-weight: bold;
            color: #007bff;
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            border: 2px solid #000;
            margin-top: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          th, td { 
            border: 1px solid #000; 
            padding: 12px; 
            text-align: left; 
            font-size: 12px;
          }
          th { 
            background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
            color: white;
            font-weight: bold; 
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .grade-cell {
            text-align: center;
            font-weight: bold;
          }
          .failing-grade {
            color: #dc3545;
          }
          .passing-grade {
            color: #28a745;
          }
          tr:nth-child(even) {
            background-color: #f8f9fa;
          }
          .signatures-section {
            margin-top: 40px;
            page-break-inside: avoid;
          }
          .signature-table {
            width: 100%;
            margin-top: 20px;
          }
          .signature-cell {
            border: 1px solid #000;
            padding: 20px;
            text-align: center;
            height: 80px;
            vertical-align: bottom;
          }
          @media print {
            body { margin: 10px; }
            .header { border: 2px solid #000; }
            tr:hover { background-color: transparent; }
            .logo { width: 60px; height: 60px; }
            .info-section { flex-wrap: nowrap; }
            
            /* Force hide browser generated content */
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              background: white !important;
            }
            
            /* Hide any browser chrome */
            * {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            /* Additional clean print styles */
            @page {
              margin: 15mm;
              size: A4;
              
              /* Hide headers and footers */
              @top-center {
                content: none;
              }
              
              @bottom-center {
                content: none;
              }
              
              @top-left {
                content: none;
              }
              
              @bottom-right {
                content: none;
              }
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          ${getLogoHTML()}
          <div class="header-content">
            <div class="school-name">COLEGIO TRINITARIO</div>
            <div class="document-title">${reportTitle}</div>
            <div class="subtitle">Sistema de Gestión Académica</div>
          </div>
        </div>
        
        ${reportContent}
        
        <script>
          window.onload = function() {
            console.log('Report window loaded');
            // Additional logo fallback handling
            const logoImg = document.getElementById('schoolLogo');
            if (logoImg) {
              logoImg.onerror = function() {
                console.log('Logo failed to load');
                this.style.display = 'none';
                const fallbackDiv = this.nextElementSibling;
                if (fallbackDiv) {
                  fallbackDiv.style.display = 'flex';
                }
              };
            }
          };
        </script>
      </body>
      </html>
    `;
  }

  generateReportCardContent(student: Student): string {
    return `
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Estudiante:</span> ${student.name} ${student.surname}
        </div>
        <div class="info-item">
          <span class="info-label">Documento:</span> ${student.documentNumber || 'No proporcionado'}
        </div>
        <div class="info-item">
          <span class="info-label">Grado:</span> ${student.grade}
        </div>
        <div class="info-item">
          <span class="info-label">Salón:</span> ${student.classGroup}
        </div>
        <div class="info-item">
          <span class="info-label">Período:</span> ${this.getPeriodName(this.selectedPeriod)}
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span> ${new Date().toLocaleDateString('es-ES')}
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Asignatura</th>
            <th>Período 1</th>
            <th>Período 2</th>
            <th>Período 3</th>
            <th>Período 4</th>
            <th>Definitiva</th>
          </tr>
        </thead>
        <tbody>
          ${this.generateSampleGrades().map(subject => `
            <tr>
              <td>${subject.name}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p1)}">${subject.p1}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p2)}">${subject.p2}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p3)}">${subject.p3}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p4)}">${subject.p4}</td>
              <td class="grade-cell ${this.getGradeClass(subject.final)}">${subject.final}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div class="signatures-section">
        <h3>OBSERVACIONES</h3>
        <p><strong>Comentarios:</strong> El estudiante muestra buen rendimiento académico y participación activa en clase.</p>
        <p><strong>Dificultades:</strong> Ninguna reportada.</p>
        <p><strong>Áreas Perdidas:</strong> Ninguna.</p>
        
        <h3>FIRMAS</h3>
        <table class="signature-table">
          <tr>
            <td class="signature-cell">DOCENTE DIRECTOR DE GRUPO<br><br>________________________</td>
            <td class="signature-cell">RECTOR(A)<br><br>________________________</td>
            <td class="signature-cell">ACUDIENTE<br><br>________________________</td>
          </tr>
        </table>
      </div>
    `;
  }

  generateStudentListContent(): string {
    return `
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Grado:</span> ${this.selectedGrade}
        </div>
        <div class="info-item">
          <span class="info-label">Salón:</span> ${this.selectedClassroom}
        </div>
        <div class="info-item">
          <span class="info-label">Total Estudiantes:</span> ${this.filteredStudents.length}
        </div>
        <div class="info-item">
          <span class="info-label">Período:</span> ${this.getPeriodName(this.selectedPeriod)}
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span> ${new Date().toLocaleDateString('es-ES')}
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Completo</th>
            <th>Documento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          ${this.filteredStudents.map((student, index) => `
            <tr>
              <td class="grade-cell">${index + 1}</td>
              <td>${student.name} ${student.surname}</td>
              <td>${student.documentNumber || 'No proporcionado'}</td>
              <td class="grade-cell passing-grade">✅ Activo</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  generateGradesReportContent(): string {
    return `
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Grado:</span> ${this.selectedGrade}
        </div>
        <div class="info-item">
          <span class="info-label">Salón:</span> ${this.selectedClassroom}
        </div>
        <div class="info-item">
          <span class="info-label">Período:</span> ${this.getPeriodName(this.selectedPeriod)}
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span> ${new Date().toLocaleDateString('es-ES')}
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Matemáticas</th>
            <th>Español</th>
            <th>Ciencias</th>
            <th>Sociales</th>
            <th>Inglés</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          ${this.filteredStudents.map(student => {
            const grades = this.generateRandomGrades();
            const average = ((grades.math + grades.spanish + grades.science + grades.social + grades.english) / 5).toFixed(2);
            return `
              <tr>
                <td>${student.name} ${student.surname}</td>
                <td class="grade-cell ${this.getGradeClass(grades.math)}">${grades.math}</td>
                <td class="grade-cell ${this.getGradeClass(grades.spanish)}">${grades.spanish}</td>
                <td class="grade-cell ${this.getGradeClass(grades.science)}">${grades.science}</td>
                <td class="grade-cell ${this.getGradeClass(grades.social)}">${grades.social}</td>
                <td class="grade-cell ${this.getGradeClass(grades.english)}">${grades.english}</td>
                <td class="grade-cell ${this.getGradeClass(average)}">${average}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  generateSampleGrades(): any[] {
    const subjects = [
      { name: 'Matemáticas', p1: '4.2', p2: '4.5', p3: '4.1', p4: '4.3', final: '4.3' },
      { name: 'Español', p1: '3.8', p2: '4.0', p3: '4.2', p4: '4.1', final: '4.0' },
      { name: 'Ciencias Naturales', p1: '4.0', p2: '4.3', p3: '4.1', p4: '4.4', final: '4.2' },
      { name: 'Ciencias Sociales', p1: '3.9', p2: '4.1', p3: '4.0', p4: '4.2', final: '4.1' },
      { name: 'Educación Física', p1: '4.5', p2: '4.7', p3: '4.6', p4: '4.8', final: '4.7' },
      { name: 'Inglés', p1: '3.7', p2: '3.9', p3: '4.0', p4: '4.1', final: '3.9' }
    ];
    return subjects;
  }

  generateRandomGrades(): any {
    return {
      math: (Math.random() * 2 + 3).toFixed(1),
      spanish: (Math.random() * 2 + 3).toFixed(1),
      science: (Math.random() * 2 + 3).toFixed(1),
      social: (Math.random() * 2 + 3).toFixed(1),
      english: (Math.random() * 2 + 3).toFixed(1)
    };
  }

  getGradeClass(grade: string): string {
    const numGrade = parseFloat(grade);
    if (numGrade < 3.0) return 'failing-grade';
    return 'passing-grade';
  }

  getPeriodName(period: string): string {
    const periodNames: { [key: string]: string } = {
      '2024-1': '2024 - Primer Período',
      '2024-2': '2024 - Segundo Período',
      '2024-3': '2024 - Tercer Período',
      '2024-4': '2024 - Cuarto Período'
    };
    return periodNames[period] || period;
  }
}
