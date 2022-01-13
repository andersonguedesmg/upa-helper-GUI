import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Appointment from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  protected handleError(error: any): Observable<any> {
    console.error('Erro =>', error);
    return throwError(error.error.message);
  }

  public createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http
      .post(environment.baseApiUrl + 'appointments', appointment)
      .pipe(catchError(this.handleError), take(1));
  }
}
