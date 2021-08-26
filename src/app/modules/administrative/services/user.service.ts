import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get<User[]>(environment.baseApiUrl + 'users');
  }

  public getUsersForTable() {
    return this.http.get<User[]>(environment.baseApiUrl + 'users/table');
  }

  public addUser(user: User) {
    return this.http.post(environment.baseApiUrl + 'users', user);
  }

  public getUserById(id: number) {
    return this.http.get(environment.baseApiUrl + 'users/' + id);
  }

  public updateUser(id: number, user: User) {
    return this.http.put(environment.baseApiUrl + 'users/' + id, user);
  }
}
