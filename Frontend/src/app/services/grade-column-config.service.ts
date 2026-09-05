import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type GradeColumnType = 'QUIZ' | 'TALLER' | 'ACTIVIDAD';

export interface GradeColumn {
  id: string;
  name: string;
  type: GradeColumnType;
}

export interface GradeColumnConfigDto {
  exists: boolean;
  id?: number;
  columnsJson: string;
  quizzesPct: number;
  talleresPct: number;
  actividadesPct: number;
}

@Injectable({ providedIn: 'root' })
export class GradeColumnConfigService {
  private readonly http = inject(HttpClient);
  private readonly API_BASE = 'http://localhost:8080/api/grade-columns';

  getConfig(teacherId: number, subjectName: string, grade: string, classroom: string): Observable<GradeColumnConfigDto> {
    return this.http.get<GradeColumnConfigDto>(this.API_BASE, {
      params: { teacherId: String(teacherId), subjectName, grade, classroom }
    });
  }

  saveConfig(
    teacherId: number, subjectName: string, grade: string, classroom: string,
    columns: GradeColumn[], quizzesPct: number, talleresPct: number, actividadesPct: number
  ): Observable<GradeColumnConfigDto> {
    return this.http.post<GradeColumnConfigDto>(this.API_BASE, {
      teacherId, subjectName, grade, classroom,
      columnsJson: JSON.stringify(columns),
      quizzesPct, talleresPct, actividadesPct
    });
  }
}