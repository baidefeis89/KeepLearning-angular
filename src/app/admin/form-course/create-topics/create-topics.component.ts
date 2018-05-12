import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Itopic } from '../../../cursos/interfaces/icourses';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadModalComponent } from '../../upload-modal/upload-modal.component';
import { AdminService } from '../../admin.service';

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

  constructor( private modal: NgbModal, private adminService: AdminService ) { }

  ngOnInit() {
    this._resetTopic();
  }

  createTopic() {
    // this.topics.push({...this.newTopic});
    this.saveTopic.emit(this.newTopic);
    this._resetTopic();
  }

  showModal(idTopic: string) {
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
