import { Injectable } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import * as constants from '../../constants';
import { HttpClient } from "@angular/common/http";
import { Iresponse } from '../../interfaces/iresponse';

@Injectable()
export class CoursesService {
  private courses: Icourses[];

  constructor( private http: HttpClient ) { }

  getCourses(): Observable<Icourses[]> {
    return this.http.get(`${constants.URL}cursos`).map(
      (res : Iresponse) => {
        if (res.ok) return res.result
        return res.error
      }
    )
  }

  getCourse(index: number): Observable<Icourses> {
    return this.http.get(`${constants.URL}cursos/${index}`).map(
      (res: Iresponse) => {
        if (res.ok) return res.result
        return res.error
      }
    )
  }

  getParagraph(index: string): Observable<any> {
    return this.http.get(`${constants.URL}apartados/${index}`).map(
      (res: Iresponse) => {
        if (res.ok) return res.result
        return res.error
      }
    )
  }

}
