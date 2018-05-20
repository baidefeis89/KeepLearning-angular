import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Iresponse } from '../interfaces/iresponse';

@Injectable()
export class AuthService {
  @Output() $loginEmitter = new EventEmitter<boolean>();
  logged: boolean;
  admin: boolean;

  constructor( private http: HttpClient ) { }

  login(email, password): Observable<boolean> {
    let user = { email: email, password: password };

    return this.http.post<{ok: boolean, token: string}>(`${constants.URL}auth/login`, user).map(
      response => {
        if (response.ok) {
          this.logged = true;
          this.$loginEmitter.emit(true);
          localStorage.setItem('token', response.token)
          return true;
        }
        return false;
      }
    )
  }

  register(data): Observable<boolean> {
    console.log(data);
    return this.http.post<{ok: boolean, token: string, error?: string}>(`${constants.URL}auth/registro`, data)
    .map( response => {
      if (response.ok) {
        console.log('response:',response);
        this.logged = true;
        this.$loginEmitter.emit(true);
        localStorage.setItem('token', response.token);
        return true;
      }
      throw response.error;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.logged = false;
    this.$loginEmitter.emit(false);
  }

  isLogged(): Observable<boolean> {

    if (this.logged) {
      return Observable.of(true);
    } else if (localStorage.getItem('token')) {
      return this.http.get<{ok: boolean}>(`${constants.URL}auth/token`)
        .map( response => {
          if (response.ok) {
            this.logged = true;
            this.$loginEmitter.emit(true);
            return true;
          }
          return false;
        });
    } else {
      return Observable.of(false);
    }
  }

  isAdmin(): Observable<boolean> {
    if (this.admin) return Observable.of(true)
    else if (this.logged || localStorage.getItem('token')) {
      return this.http.get(`${constants.URL}auth/admin`).map( (res: Iresponse) => {
        if (res.ok) {
          this.admin = true;
          return true;
        } else {
          return false
        }
      }
      ).catch( err => Observable.of(false))
    } else return Observable.of(false);
  }
  // isLogged() {
  //   if (!localStorage.getItem('token')) return Observable.of(false);
  //   return this.http.get<{ok: boolean}>(`${constants.URL}auth/token`).map(
  //     res => res.ok
  //   ).catch(
  //     err => Observable.of(false)
  //   )
  // }

}
