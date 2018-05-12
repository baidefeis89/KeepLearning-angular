import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTING } from './admin.router';
import { ResumeComponent } from './resume/resume.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminService } from './admin.service';
import { SharedModule } from '../shared/shared.module';
import { CreateCourseComponent } from './form-course/create-course/create-course.component';
import { FormsModule } from '@angular/forms';
import { CreateTopicsComponent } from './form-course/create-topics/create-topics.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { UploadModalComponent } from './upload-modal/upload-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ADMIN_ROUTING,
    NgxChartsModule,
    SharedModule
  ],
  declarations: [
    AdminComponent, 
    ResumeComponent, 
    AdminCoursesComponent, 
    CreateCourseComponent, 
    CreateTopicsComponent, 
    FormCourseComponent,
    UploadModalComponent
  ],
  entryComponents: [UploadModalComponent],
  providers: [AdminService]
})
export class AdminModule { }
