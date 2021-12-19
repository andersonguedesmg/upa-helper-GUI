import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  // https://viacep.com.br/
  consultZipCode(zipCode: string) {
    return this.http.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  }
}
