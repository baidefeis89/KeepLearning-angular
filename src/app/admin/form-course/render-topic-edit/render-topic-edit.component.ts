import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Itopic } from '../../../cursos/interfaces/icourses';
import { DragulaService } from 'ng2-dragula';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-render-topic-edit',
  templateUrl: './render-topic-edit.component.html',
  styleUrls: ['./render-topic-edit.component.css']
})
export class RenderTopicEditComponent implements OnInit {
  @Input() tema: Itopic;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor( private dragulaService: DragulaService, private adminService: AdminService ) { }

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


}
