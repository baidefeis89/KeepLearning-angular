import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Itopic, Iparagraph } from '../../../cursos/interfaces/icourses';
import { DragulaService } from 'ng2-dragula';
import { AdminService } from '../../admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadModalComponent } from '../../upload-modal/upload-modal.component';
import { ConfirmModalComponent } from '../../../shared/confirm-modal/confirm-modal.component';
import { UploadGenericModalComponent } from '../../upload-generic-modal/upload-generic-modal.component';

@Component({
  selector: 'app-render-topic-edit',
  templateUrl: './render-topic-edit.component.html',
  styleUrls: ['./render-topic-edit.component.css']
})
export class RenderTopicEditComponent implements OnInit {
  @Input() tema: Itopic;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  errorMsg: string;

  constructor( private dragulaService: DragulaService, private adminService: AdminService, private modal: NgbModal ) { }

  ngOnInit() {
    this.dragulaService.drop.subscribe(
      value => this.onDrop()
    )
  }

  onDrop() {
    this.adminService.reorderTopic(this.tema).subscribe(
      ok => console.log(ok),
      err => console.log(err)
    )
  }

  deleteTopic( idTopic: string) {
    this.delete.emit(idTopic);
  }

  showModal({title = null, body = null, info = false, upload = false, video = false} = {}) {
    let modalRef;
    if (upload && video)
      modalRef = this.modal.open( UploadModalComponent ); 
    else
      modalRef = this.modal.open( upload ? UploadGenericModalComponent : ConfirmModalComponent); 
    modalRef.componentInstance.title = title; 
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.info = info;

    return modalRef.result;
  }

  createParagraph(idTopic: string) {
    this.showModal({body: idTopic, upload: true, title: 'Añadir apartado', video: true}).then( res => {
      if (res)
        this.tema.paragraphs.push(res)
    })
  }

  uploadExtra(topic: Itopic) {
    this.showModal({body: topic._id, upload: true, title: 'Material extra'}).then( res => {
      if (res) this.tema.extra = res.extra
    })
  }

  deleteParagraph(idTopic: string, apartado: Iparagraph) {
    this.showModal({title: 'Eliminar', body: '¿Desea eliminar el apartado definitivamente?'}).then( res => {
      if (res) {
        this.adminService.removeParagraph(apartado._id).subscribe(
          res => this.tema.paragraphs = this.tema.paragraphs.filter( p => p._id != apartado._id),
          error => this.errorMsg = error
        )
      }
    })
  }

  deleteExtra(idExtra: string) {
    this.showModal({title: 'Eliminar', body: '¿Desea eliminar este material adicional?'}).then( res => {
      if (res) {
        this.adminService.removeExtra(idExtra, this.tema._id).subscribe( res => 
            this.tema.extra = this.tema.extra.filter( e => e._id != idExtra )
        )
      }
    })
  }

}
