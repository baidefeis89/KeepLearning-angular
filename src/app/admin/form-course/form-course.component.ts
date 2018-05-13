import { Component, OnInit } from '@angular/core';
import { Icourses, Itopic } from '../../cursos/interfaces/icourses';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../cursos/services/courses.service';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css']
})
export class FormCourseComponent implements OnInit {
  course: Icourses;
  topic: Itopic;
  errorMsg: string;
  index: number = 0;
  
  constructor( private adminService: AdminService, private activatedRoute: ActivatedRoute, private courseService: CoursesService ) { }

  ngOnInit() {
    this.course = {
      title: 'New course',
      description: 'Description',
      topics: [],
      image: ''
    };

    if (this.activatedRoute.snapshot.params['id']) {
      this.courseService.getCourse(this.activatedRoute.snapshot.params['id']).subscribe(
        res => this.course = res,
        err => this.errorMsg = 'Error al acceder al curso'
      )
    } else {
      this.adminService.createCourse(this.course).subscribe(
        res => this.course = res,
        err => this.errorMsg = 'Error al crear el curso'
      );
    }
    
    this.topic = {
      title: '',
      description: '',
      paragraphs: []
    }
  }

  nextSection() {
    this.index++;
  }

  saveTopic($event) {
    console.log('event:',$event);
    this.adminService.createTopic($event,this.course._id).subscribe(
      res => this.course.topics.push(res),
      err => this.errorMsg = 'Error al crear el tema'
    )
  }

}
