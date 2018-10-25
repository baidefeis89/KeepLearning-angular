import { Component, OnInit } from '@angular/core';
import { Iparagraph } from '../interfaces/icourses';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  paragraph: Iparagraph;
  createMessage: boolean;
  newMessage: any;
  errorMsg: string;

  constructor( private activatedRoute: ActivatedRoute, private courseService: CoursesService ) { }

  ngOnInit() {
    this.paragraph = this.activatedRoute.snapshot.data['paragraph'];
    this._resetMessage();
  }

  showHideCreateMessage() {
    this.createMessage = !this.createMessage;
  }

  sendNewMessage() {
    this.courseService.postNewMessage(this.paragraph._id, this.newMessage).subscribe(
      res => {
        this.paragraph.messages.push(res);
        this._resetMessage();
      },
      err => this.errorMsg = err
    )
  }

  private _resetMessage() {
    this.newMessage = {
      subject: '',
      text: ''
    }
    this.createMessage = false;
  }

}
