import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Patient from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  protected handleError(error: any): Observable<any> {
    console.error('Erro =>', error);
    return throwError(error.error.message);
  }

  public getPatients(): Observable<Patient[]> {
    return this.http
      .get<Patient[]>(environment.baseApiUrl + 'patients')
      .pipe(catchError(this.handleError), take(1));
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http
      .post(environment.baseApiUrl + 'patients', patient)
      .pipe(catchError(this.handleError), take(1));
  }

  public getPatientById(id: number): Observable<Patient> {
    return this.http
      .get(environment.baseApiUrl + 'patients/' + id)
      .pipe(catchError(this.handleError), take(1));
  }

  public updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http
      .put(environment.baseApiUrl + 'patients/' + id, patient)
      .pipe(catchError(this.handleError), take(1));
  }
}
