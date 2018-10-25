import { Injectable } from '@angular/core';
import { QuestionBase } from '../questions/question-base';
import { DropdownQuestion } from '../questions/question-dropdown';
import { TextboxQuestion } from '../questions/question-textbox';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const URL = 'http://localhost:3000/';

@Injectable()
export class FormService {
  forms: any[] = [];

  constructor( private http: HttpClient ) { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  //TODO remove id++
  saveForm(form) {
    form.id ++;
    return this.http.post(`${URL}forms`,form);
  }

  getForm(id: number): Observable<any> {
    return this.http.get(`${URL}forms/${id}`);
  }

  updateForm(form): Observable<any> {
    return this.http.put(`${URL}forms/${form.id}`, form).map(
      res => Observable.of(true)
    ).catch(
      err => Observable.of(false)
    );
  }

  getValidations(): Observable<any> {
    return this.http.get(`${URL}validations`);
  }

  getTypes(): Observable<any> {
    return this.http.get(`${URL}types`);
  }

}
