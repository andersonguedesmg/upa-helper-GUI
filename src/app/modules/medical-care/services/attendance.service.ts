import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Attendance from '../models/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  protected handleError(error: any): Observable<any> {
    console.error('Erro =>', error);
    return throwError(error.error.message);
  }

  public getAttendancesCompletedForTable(): Observable<Attendance[]> {
    return this.http
      .get<Attendance[]>(environment.baseApiUrl + 'attendances/table/completed')
      .pipe(catchError(this.handleError), take(1));
  }

  public getAttendancesOpenedForTable(): Observable<Attendance[]> {
    return this.http
      .get<Attendance[]>(environment.baseApiUrl + 'attendances/table/opened')
      .pipe(catchError(this.handleError), take(1));
  }

  public createAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http
      .post(environment.baseApiUrl + 'attendances', attendance)
      .pipe(catchError(this.handleError), take(1));
  }

  public getAttendanceById(id: number): Observable<Attendance> {
    return this.http
      .get(environment.baseApiUrl + 'attendances/' + id)
      .pipe(catchError(this.handleError), take(1));
  }

  public updateAttendance(
    id: number,
    attendance: Attendance
  ): Observable<Attendance> {
    return this.http
      .put(environment.baseApiUrl + 'attendances/' + id, attendance)
      .pipe(catchError(this.handleError), take(1));
  }
}
