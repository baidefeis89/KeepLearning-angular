import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ResumeComponent } from "./resume/resume.component";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { FormCourseComponent } from "./form-course/form-course.component";
import { AdminMessagesComponent } from "./admin-messages/admin-messages.component";


const ADMIN_ROUTES: Routes = [  
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'resume', component: ResumeComponent },
            { path: 'courses', component: AdminCoursesComponent },
            { path: 'courses/create', component: FormCourseComponent },
            { path: 'courses/update/:id', component: FormCourseComponent },
            { path: 'messages', component: AdminMessagesComponent }
        ]
    }
];

export const ADMIN_ROUTING = RouterModule.forChild(ADMIN_ROUTES);
