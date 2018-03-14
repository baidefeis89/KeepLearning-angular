import { RouterModule, Routes } from "@angular/router";

import { CoursesShowComponent } from "./courses-show/courses-show.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseResolverService } from "./services/course-resolver.service";

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
    }
];

export const COURSES_ROUTING = RouterModule.forChild(COURSES_ROUTES);
