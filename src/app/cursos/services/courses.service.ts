import { Injectable } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import * as constants from '../../constants';
import { HttpClient } from "@angular/common/http";
import { Http, ResponseContentType } from "@angular/http";
import { Iresponse } from '../../interfaces/iresponse';
//response.result.avatar = `${this.urlServer}img/users/${response.result.avatar}`;
@Injectable()
export class CoursesService {
  private courses: Icourses[];

  constructor( private http: HttpClient, private httpDown: Http ) { }

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
        console.log(res);
        if (res.ok) return res.result;
        return res.error;
      }
    )
  }

  getParagraph(index: string): Observable<any> {
    return this.http.get(`${constants.URL}apartados/${index}`).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        return res.error;
      }
    )
  }

  postNewMessage(idParagraph: string, message: any): Observable<any> {
    return this.http.post(`${constants.URL}mensajes/nuevo/${idParagraph}`,message).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        return res.error;
      }
    )
  }

  responseMessage(idMessage: string, response: string): Observable<any> {
    console.log('id',idMessage,'text',response);
    return this.http.post(`${constants.URL}mensajes/respuestas/${idMessage}`, {text: response}).map(
      (res: Iresponse) => {
        if (res.ok) return res.result;
        return res.error;
      }
    )
  }

  downloadExtra(fileName: string): Observable<any> {
    return this.httpDown.get(`${constants.URL}uploads/${fileName}`, {responseType: ResponseContentType.Blob}).map(
      res => {
        return {
          filename: fileName,
          data: res.blob()
        };
    })
  }

}
