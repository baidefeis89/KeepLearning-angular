import { RouterModule, Routes } from "@angular/router";

import { PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AdminActivateGuard } from "./guards/admin-activate-guard.service";

const app_routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'courses', loadChildren: './cursos/cursos.module#CursosModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'profile', loadChildren: './user/user.module#UserModule' },
    { path: 'admin', canActivate:[AdminActivateGuard], loadChildren: './admin/admin.module#AdminModule' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes, {preloadingStrategy: PreloadAllModules})