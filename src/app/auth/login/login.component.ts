import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: boolean = false;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      ok => {
        if (ok) this.router.navigate(['/courses']);
        else this.error = true;
      }
    )
  }

}
