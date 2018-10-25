import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Itopic, Iparagraph, Icourses } from '../../../cursos/interfaces/icourses';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadModalComponent } from '../../upload-modal/upload-modal.component';
import { AdminService } from '../../admin.service';
import { ConfirmModalComponent } from '../../../shared/confirm-modal/confirm-modal.component';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-create-topics',
  templateUrl: './create-topics.component.html',
  styleUrls: ['./create-topics.component.css']
})
export class CreateTopicsComponent implements OnInit {
  @Input() course: Icourses;
  @Input() topic: Itopic[];
  @Output() saveTopic: EventEmitter<Itopic> = new EventEmitter<Itopic>();
  @Output() reorder: EventEmitter<void> = new EventEmitter<void>();
  newTopic: Itopic;
  errorMsg: string;

  constructor( private modal: NgbModal, private adminService: AdminService, private dragulaService: DragulaService ) { }

  ngOnInit() {
    this._resetTopic();
    this.dragulaService.drop.subscribe(
      value => this.onDrop()
    )
    try {
      this.dragulaService.setOptions('main-bag', {
        moves: function (el, container, handle) {
          return handle.className === 'handle';
        }
      });
    } catch (e) {
      console.log('main-bag already exist')
    }
  }

  onDrop() {
    setTimeout(() => {
      this.adminService.reorderCourse(this.course).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    });
  }

  createTopic() {
    this.saveTopic.emit(this.newTopic);
    this._resetTopic();
  }

  

  // deleteParagraph(idTopic:string, apartado: Iparagraph) {
  //   this.showModal({title: 'Eliminar', body: '¿Desea eliminar el apartado definitivamente?'}).then( res => {
  //     if (res) {
  //       this.adminService.removeParagraph(apartado._id).subscribe(
  //         res => this.course.topics.filter( t => t._id == idTopic).map( t => t.paragraphs = t.paragraphs.filter ( p => p._id != apartado._id)),
  //         error => this.errorMsg = error
  //       )
  //     }
  //   })
  // }

  deleteTopic(idTopic: string) {
    this.showModal({title: 'Eliminar', body: '¿Desea eliminar el tema definitivamente?'}).then( res => {
      if (res) {
        this.adminService.removeTopic(idTopic).subscribe(
          res => this.course.topics = this.course.topics.filter( t => t._id != idTopic),
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
