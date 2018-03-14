import { RouterModule, Routes } from "@angular/router";

import { PreloadingStrategy, PreloadAllModules } from "@angular/router";

const app_routes: Routes = [
    { path: 'courses', loadChildren: './cursos/cursos.module#CursosModule' },
];

export const APP_ROUTING = RouterModule.forRoot(app_routes, {preloadingStrategy: PreloadAllModules})