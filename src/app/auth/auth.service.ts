import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor( private http: HttpClient ) { }

  login(email, password): Observable<boolean> {
    let user = { email: email, password: password };

    return this.http.post<{ok: boolean, token: string}>(`${constants.URL}auth/login`, user).map(
      response => {
        if (response.ok) {
          localStorage.setItem('token', response.token)
          return true;
        }
        return false;
      }
    )
  }

  register(data): Observable<boolean> {
    console.log(data);
    return this.http.post<{ok: boolean, result: {id: number, token: string}, error?: string}>(`${constants.URL}auth/registro`, data)
    .map( response => {
      if (response.ok) {
        localStorage.setItem('token', response.result.token);
        return true;
      }
      throw response.error;
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

}
