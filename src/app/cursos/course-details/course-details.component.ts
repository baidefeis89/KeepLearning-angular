import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
// import * as io from 'socket.io-client'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Icourses;
  // messages: any[];
  // socket: any;
  // @ViewChild('chat', { read: ElementRef }) public chat: ElementRef;

  constructor( private courseService: CoursesService,
                private activatedRoute: ActivatedRoute,
                private router:Router ) { }

  ngOnInit() {
    this.course = this.activatedRoute.snapshot.data['event'];
    
  //   this.socket = io('http://localhost:8000');
  //   this.socket.on('conectado', (datos) => {
  //     this.messages = [];
  //  });
  //  this.socket.on('msg' + this.course._id, datos => {
  //     this.messages.push({msg: datos, mine: false});
  //     this.scrollToEnd();
  // })
   
  }

  download(fileName: string) {
    this.courseService.downloadExtra(fileName).subscribe(res => {
      console.log('start download:',res);
      var url = window.URL.createObjectURL(res.data);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = res.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove(); // remove the element
    }, error => {
      console.log('download error:', JSON.stringify(error));
    }, () => {
      console.log('Completed file download.')
    });
  }

  showApartados(id: number) {
    console.log(id);
  }

  // sendMessage(msg) {
  //   if (msg.value) {
  //     this.messages.push({msg: msg.value, mine: true});
  //     this.socket.emit('message' + this.course._id, msg.value);
  //     msg.value = '';
  //     this.scrollToEnd();
  //   }
  // }
  
  // scrollToEnd() {
  //   this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
  // }

}
