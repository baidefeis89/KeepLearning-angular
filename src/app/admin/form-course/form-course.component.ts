import { Component, OnInit } from '@angular/core';
import { Icourses, Itopic } from '../../cursos/interfaces/icourses';
import { AdminService } from '../admin.service';

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
  
  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.course = {
      title: 'New course',
      description: 'Description',
      topics: []
    };

    this.adminService.createCourse(this.course).subscribe(
      res => this.course = res,
      err => this.errorMsg = 'Error al crear el curso'
    );
    
    // this.course = {
    //   title: '',
    //   description: '',
    //   topics: [{
    //     title: 'Tema de prueba',
    //     description: 'Descripcion del tema de prueba',
    //     paragraphs: [{
    //       title: 'Apartado 1',
    //       video: '',
    //       messages: [],
    //       visits: 0
    //     }]
    //   }]
    // }
    
    this.topic = {
      title: '',
      description: '',
      paragraphs: []
    }
  }

  nextSection() {
    this.adminService.updateCourse(this.course).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
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
