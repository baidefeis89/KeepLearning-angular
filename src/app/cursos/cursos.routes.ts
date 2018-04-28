import { RouterModule, Routes } from "@angular/router";

import { CoursesShowComponent } from "./courses-show/courses-show.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseResolverService } from "./services/course-resolver.service";
import { VideoShowComponent } from "./video-show/video-show.component";
import { LoginActivateGuard } from "../guards/login-activate-guard.service";
import { ParagraphResolverService } from "./services/paragraph-resolver.service";

const COURSES_ROUTES: Routes = [  
    {
        path: '',
        component: CoursesShowComponent
    },{ 
        path: 'details/:id', 
        canActivate: [LoginActivateGuard],
        component: CourseDetailsComponent, 
        resolve: {
            event: CourseResolverService
        }
    },{
        path: 'details/:id/paragraph/:idParagraph',
        canActivate: [LoginActivateGuard],
        component: VideoShowComponent,
        resolve: {
            paragraph: ParagraphResolverService
        }
    }
];

export const COURSES_ROUTING = RouterModule.forChild(COURSES_ROUTES);
