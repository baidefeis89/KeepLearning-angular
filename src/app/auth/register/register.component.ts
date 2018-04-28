import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string = null;
  user = {
    name: '',
    surname: '',
    email: '',
    email2: '',
    password: '',
    password2: ''
  };

  constructor( private auth: AuthService, 
               private router: Router ) { }

  ngOnInit() {
    
  }

  register() {
    this.auth.register(this.user).subscribe( response => {
      if (response) this.router.navigate(['/events']);
    }, error => {
      this.error = error;
    });
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

}
