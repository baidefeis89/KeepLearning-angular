import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ResumeComponent } from "./resume/resume.component";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { CreateCourseComponent } from "./create-course/create-course.component";


const ADMIN_ROUTES: Routes = [  
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'resume', component: ResumeComponent },
            { path: 'courses', component: AdminCoursesComponent },
            { path: 'courses/create', component: CreateCourseComponent }
        ]
    }
];

export const ADMIN_ROUTING = RouterModule.forChild(ADMIN_ROUTES);
