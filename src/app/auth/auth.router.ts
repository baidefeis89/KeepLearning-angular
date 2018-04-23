import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const AUTH_ROUTES: Routes = [  
    {
        path: '',
        component: LoginComponent
    },{ 
        path: 'register', 
        component: RegisterComponent
    }
];

export const AUTH_ROUTING = RouterModule.forChild(AUTH_ROUTES);
