import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Patient from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  public getPatients() {
    return this.http.get<Patient[]>(environment.baseApiUrl + 'patients');
  }

  public addPatient(patient: Patient) {
    return this.http.post(environment.baseApiUrl + 'patients', patient);
  }

  public getPatientById(id: number) {
    return this.http.get(environment.baseApiUrl + 'patients/' + id);
  }

  public updatePatient(id: number, patient: Patient) {
    return this.http.put(environment.baseApiUrl + 'patients/' + id, patient);
  }
}
