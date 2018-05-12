import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { AdminService } from '../admin.service';

@Component({
  selector: 'ae-upload-modal',
  templateUrl: './upload-modal.component.html',
  styles: ['']
})
export class UploadModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() info: boolean;

  constructor(public activeModal: NgbActiveModal, private adminService: AdminService) { }

  ngOnInit() {
  }

  uploadVideo(formulario) {
    console.log('formulario:',formulario.video)
    // this.adminService.createParagraph(formulario, this.body).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // )
    // console.log(formulario);
  }

}
