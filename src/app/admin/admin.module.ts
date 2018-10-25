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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTopicsComponent } from './form-course/create-topics/create-topics.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { DragulaModule } from "ng2-dragula";
import { RenderTopicEditComponent } from './form-course/render-topic-edit/render-topic-edit.component';
import { UploadGenericModalComponent } from './upload-generic-modal/upload-generic-modal.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ADMIN_ROUTING,
    NgxChartsModule,
    SharedModule,
    DragulaModule
  ],
  declarations: [
    AdminComponent, 
    ResumeComponent, 
    AdminCoursesComponent, 
    CreateCourseComponent, 
    CreateTopicsComponent, 
    FormCourseComponent,
    UploadModalComponent,
    UploadGenericModalComponent,
    RenderTopicEditComponent,
    AdminMessagesComponent,
    SettingsComponent
  ],
  entryComponents: [UploadModalComponent, UploadGenericModalComponent],
  providers: [AdminService]
})
export class AdminModule { }
