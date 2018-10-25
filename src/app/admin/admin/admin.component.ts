import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  messagesNumber: number;

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.adminService.getMessagesNumber().subscribe( res => this.messagesNumber = res);
    
    Observable.interval(1000 * 15).subscribe(x => {
      this.adminService.getMessagesNumber().subscribe( res => this.messagesNumber = res);
    });
  }

}
