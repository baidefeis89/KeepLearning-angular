import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message;
  showNewResponse: boolean = false;
  showResponses: boolean = false;

  constructor( private courseService: CoursesService ) { }

  ngOnInit() {
  }

  showHideNewResponse() {
    this.showNewResponse = !this.showNewResponse;
  }

  showHideResponses() {
    this.showResponses = !this.showResponses;
  }

  sendResponse(id: string, response: any) {
    this.courseService.responseMessage(id, response.value).subscribe(
      res => {
        console.log(res);
        this.message.responses.push(res);
        response.value = '';
        this.showNewResponse = false;
      }
    )
  }

  

}
