import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ResumeComponent } from "./resume/resume.component";
import { AdminCoursesComponent } from "./admin-courses/admin-courses.component";
import { FormCourseComponent } from "./form-course/form-course.component";
import { AdminMessagesComponent } from "./admin-messages/admin-messages.component";
import { SettingsComponent } from "./settings/settings.component";


const ADMIN_ROUTES: Routes = [  
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', component: ResumeComponent }, 
            { path: 'resume', component: ResumeComponent },
            { path: 'courses', component: AdminCoursesComponent },
            { path: 'courses/create', component: FormCourseComponent },
            { path: 'courses/update/:id', component: FormCourseComponent },
            { path: 'messages', component: AdminMessagesComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    }
];

export const ADMIN_ROUTING = RouterModule.forChild(ADMIN_ROUTES);
