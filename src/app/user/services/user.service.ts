import { Injectable } from '@angular/core';
import { Iuser } from "../interfaces/iuser";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import * as constants from '../../constants';

@Injectable()
export class UserService {


  constructor(private http:HttpClient) { }

    getUser(id?: number) {
        let url = id ? `${constants.URL}usuarios/${id}` : `${constants.URL}usuarios/me`;

        return this.http.get(url).map( (response: {ok: boolean, result?: Iuser, error?: string}) => {
            if (response.ok) {
                response.result.avatar = `${constants.URL}img/${response.result.avatar}`;
                response.result.me = id ? false: true;
                return response.result;
            }
            throw response.error;
        });

    }

    editUser(user: Iuser): Observable<boolean> {
        let data = {
            email: user.email,
            name: user.name,
            surname: user.surname
        };

        return this.http.put(`${constants.URL}usuarios/me`, data)
            .map( (response: {ok:boolean, error?: string}) => {
                if (response.ok) return response.ok;
                throw response.error;
            });
    }

    editAvatar(user: Iuser): Observable<boolean> {
        let data = {
            avatar: user.avatar
        };

        return this.http.put(`${constants.URL}usuarios/me/avatar`, data)
            .map( (response: {ok:boolean, error?: string}) => {
                if (response.ok) return response.ok;
                throw response.error;
            });
    }

    editPassword(data): Observable<boolean> {
        return this.http.put(`${constants.URL}usuarios/me/password`, data)
        .map( (response: {ok:boolean, error?: string}) => {
            if (response.ok) return response.ok;
            throw response.error;
        });
    }



}
