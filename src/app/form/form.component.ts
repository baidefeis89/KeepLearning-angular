import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="container mt-3"><router-outlet></router-outlet></div>`
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
