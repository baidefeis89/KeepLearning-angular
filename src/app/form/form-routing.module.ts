import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { Routes, RouterModule } from '@angular/router';
import { TypesResolverService } from './services/types-resolver.service';
import { ResponseFormComponent } from './response-form/response-form.component';

export const profileRoutes: Routes = <Routes>[{
  path: '',
  component: FormComponent,
  children: [
    { path: '', redirectTo: '/form/create', pathMatch: 'full' },
    {
      path: 'create',
      component: CreateFormComponent,
      resolve: {
        types: TypesResolverService
      }
    },{
      path: 'edit/:id',
      component: CreateFormComponent,
      resolve: {
        types: TypesResolverService
      }
    },{
      path: 'response/:id',
      component: ResponseFormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }

export const formRoutedComponents = [ FormComponent, CreateFormComponent ];