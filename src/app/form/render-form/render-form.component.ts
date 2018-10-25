import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'wsd-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.css']
})
export class RenderFormComponent implements OnInit {
  @Input() newForm;
  @Input() section;
  @Output() nextSection: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousSection: EventEmitter<void> = new EventEmitter<void>();
  @Output() sendForm: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  isInvalid(sectionIndex) {
    let error = false;
    this.section.questions.map(
      q => {
        if (q.error) error = q.error
      }
    )
    return error;
  }

  goToNextSection(nextValue: string) {
    switch(nextValue) {
      case 'next':
        this.nextSection.emit(this.section.order + 1);
      break;
      case 'send':
        this.nextSection.emit(-1);
      break;
      default:
        this.nextSection.emit(+nextValue)
      break;
    }
  }

  goToPreviousSection() {
    this.previousSection.emit();
  }

  sendFormResponse() {
    this.sendForm.emit();
  }
 
  // isInvalid(sectionIndex) {
  //   let error = false;
  //   this.newForm.sections[sectionIndex].questions.map(
  //     q => {
  //       if (q.error) error = q.error
  //     }
  //   )
  //   return error;
  // }

}
