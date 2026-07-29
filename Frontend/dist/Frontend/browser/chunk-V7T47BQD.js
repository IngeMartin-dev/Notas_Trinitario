import {
  FormsModule
} from "./chunk-TCE2U3R2.js";
import {
  Component,
  HttpClient,
  __async,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-G4AEIR3O.js";

// src/app/reports/reports.ts
var Reports = class _Reports {
  http;
  grades = ["Grado 1\xBA", "Grado 2\xBA", "Grado 3\xBA", "Grado 4\xBA", "Grado 5\xBA", "Grado 6\xBA", "Grado 7\xBA", "Grado 8\xBA", "Grado 9\xBA", "Grado 10\xBA", "Grado 11\xBA"];
  classrooms = ["Salon A", "Salon B"];
  selectedReportType = "boletin";
  selectedGrade = "";
  selectedClassroom = "";
  selectedStudentId = "";
  selectedPeriod = "";
  showPreview = false;
  previewContent = "";
  allStudents = [];
  filteredStudents = [];
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    console.log("Reports component initialized");
    this.fetchAllStudents();
  }
  fetchAllStudents() {
    console.log("=== FETCHING ALL STUDENTS ===");
    this.http.get("http://localhost:8080/api/students").subscribe({
      next: (students) => {
        console.log("\u2705 All students loaded:", students.length);
        this.allStudents = students;
      },
      error: (error) => {
        console.error("\u274C Failed to fetch students:", error);
        this.allStudents = [];
      }
    });
  }
  selectReportType(type) {
    this.selectedReportType = type;
    this.showPreview = false;
    console.log("Selected report type:", type);
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
      this.filteredStudents = this.allStudents.filter((student) => student.grade === this.selectedGrade && student.classGroup === this.selectedClassroom);
    } else {
      this.filteredStudents = [];
    }
  }
  canGenerateReport() {
    if (this.selectedReportType === "boletin") {
      return !!(this.selectedGrade && this.selectedClassroom && this.selectedStudentId && this.selectedPeriod);
    } else {
      return !!(this.selectedGrade && this.selectedClassroom && this.selectedPeriod);
    }
  }
  previewReport() {
    return __async(this, null, function* () {
      if (!this.canGenerateReport())
        return;
      const student = this.selectedReportType === "boletin" ? this.filteredStudents.find((s) => s.id.toString() === this.selectedStudentId) || null : null;
      const content = yield this.generateReportContent(student);
      this.previewContent = content;
      this.showPreview = true;
    });
  }
  generateReport() {
    return __async(this, null, function* () {
      console.log("=== GENERATING REPORT WITH HIDDEN IFRAME (NO NEW TABS) ===");
      if (!this.canGenerateReport())
        return;
      if (this.selectedReportType === "boletin") {
        yield this.generateReportCardPDF();
      } else {
        const student = this.selectedReportType === "boletin" ? this.filteredStudents.find((s) => s.id.toString() === this.selectedStudentId) || null : null;
        const reportContent = yield this.generateReportContent(student);
        const iframe = document.createElement("iframe");
        iframe.style.position = "absolute";
        iframe.style.width = "0px";
        iframe.style.height = "0px";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
        iframe.onload = () => {
          setTimeout(() => {
            if (iframe.contentWindow) {
              iframe.contentWindow.print();
              console.log("\u2705 Print command sent from hidden iframe");
            }
            document.body.removeChild(iframe);
          }, 500);
        };
        if (iframe.contentDocument) {
          iframe.contentDocument.write(reportContent);
          iframe.contentDocument.close();
        }
      }
    });
  }
  generateReportCardPDF() {
    return __async(this, null, function* () {
      console.log("=== GENERATING REPORT CARD PDF FROM BACKEND ===");
      try {
        const studentId = this.selectedStudentId;
        const period = this.selectedPeriod;
        const reportCardsUrl = `http://localhost:8080/api/reportcards`;
        this.http.get(reportCardsUrl).subscribe({
          next: (reportCards) => __async(this, null, function* () {
            console.log("\u2705 Found report cards:", reportCards.length);
            let reportCard = reportCards.find((rc) => rc.student?.id?.toString() === studentId && rc.academicPeriod === period);
            if (!reportCard) {
              alert("No existe un bolet\xEDn de calificaciones para este estudiante en el per\xEDodo seleccionado. Por favor, genere primero las calificaciones.");
              return;
            }
            const pdfUrl = `http://localhost:8080/api/reportcards/${reportCard.id}/pdf`;
            console.log("Opening PDF from:", pdfUrl);
            const iframe = document.createElement("iframe");
            iframe.style.position = "fixed";
            iframe.style.top = "-10000px";
            iframe.style.left = "-10000px";
            iframe.style.width = "0";
            iframe.style.height = "0";
            iframe.style.border = "none";
            document.body.appendChild(iframe);
            const cleanup = () => {
              setTimeout(() => {
                if (document.body.contains(iframe)) {
                  document.body.removeChild(iframe);
                }
              }, 100);
            };
            iframe.src = pdfUrl;
            iframe.onload = cleanup;
            console.log("\u2705 PDF opened in hidden iframe");
          }),
          error: (error) => {
            console.error("\u274C Failed to fetch report cards:", error);
            alert("Error al cargar los boletines de calificaciones.");
          }
        });
      } catch (error) {
        console.error("\u274C Error generating PDF:", error);
        alert("Error al generar el PDF del bolet\xEDn.");
      }
    });
  }
  generateReportContent(student) {
    return __async(this, null, function* () {
      const logoPaths = [
        "./Frontend/public/Logo Colegio.png",
        "Frontend/public/Logo Colegio.png",
        "Logo Colegio.png",
        "/Frontend/public/Logo Colegio.png"
      ];
      let logoBase64 = "";
      for (const path of logoPaths) {
        try {
          const logoResponse = yield fetch(path);
          if (logoResponse.ok) {
            const logoBlob = yield logoResponse.blob();
            logoBase64 = yield new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.readAsDataURL(logoBlob);
            });
            console.log("Logo loaded successfully from:", path);
            break;
          }
        } catch (error) {
          console.log("Failed to load logo from:", path);
        }
      }
      const getLogoHTML = () => {
        return logoBase64 ? `
        <img src="${logoBase64}" alt="Logo Colegio" class="logo" id="schoolLogo">
      ` : `
        <div class="logo-fallback">\u{1F3EB}</div>
      `;
      };
      let reportTitle = "";
      let reportSubtitle = "";
      let reportContent = "";
      switch (this.selectedReportType) {
        case "boletin":
          reportTitle = "BOLET\xCDN DE CALIFICACIONES";
          reportSubtitle = `Per\xEDodo Acad\xE9mico: ${this.getPeriodName(this.selectedPeriod)}`;
          reportContent = this.generateReportCardContent(student);
          break;
        case "estudiantes":
          reportTitle = "LISTA DE ESTUDIANTES";
          reportSubtitle = `Grado ${this.selectedGrade} - ${this.selectedClassroom} | ${this.getPeriodName(this.selectedPeriod)}`;
          reportContent = this.generateStudentListContent();
          break;
        case "calificaciones":
          reportTitle = "REPORTE DE CALIFICACIONES";
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
            <div class="subtitle">Sistema de Gesti\xF3n Acad\xE9mica</div>
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
        <\/script>
      </body>
      </html>
    `;
    });
  }
  generateReportCardContent(student) {
    return `
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Estudiante:</span> ${student.name} ${student.surname}
        </div>
        <div class="info-item">
          <span class="info-label">Documento:</span> ${student.documentNumber || "No proporcionado"}
        </div>
        <div class="info-item">
          <span class="info-label">Grado:</span> ${student.grade}
        </div>
        <div class="info-item">
          <span class="info-label">Sal\xF3n:</span> ${student.classGroup}
        </div>
        <div class="info-item">
          <span class="info-label">Per\xEDodo:</span> ${this.getPeriodName(this.selectedPeriod)}
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span> ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")}
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Asignatura</th>
            <th>Per\xEDodo 1</th>
            <th>Per\xEDodo 2</th>
            <th>Per\xEDodo 3</th>
            <th>Per\xEDodo 4</th>
            <th>Definitiva</th>
          </tr>
        </thead>
        <tbody>
          ${this.generateSampleGrades().map((subject) => `
            <tr>
              <td>${subject.name}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p1)}">${subject.p1}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p2)}">${subject.p2}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p3)}">${subject.p3}</td>
              <td class="grade-cell ${this.getGradeClass(subject.p4)}">${subject.p4}</td>
              <td class="grade-cell ${this.getGradeClass(subject.final)}">${subject.final}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      
      <div class="signatures-section">
        <h3>OBSERVACIONES</h3>
        <p><strong>Comentarios:</strong> El estudiante muestra buen rendimiento acad\xE9mico y participaci\xF3n activa en clase.</p>
        <p><strong>Dificultades:</strong> Ninguna reportada.</p>
        <p><strong>\xC1reas Perdidas:</strong> Ninguna.</p>
        
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
  generateStudentListContent() {
    return `
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Grado:</span> ${this.selectedGrade}
        </div>
        <div class="info-item">
          <span class="info-label">Sal\xF3n:</span> ${this.selectedClassroom}
        </div>
        <div class="info-item">
          <span class="info-label">Total Estudiantes:</span> ${this.filteredStudents.length}
        </div>
        <div class="info-item">
          <span class="info-label">Per\xEDodo:</span> ${this.getPeriodName(this.selectedPeriod)}
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span> ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")}
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
              <td>${student.documentNumber || "No proporcionado"}</td>
              <td class="grade-cell passing-grade">\u2705 Activo</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }
  generateGradesReportContent() {
    return `
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Grado:</span> ${this.selectedGrade}
        </div>
        <div class="info-item">
          <span class="info-label">Sal\xF3n:</span> ${this.selectedClassroom}
        </div>
        <div class="info-item">
          <span class="info-label">Per\xEDodo:</span> ${this.getPeriodName(this.selectedPeriod)}
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span> ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")}
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Matem\xE1ticas</th>
            <th>Espa\xF1ol</th>
            <th>Ciencias</th>
            <th>Sociales</th>
            <th>Ingl\xE9s</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          ${this.filteredStudents.map((student) => {
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
    }).join("")}
        </tbody>
      </table>
    `;
  }
  generateSampleGrades() {
    const subjects = [
      { name: "Matem\xE1ticas", p1: "4.2", p2: "4.5", p3: "4.1", p4: "4.3", final: "4.3" },
      { name: "Espa\xF1ol", p1: "3.8", p2: "4.0", p3: "4.2", p4: "4.1", final: "4.0" },
      { name: "Ciencias Naturales", p1: "4.0", p2: "4.3", p3: "4.1", p4: "4.4", final: "4.2" },
      { name: "Ciencias Sociales", p1: "3.9", p2: "4.1", p3: "4.0", p4: "4.2", final: "4.1" },
      { name: "Educaci\xF3n F\xEDsica", p1: "4.5", p2: "4.7", p3: "4.6", p4: "4.8", final: "4.7" },
      { name: "Ingl\xE9s", p1: "3.7", p2: "3.9", p3: "4.0", p4: "4.1", final: "3.9" }
    ];
    return subjects;
  }
  generateRandomGrades() {
    return {
      math: (Math.random() * 2 + 3).toFixed(1),
      spanish: (Math.random() * 2 + 3).toFixed(1),
      science: (Math.random() * 2 + 3).toFixed(1),
      social: (Math.random() * 2 + 3).toFixed(1),
      english: (Math.random() * 2 + 3).toFixed(1)
    };
  }
  getGradeClass(grade) {
    const numGrade = parseFloat(grade);
    if (numGrade < 3)
      return "failing-grade";
    return "passing-grade";
  }
  getPeriodName(period) {
    const periodNames = {
      "2024-1": "2024 - Primer Per\xEDodo",
      "2024-2": "2024 - Segundo Per\xEDodo",
      "2024-3": "2024 - Tercer Per\xEDodo",
      "2024-4": "2024 - Cuarto Per\xEDodo"
    };
    return periodNames[period] || period;
  }
  static \u0275fac = function Reports_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Reports)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Reports, selectors: [["app-reports"]], decls: 3, vars: 0, consts: [[1, "reports-container"]], template: function Reports_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "En Desarrollo");
      \u0275\u0275domElementEnd()();
    }
  }, dependencies: [FormsModule], styles: ["\n\n.reports-container[_ngcontent-%COMP%] {\n  padding: var(--sp-6);\n  max-width: 1240px;\n  margin: 0 auto;\n  font-family: var(--font);\n}\n.reports-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-6);\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.reports-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-5);\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.report-types-panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  width: 280px;\n  max-width: 100%;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.report-types-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-4);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.report-type-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.report-type-btn[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-align: left;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n}\n.report-type-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.report-type-btn.active[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.report-type-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.report-content-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n}\n.student-selection[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-5);\n}\n.student-selection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.selection-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-4);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.selection-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  align-items: end;\n  flex-wrap: wrap;\n}\n.grade-classroom-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 150px;\n}\n.grade-classroom-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.students-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.period-selection[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-2);\n  font-size: 0.85rem;\n}\n.grade-classroom-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.students-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.period-selection[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n}\n.grade-classroom-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.students-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.period-selection[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.students-list[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n  min-width: 280px;\n}\n.period-selection[_ngcontent-%COMP%] {\n  margin: 0 var(--sp-4) 0 0;\n  min-width: 250px;\n}\n.period-selection[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.print-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: var(--sp-3);\n  vertical-align: top;\n  flex-wrap: wrap;\n}\n.print-button[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.1rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  font-family: inherit;\n}\n.print-button.primary[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: #fff;\n}\n.print-button.primary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-600);\n}\n.print-button.secondary[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.print-button.secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.print-button[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.preview-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4);\n  background: var(--surface-2);\n}\n.preview-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-3);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.preview-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-sm);\n  padding: var(--sp-4);\n  min-height: 200px;\n  border: 1px solid var(--border);\n  overflow-x: auto;\n}\n@media (max-width: 768px) {\n  .reports-container[_ngcontent-%COMP%] {\n    padding: var(--sp-4);\n  }\n  .reports-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .report-types-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .selection-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .grade-classroom-selector[_ngcontent-%COMP%], \n   .period-selection[_ngcontent-%COMP%], \n   .students-list[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n  .period-selection[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .students-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .print-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    margin-left: 0;\n    margin-top: var(--sp-3);\n    width: 100%;\n  }\n  .print-button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=reports.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Reports, [{
    type: Component,
    args: [{ selector: "app-reports", imports: [FormsModule], template: '<div class="reports-container">\n  <h2>En Desarrollo</h2>\n\n  \n', styles: ["/* src/app/reports/reports.css */\n.reports-container {\n  padding: var(--sp-6);\n  max-width: 1240px;\n  margin: 0 auto;\n  font-family: var(--font);\n}\n.reports-container h2 {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-6);\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.reports-layout {\n  display: flex;\n  gap: var(--sp-5);\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.report-types-panel {\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  width: 280px;\n  max-width: 100%;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.report-types-panel h3 {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-4);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.report-type-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.report-type-btn {\n  padding: 0.8rem 1rem;\n  border: 1px solid var(--border-strong);\n  background: var(--surface);\n  color: var(--text-2);\n  border-radius: var(--r-sm);\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-align: left;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: inherit;\n}\n.report-type-btn:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.report-type-btn.active {\n  background: var(--brand);\n  color: #fff;\n  border-color: var(--brand);\n}\n.report-type-btn:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.report-content-panel {\n  flex: 1;\n  min-width: 0;\n  background: var(--surface);\n  border-radius: var(--r-lg);\n  padding: var(--sp-5);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n}\n.student-selection {\n  margin-bottom: var(--sp-5);\n}\n.student-selection h3,\n.selection-controls h3 {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-4);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.selection-controls {\n  display: flex;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  align-items: end;\n  flex-wrap: wrap;\n}\n.grade-classroom-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 150px;\n}\n.grade-classroom-selector label,\n.students-list label,\n.period-selection label {\n  font-weight: 500;\n  color: var(--text-2);\n  font-size: 0.85rem;\n}\n.grade-classroom-selector select,\n.students-list select,\n.period-selection select {\n  width: 100%;\n  padding: 0.65rem 0.8rem;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  background: var(--surface);\n  color: var(--text-1);\n  font-family: inherit;\n}\n.grade-classroom-selector select:focus,\n.students-list select:focus,\n.period-selection select:focus {\n  outline: none;\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.students-list {\n  margin-top: var(--sp-4);\n  min-width: 280px;\n}\n.period-selection {\n  margin: 0 var(--sp-4) 0 0;\n  min-width: 250px;\n}\n.period-selection select {\n  max-width: 200px;\n}\n.print-actions {\n  display: inline-flex;\n  gap: var(--sp-3);\n  vertical-align: top;\n  flex-wrap: wrap;\n}\n.print-button {\n  padding: 0.7rem 1.1rem;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background-color 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  font-family: inherit;\n}\n.print-button.primary {\n  background: var(--brand);\n  color: #fff;\n}\n.print-button.primary:hover {\n  background: var(--brand-600);\n}\n.print-button.secondary {\n  background: var(--surface);\n  color: var(--text-2);\n  border-color: var(--border-strong);\n}\n.print-button.secondary:hover {\n  border-color: var(--brand);\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.print-button:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.25);\n}\n.preview-section {\n  margin-top: var(--sp-5);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: var(--sp-4);\n  background: var(--surface-2);\n}\n.preview-section h3 {\n  color: var(--text-1);\n  margin: 0 0 var(--sp-3);\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.preview-content {\n  background: var(--surface);\n  border-radius: var(--r-sm);\n  padding: var(--sp-4);\n  min-height: 200px;\n  border: 1px solid var(--border);\n  overflow-x: auto;\n}\n@media (max-width: 768px) {\n  .reports-container {\n    padding: var(--sp-4);\n  }\n  .reports-layout {\n    flex-direction: column;\n  }\n  .report-types-panel {\n    width: 100%;\n  }\n  .selection-controls {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .grade-classroom-selector,\n  .period-selection,\n  .students-list {\n    min-width: 0;\n    width: 100%;\n  }\n  .period-selection select,\n  .students-list select {\n    max-width: none;\n  }\n  .print-actions {\n    justify-content: flex-start;\n    margin-left: 0;\n    margin-top: var(--sp-3);\n    width: 100%;\n  }\n  .print-button {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=reports.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Reports, { className: "Reports", filePath: "app/reports/reports.ts", lineNumber: 21 });
})();
export {
  Reports
};
//# sourceMappingURL=chunk-V7T47BQD.js.map
