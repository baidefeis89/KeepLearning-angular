import { Component, OnInit } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
  styleUrls: ['./courses-show.component.css']
})
export class CoursesShowComponent implements OnInit {
  courses: Icourses[] = [];
  errorMessage: string = null;

  constructor( private coursesService: CoursesService ) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(
      result => this.courses = result,
      error => this.errorMessage = error
    )
  }



}
