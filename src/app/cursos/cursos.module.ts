import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesShowComponent } from './courses-show/courses-show.component';
import { CoursesService } from './services/courses.service';
import { COURSES_ROUTING } from './cursos.routes';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseResolverService } from './services/course-resolver.service';
import { VideoShowComponent } from './video-show/video-show.component';
import { ParagraphResolverService } from './services/paragraph-resolver.service';
import { VideoComponent } from './videocamera/video.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    COURSES_ROUTING,
    FormsModule
  ],
  declarations: [
    CoursesShowComponent, 
    CourseDetailsComponent, 
    VideoShowComponent,
    VideoComponent,
    ParagraphComponent,
    MessageComponent
  ],
  providers: [CoursesService, CourseResolverService, ParagraphResolverService]
})
export class CursosModule { }
