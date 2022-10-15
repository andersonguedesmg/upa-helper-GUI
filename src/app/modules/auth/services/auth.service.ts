import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CommonHelper } from 'src/app/shared/helpers/common.helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  async login(user: any) {
    const result = await this.http
      .post<any>(environment.baseApiUrl + 'auth/login', user)
      .toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      let decoded: any = jwt_decode(result.token);
      window.localStorage.setItem('userNameLogged', decoded.name);
      window.localStorage.setItem('userIdLogged', decoded.id);
      this.greetingMessage();
      return true;
    }

    return false;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  greetingMessage() {
    let greetingMessage = '';
    let userNameLogged = CommonHelper.getUserNameLogged();
    let hour = new Date().getHours();

    if (hour <= 5) {
      greetingMessage = `Boa madrugada, ${userNameLogged}!`;
    } else if (hour < 12) {
      greetingMessage = `Bom dia, ${userNameLogged}!`;
    } else if (hour < 18) {
      greetingMessage = `Boa tarde, ${userNameLogged}!`;
    } else {
      greetingMessage = `Boa noite, ${userNameLogged}!`;
    }

    this.snackBar.open(greetingMessage, 'X', {
      duration: 4000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar'],
    });
  }
}
