import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesShowComponent } from './courses-show/courses-show.component';
import { CoursesService } from './services/courses.service';
import { COURSES_ROUTING } from './cursos.routes';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseResolverService } from './services/course-resolver.service';
import { VideoShowComponent } from './video-show/video-show.component';

@NgModule({
  imports: [
    CommonModule,
    COURSES_ROUTING
  ],
  declarations: [
    CoursesShowComponent, 
    CourseDetailsComponent, 
    VideoShowComponent
  ],
  providers: [CoursesService, CourseResolverService]
})
export class CursosModule { }
