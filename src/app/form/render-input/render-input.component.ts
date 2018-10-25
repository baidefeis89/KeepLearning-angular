import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../questions/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'wsd-render-input',
  templateUrl: './render-input.component.html',
  styleUrls: ['./render-input.component.css']
})
export class RenderInputComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  errorMsg: string;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  //get isValid() { return this.form.controls[this.question.key].valid; }
  
  constructor() { }

  ngOnInit() {
    if (this.question.mandatory) {
      this.question.error = true;
    }
  }

  validate(value: string) {
    this.question.error = false;

    //TODO utilizar la comprobación de required de html
    if (this.question.mandatory && !this.question.response) {
      this.question.error = true;
      this.errorMsg = 'El campo es obligatorio';
    }

    if (this.question.validations) {
      this.question.validations.map(
        val => {
          switch(val.subtype) {
            case 'minLength':
              if (value.length < +val.value) {
                this.question.error = true;
                this.errorMsg = val.errorDescription;
              }
            break;
            case 'maxLength':
              if (value.length > +val.value) {
                this.question.error = true;
                this.errorMsg = val.errorDescription;
              }
            break;
            case 'email':
              if (!this.emailRegex.test(value) && value != '') {
                this.question.error = true;
                this.errorMsg = val.errorDescription;
              }
            break;
            case 'contains':
              if (!value.toLocaleLowerCase().includes(val.value.toLocaleLowerCase())) {
                this.question.error = true;
                this.errorMsg = val.errorDescription;
              }
            break;
            case 'minDate':
              if (new Date(value) < new Date(val.value)) {
                this.question.error = true;
                this.errorMsg = val.errorDescription;
              }
            break;
            case 'maxDate':
              if (new Date(value) > new Date(val.value)) {
                this.question.error = true;
                this.errorMsg = val.errorDescription;
              }
            break;
          }
        }
      )
    }
  }

}
