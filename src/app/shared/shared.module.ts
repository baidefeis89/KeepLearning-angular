import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { FormsModule } from '@angular/forms';
import { OrderPipe } from './order.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    ConfirmModalComponent,
    OrderPipe
    // UploadModalComponent
  ],
  entryComponents: [ ConfirmModalComponent ],
  exports: [
    ConfirmModalComponent,
    OrderPipe
    // UploadModalComponent
  ]
})
export class SharedModule { }
