import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../services/form.service';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'wsd-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  newOption: string;
  showFilter: boolean = false;
  types: any[];
  validations: any[];
  lastOrder: any[];
  questionIndex: number;
  createError: boolean;
  newQuestion = {
    key:'FRM01-01',
    order: 1,
    title: 'Titulo del input',
    type: 'textbox',
    subtype: 'Subtipo del input',
    mandatory: false,
    options: [],
    validations: []
  }

  newForm = {
    id: 10,
    title: 'Nuevo formulario',
    description: 'Descripción del formulario',
    sections: []
  };

  newFilter = {
    type: '',
    subtype: '',
    value: null,
    errorDescription: ''
  }


  constructor( private formService: FormService, private dragulaService: DragulaService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.types = this.activatedRoute.snapshot.data['types'];
    console.log(this.types);
    this.questionIndex = 0;  

    if (this.activatedRoute.snapshot.params['id']) {
      this.formService.getForm(this.activatedRoute.snapshot.params['id']).subscribe(
        res => {
          this.newForm = res
          this.newForm.sections.map( s => {
            s.questions.map( q => 
              this.questionIndex = this.questionIndex <= +q.key.split('-')[1]  ? +q.key.split('-')[1] + 1 : this.questionIndex
            )
          })
        },
        err => this.createError = true
      )
    } else {
      this.formService.saveForm(this.newForm).subscribe(
        res => console.log(res),
        err => this.createError = true
      );    
    }

    //TODO sustituir el getForm por saveForm cuando se implemente el backend
    // this.formService.getForm(11).subscribe(
    //   form => this.newForm = form
    // )
    

    // this.questionIndex = 0;

    this.formService.getValidations().subscribe(
      val => this.validations = val
    )

    this.dragulaService.drop.subscribe(
      value => this.onDrop()
    )

    this.dragulaService.drag.subscribe(
      value => this.onDrag()
    )

  }

  //TODO Implementar reordenamiento sin recorrer todo el formulario o reordenar solo cuando se guarde el formulario
  onDrop() {
    this.newForm.sections.map(
      section => section.questions.map(
        (q, index) => q.order = index
      )
    )

    this._updateForm({ data: this.lastOrder });
  }

  onDrag() {
    this.lastOrder = JSON.parse(JSON.stringify(this.newForm.sections));
  }

  add(question) {
    let lastSection = this.newForm.sections.length - 1;
    
    if (lastSection < 0) {
      this.newSection();
      lastSection++;
    }

    question.order = this.newForm.sections[lastSection].questions.length;
    question.key = 'FRM' + this.newForm.id + '-' + this.questionIndex++;
    this.newForm.sections[lastSection].questions.push({...question})

    this._updateForm({ success: this._resetQuestion(), undo: this.newForm.sections[lastSection].questions });
  }

  addOption(option) {
    this.newQuestion.options.push(option);
    this.newOption = '';
  }

  changeType(type: string) {
    this.newQuestion.subtype = type;
  }

  guardarFormulario(formulario: any) {
    this.formService.saveForm(formulario).subscribe(
      res => console.log(res)
    );
  }

  deleteOption(index) {
    this.newQuestion.options.splice(index,1);
  }

  deleteQuestion(section, question) {
    const index = this.newForm.sections[section].questions.indexOf(question)
    const temp = this.newForm.sections[section].questions.splice(index, 1)[0];

    this._updateForm({ redo: this.newForm.sections[section].questions, data: temp, index: index});
  }

  newSection() {
    this.newForm.sections.push({order: this.newForm.sections.length, questions: [], nextSection: 'send'});

    this._updateForm({undo: this.newForm.sections});    
  }

  deleteSection(index) {
    const temp = this.newForm.sections.splice(index, 1)[0];
    
    this._updateForm({redo: this.newForm.sections, data: temp, index: index});
  }

  showHideFilter() {
    this.showFilter = !this.showFilter;
  }

  getSubtypes(validationSelected) {
    return validationSelected ? this.validations.filter( v => v.type == validationSelected)[0].subtypes : null;
  }

  isValueRequired(filter) {
    if (filter.type && filter.subtype) {
      try {
        return this.validations
          .filter( v => v.type == filter.type)[0]
          .subtypes
          .filter( s => s.subtype == filter.subtype)[0]
          .requiredValue;
      } catch (e) {
        return false
      }
    }
    return false;
  }

  addFilter(filter) {
    this.newQuestion.validations.push({...filter});
    this.newFilter.value = null;
    this.newFilter.errorDescription = '';
  }

  private _resetQuestion() {
    this.newQuestion.title = '';
    this.newQuestion.type = '';
    this.newQuestion.options = [];
    this.newQuestion.mandatory = false;
    this.newQuestion.validations = [];
    this.showFilter = false;
  }

  private _updateForm({success=null, undo=null, redo=null, data=null, index=null, restore = null} = {}) {
    this.formService.updateForm(this.newForm).subscribe( res => {
      if (res) success
      else if (undo) undo.pop()
      else if (redo) redo.splice(index, 0, data)
      else this.newForm.sections = data;
    });
  }
  // private _updateForm(success, undo, redo?, data?, index?, restore?) {
  //   this.formService.updateForm(this.newForm).subscribe( res => {
  //     if (res) success
  //     else if (undo) undo.pop()
  //     else redo.splice(index, 0, data)
  //   });
  // }

}
