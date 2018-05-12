import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Icourses } from '../../../cursos/interfaces/icourses';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  @Input() course: Icourses;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  nextSection() {
    this.next.emit();
  }

}
