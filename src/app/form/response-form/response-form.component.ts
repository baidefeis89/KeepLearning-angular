import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wsd-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {
  newForm = {
    title: '',
    description: '',
    sections: [{
      questions: []
    }]
  };
  section: any;
  sections = [];

  constructor( private formService: FormService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.formService.getForm(this.activatedRoute.snapshot.params['id']).subscribe(
      form => {
        this.newForm = form;
        this.section = this.newForm.sections[0];
        this.sections.push(this.section.order);
      }
    )
  }

  goToSection($event) {
    this.sections.push($event);
    this.section = this.newForm.sections[$event];
  }

  goToPreviousSection() {
    this.sections.pop();
    this.section = this.newForm.sections[this.sections[this.sections.length - 1]];
  }

  sendForm() {
    let respuestas = [];

    this.newForm.sections.map( section => {
      section.questions.map( question => {
        if (question.response)
          respuestas.push({key: question.key, value: question.response});
      })
    })

    console.log(respuestas);
  }

}
