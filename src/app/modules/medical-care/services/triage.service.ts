import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Triage from '../models/triage.model';

@Injectable({
  providedIn: 'root',
})
export class TriageService {
  constructor(private http: HttpClient) {}

  public getTriages() {
    return this.http.get<Triage[]>(environment.baseApiUrl + 'triages');
  }

  public addTriage(triage: Triage) {
    return this.http.post(environment.baseApiUrl + 'triages', triage);
  }

  public getTriageById(id: number) {
    return this.http.get(environment.baseApiUrl + 'triages/' + id);
  }

  public updateTriage(id: number, triage: Triage) {
    return this.http.put(environment.baseApiUrl + 'triages/' + id, triage);
  }
}
