import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Itopic, Iparagraph } from '../../../cursos/interfaces/icourses';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadModalComponent } from '../../upload-modal/upload-modal.component';
import { AdminService } from '../../admin.service';
import { ConfirmModalComponent } from '../../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-create-topics',
  templateUrl: './create-topics.component.html',
  styleUrls: ['./create-topics.component.css']
})
export class CreateTopicsComponent implements OnInit {
  @Input() topics: Itopic[];
  @Input() topic: Itopic[];
  @Output() saveTopic: EventEmitter<Itopic> = new EventEmitter<Itopic>();
  newTopic: Itopic;
  errorMsg: string;

  constructor( private modal: NgbModal, private adminService: AdminService ) { }

  ngOnInit() {
    this._resetTopic();
  }

  createTopic() {
    this.saveTopic.emit(this.newTopic);
    this._resetTopic();
  }

  createParagraph(idTopic: string) {
    this.showModal({body: idTopic, upload: true, title: 'Añadir apartado'}).then( res => {
      if (res)
        this.topics
          .filter( t => t._id == idTopic)
          .map( t => t.paragraphs.push(res))
    })
  }

  deleteParagraph(idTopic:string, apartado: Iparagraph) {
    this.showModal({title: 'Eliminar', body: '¿Desea eliminar el apartado definitivamente?'}).then( res => {
      if (res) {
        this.adminService.removeParagraph(apartado._id).subscribe(
          res => this.topics.filter( t => t._id == idTopic).map( t => t.paragraphs = t.paragraphs.filter ( p => p._id != apartado._id)),
          error => this.errorMsg = error
        )
      }
    })
  }

  showModal({title = null, body = null, info = false, upload = false} = {}) {
    const modalRef = this.modal.open( upload ? UploadModalComponent : ConfirmModalComponent); 
    modalRef.componentInstance.title = title; 
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.info = info;

    return modalRef.result;
  }

  showModalUpload(idTopic: string) {
    const modalRef = this.modal.open(UploadModalComponent); 
    modalRef.componentInstance.title = 'Añadir apartado'; 
    modalRef.componentInstance.body = idTopic;
    modalRef.componentInstance.info = true;

    return modalRef.result;
  }

  private _resetTopic() {
    this.newTopic = {
      title: '',
      description: '',
      paragraphs: []
    }
  }

}
