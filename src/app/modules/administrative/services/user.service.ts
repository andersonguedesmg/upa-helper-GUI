import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  protected handleError(error: any): Observable<any> {
    console.error('Erro =>', error);
    return throwError(error.error.message);
  }

  public getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(environment.baseApiUrl + 'users')
      .pipe(catchError(this.handleError), take(1));
  }

  public getUsersForTable(): Observable<User[]> {
    return this.http
      .get<User[]>(environment.baseApiUrl + 'users/table')
      .pipe(catchError(this.handleError), take(1));
  }

  public addUser(user: User): Observable<User[]> {
    return this.http
      .post(environment.baseApiUrl + 'auth/signup', user)
      .pipe(catchError(this.handleError), take(1));
  }

  public getUserById(id: number): Observable<User> {
    return this.http
      .get(environment.baseApiUrl + 'users/' + id)
      .pipe(catchError(this.handleError), take(1));
  }

  public updateUser(id: number, user: User): Observable<User> {
    return this.http
      .put(environment.baseApiUrl + 'users/' + id, user)
      .pipe(catchError(this.handleError), take(1));
  }
}
