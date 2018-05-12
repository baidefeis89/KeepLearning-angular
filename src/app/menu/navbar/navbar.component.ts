import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean;

  constructor( private auth:AuthService ) { }

  ngOnInit() {
    this.auth.$loginEmitter.subscribe( isLogged => {
      if (isLogged) this.isLogged = true;
      else this.isLogged = false;
    });
    this.auth.isLogged().subscribe( 
      isLogged => this.isLogged = isLogged);
  }

  logout() {
    this.auth.logout();
  }

}
