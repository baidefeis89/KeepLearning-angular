import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {

  constructor( private http: HttpClient ) { }

  getStatistics(): Observable<any> {
    return this.http.get(`${constants.URL}admin/statistics`).map(
      (res: {ok: boolean, result: any, error: any}) => {
        if (res.ok) return res.result;
        return res.error;
      }
    )
  }
}
