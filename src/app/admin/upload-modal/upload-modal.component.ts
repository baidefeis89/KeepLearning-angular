import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { AdminService } from '../admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ae-upload-modal',
  templateUrl: './upload-modal.component.html',
  styles: ['']
})
export class UploadModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() info: boolean;
  @ViewChild('fileInput') fileInput: ElementRef;
  video: any;
  formularioVideo: FormGroup;
  loading: boolean = false;

  constructor(public activeModal: NgbActiveModal, private adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formularioVideo = this.fb.group({
      title: ['', Validators.required],
      video: null
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.formularioVideo.get('video').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('title', this.formularioVideo.get('title').value);
    input.append('video', this.formularioVideo.get('video').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    this.adminService.createParagraph(formModel, this.body).subscribe(
      res => {
        this.activeModal.close(res)
      },
      err => {
        this.activeModal.close(false)
      }
    )

  }

  clearFile() {
    this.formularioVideo.get('video').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  // uploadVideo(formulario) {
  //   console.log('formulario:',formulario.video.value)
  //   let data = {
  //     title: formulario.title,
  //     video: this.video
  //   }

  //   console.log(data)
  //   this.adminService.createParagraph(data, this.body).subscribe(
  //     res => console.log(res),
  //     err => console.log(err)
  //   )
  //   console.log(formulario);
  // }

  // getFile($event) {
  //   this.video = $event.target.files[0];
  //   console.log($event.srcElement.files);
  // }

}
