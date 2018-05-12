import { Component, OnInit } from '@angular/core';
import { Icourses } from '../../cursos/interfaces/icourses';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  course: Icourses;

  constructor() { }

  ngOnInit() {
    this.course = {
      title: '',
      description: ''
    };
  }

}
