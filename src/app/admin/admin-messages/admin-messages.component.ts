import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../admin.service';
import { CoursesService } from '../../cursos/services/courses.service';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
  @Output() messageResponded: EventEmitter<void> = new EventEmitter<void>();
  messages: any;
  send: boolean = false;

  constructor( private adminService: AdminService, private courseService: CoursesService ) { }

  ngOnInit() {
    this.adminService.getMessages().subscribe(
      res => this.messages = res
    )
  }

  response(idMessage: string, response: string) {
    this.courseService.responseMessage(idMessage, response).subscribe(
      res => {
        this.send = true;
        this.messages = this.messages.filter( m => m._id != idMessage);
        this.messageResponded.emit();

        setTimeout(() => {
          this.send = false;
        }, 2000);

      }
    )
  }

}
