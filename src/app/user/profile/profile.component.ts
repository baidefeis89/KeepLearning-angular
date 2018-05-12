import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Iuser } from '../interfaces/iuser';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ae-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Iuser;

  constructor( private service: UserService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data['user'];
    console.log(this.user);
  }

}
