import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../constants';
import { Observable } from 'rxjs/Observable';
import { Icourses, Itopic, Iparagraph } from '../cursos/interfaces/icourses';
import { Iresponse } from '../interfaces/iresponse';

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

  createCourse(course: Icourses): Observable<Icourses> {
    return this.http.post(`${constants.URL}admin/course`, course).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        else throw res.error;
      }
    )
  }
  
  updateCourse(course: Icourses): Observable<Icourses> {
    return this.http.put(`${constants.URL}admin/course`, course).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        else throw res.error;
      }
    )
  }

  createTopic(topic: Itopic, idCourse: string): Observable<Itopic> {
    return this.http.post(`${constants.URL}admin/course/${idCourse}/topic`, topic).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        else throw res.error
      }
    )
  }

  createParagraph(paragraph: Iparagraph, idTopic: string): Observable<Iparagraph> {
    return this.http.post(`${constants.URL}admin/topic/${idTopic}/paragraph`, paragraph).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        else throw res.error
      }
    )
  }
}
