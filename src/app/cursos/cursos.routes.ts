import { RouterModule, Routes } from "@angular/router";

import { CoursesShowComponent } from "./courses-show/courses-show.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseResolverService } from "./services/course-resolver.service";
import { VideoShowComponent } from "./video-show/video-show.component";

const COURSES_ROUTES: Routes = [  
    {
        path: '',
        component: CoursesShowComponent
    },{ 
        path: 'details/:id', 
        component: CourseDetailsComponent, 
        resolve: {
            event: CourseResolverService
        }
    },{
        path: 'details/:id/paragraph/:idParagraph',
        component: VideoShowComponent
    }
];

export const COURSES_ROUTING = RouterModule.forChild(COURSES_ROUTES);
