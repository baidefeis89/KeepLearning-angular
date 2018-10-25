import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { formRoutedComponents, FormRoutingModule } from './form-routing.module';
import { FormService } from './services/form.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RenderInputComponent } from './render-input/render-input.component';
import { OrderQuestionsPipe } from './pipes/order-questions.pipe';
import { DragulaModule } from "ng2-dragula";
import { TypesResolverService } from './services/types-resolver.service';
import { RenderFormComponent } from './render-form/render-form.component';
import { RenderFormEditComponent } from './render-form-edit/render-form-edit.component';
import { ResponseFormComponent } from './response-form/response-form.component';
//import { NgDragDropModule } from "ng-drag-drop";

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragulaModule
    //NgDragDropModule.forRoot()
  ],
  declarations: [
    formRoutedComponents, 
    FormComponent, 
    RenderInputComponent,
    OrderQuestionsPipe,
    RenderFormComponent,
    RenderFormEditComponent,
    ResponseFormComponent
  ],
  providers: [
    FormService,
    TypesResolverService
  ]
})
export class FormModule { }

