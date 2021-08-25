import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Attendance from '../models/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  public getAttendances() {
    return this.http.get<Attendance[]>(environment.baseApiUrl + 'attendances');
  }

  public getAttendancesForTable() {
    return this.http.get<Attendance[]>(environment.baseApiUrl + 'attendances/table');
  }

  public addAttendance(attendance: Attendance) {
    return this.http.post(environment.baseApiUrl + 'attendances', attendance);
  }

  public getAttendanceById(id: number) {
    return this.http.get(environment.baseApiUrl + 'attendances/' + id);
  }

  public updateAttendance(id: number, attendance: Attendance) {
    return this.http.put(
      environment.baseApiUrl + 'attendances/' + id,
      attendance
    );
  }
}
