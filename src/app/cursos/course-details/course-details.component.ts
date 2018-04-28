import { Component, OnInit } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Icourses;

  constructor( private courseService: CoursesService,
                private activatedRoute: ActivatedRoute,
                private router:Router ) { }

  ngOnInit() {
    this.course = this.activatedRoute.snapshot.data['event'];
  }

  showApartados(id: number) {
    console.log(id);
  }

}
