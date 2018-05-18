import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../cursos/services/courses.service';
import { Icourses } from '../../cursos/interfaces/icourses';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courses: Icourses[];

  constructor( private courseService: CoursesService, private modal: NgbModal, private adminService: AdminService ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe( res => 
      this.courses = res
    )
  }

  removeCourse(idCourse: string) {
    this.showModal('Eliminar','¿Desea eliminar el curso definitivamente?',false).then(
      response => {
        if (response) {
          this.adminService.removeCourse(idCourse).subscribe(
            res => this.courses = this.courses.filter( c => c._id != idCourse)
          )
        }
      },
      err => console.log(err)
    )
    
  }

  showModal(title: string, body: string, info: boolean): Promise<any> {
    const modalRef = this.modal.open(ConfirmModalComponent); 
    modalRef.componentInstance.title = title; 
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.info = info;

    return modalRef.result;
  }

}
