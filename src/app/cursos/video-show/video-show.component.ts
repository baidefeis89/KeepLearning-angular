import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-video-show',
  templateUrl: './video-show.component.html',
  styleUrls: ['./video-show.component.css']
})
export class VideoShowComponent implements OnInit {
  paragraph: any;
  video: string = null;

  constructor( private activatedRoute: ActivatedRoute, 
    private coursesService: CoursesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.coursesService.getParagraph(params['idParagraph']).subscribe(
        res => {
          this.paragraph = res;
          this.video = res.video
          console.log(this.paragraph);
        }
      )
   });
  }

}
