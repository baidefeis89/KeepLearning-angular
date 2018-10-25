import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  video: any;

  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }

  initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      console.log(stream);
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });

  }
}
