import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    ConfirmModalComponent
    // UploadModalComponent
  ],
  entryComponents: [ ConfirmModalComponent ],
  exports: [
    ConfirmModalComponent
    // UploadModalComponent
  ]
})
export class SharedModule { }
