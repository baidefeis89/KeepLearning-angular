import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { UserResolver } from "./services/user-resolver.service";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const USER_ROUTES: Routes = [
    { 
        path: '', 
        component: ProfileComponent,
        resolve: {
            user: UserResolver
        } 
    },{
        path: 'edit',
        component: EditProfileComponent,
        resolve: {
            user: UserResolver
        }
    },{
        path: ':id',
        component: ProfileComponent,
        resolve: {
            user: UserResolver
        }
    }

];

export const USER_ROUTING = RouterModule.forChild(USER_ROUTES);
