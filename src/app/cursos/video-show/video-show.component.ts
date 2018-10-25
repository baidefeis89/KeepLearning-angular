import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-video-show',
  templateUrl: './video-show.component.html',
  styleUrls: ['./video-show.component.css']
})
export class VideoShowComponent implements OnInit {
  @Input() video;

  constructor() { }

  ngOnInit() {
  }

}
