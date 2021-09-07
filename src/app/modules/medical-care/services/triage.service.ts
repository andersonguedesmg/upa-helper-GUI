import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Triage from '../models/triage.model';

@Injectable({
  providedIn: 'root',
})
export class TriageService {
  constructor(private http: HttpClient) {}

  protected handleError(error: any): Observable<any> {
    console.error('Erro =>', error);
    return throwError(error.error.message);
  }

  public getTriages(): Observable<Triage[]> {
    return this.http
      .get<Triage[]>(environment.baseApiUrl + 'triages')
      .pipe(catchError(this.handleError), take(1));
  }

  public addTriage(triage: Triage): Observable<Triage> {
    return this.http
      .post(environment.baseApiUrl + 'triages', triage)
      .pipe(catchError(this.handleError), take(1));
  }

  public getTriageById(id: number): Observable<Triage> {
    return this.http
      .get(environment.baseApiUrl + 'triages/' + id)
      .pipe(catchError(this.handleError), take(1));
  }

  public updateTriage(id: number, triage: Triage): Observable<Triage> {
    return this.http
      .put(environment.baseApiUrl + 'triages/' + id, triage)
      .pipe(catchError(this.handleError), take(1));
  }
}
