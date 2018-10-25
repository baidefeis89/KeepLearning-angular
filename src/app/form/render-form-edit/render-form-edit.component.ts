import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../services/form.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'wsd-render-form-edit',
  templateUrl: './render-form-edit.component.html',
  styleUrls: ['./render-form-edit.component.css']
})
export class RenderFormEditComponent implements OnInit {
  @Input() newForm;
  
  constructor( private formService: FormService, private dragulaService: DragulaService ) { }

  ngOnInit() {
    this.dragulaService.setOptions('main-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }

  deleteQuestion(section, question) {
    const index = this.newForm.sections[section].questions.indexOf(question)
    const temp = this.newForm.sections[section].questions.splice(index, 1)[0];

    this._updateForm({ redo: this.newForm.sections[section].questions, data: temp, index: index});
  }

  newSection() {
    this.newForm.sections.push({order: this.newForm.sections[this.newForm.sections.length - 1] ? this.newForm.sections[this.newForm.sections.length - 1].order + 1 : 0, questions: [], nextSection: 'send'});
    // this.newForm.sections.push({order: this.newForm.sections.length, questions: [], nextSection: 'send'});

    this._updateForm({undo: this.newForm.sections});    
  }

  deleteSection(index) {
    const temp = this.newForm.sections.splice(index, 1)[0];
    
    this._updateForm({redo: this.newForm.sections, data: temp, index: index});
  }

  changeNextSection(sectionIndex, inputNext) {
    let oldValue = this.newForm.sections[sectionIndex].nextSection;
    this.newForm.sections[sectionIndex].nextSection = inputNext.value;

    this._updateForm({restore: this.newForm.sections[sectionIndex], data: oldValue});
  }

  private _updateForm({success=null, undo=null, redo=null, data=null, index=null, restore = null} = {}) {
    this.formService.updateForm(this.newForm).subscribe( res => {
      if (res) success
      else if (undo) undo.pop()
      else if (redo) redo.splice(index, 0, data)
      else restore.nextSection = data;
      //else this.newForm.sections = data;
    });
  }

}
