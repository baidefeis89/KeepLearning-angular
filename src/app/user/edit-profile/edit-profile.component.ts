import { Component, OnInit, Input } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ae-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: Iuser;
  imagen: any;
  passwords: any;
  editProfileMessage: string;
  editAvatarMessage: string;
  editPasswordMessage: string;
  success: boolean;
  fileIsValid: boolean;

  constructor( private activatedRoute: ActivatedRoute,
                private userService: UserService ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data['user'];
    this.passwords = {
      password: '',
      password2: ''
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0 ) return;

    this.resetErrorMessages();

    if (!fileInput.files[0].type.startsWith('image/')) {
      this.editAvatarMessage = 'File type is not valid';
      this.success = false;
      this.fileIsValid = false;
      return;
    } else {
      this.fileIsValid = true;
    }
    
    const reader: FileReader = new FileReader();
    console.log(fileInput.files[0].type);
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.user.avatar = reader.result;
    });
  }

  editProfile() {
    this.resetErrorMessages();
    this.success = false;
    
    this.userService.editUser(this.user)
      .subscribe( response => {
        this.editProfileMessage = 'Profile edited successfully';
        this.success = true;        
      }, 
      error => this.editProfileMessage = error);
  }

  editAvatar() {
    if (!this.fileIsValid) return;

    this.resetErrorMessages();
    this.success = false;
    
    this.userService.editAvatar(this.user)
      .subscribe( response => {
        this.editAvatarMessage = 'Avatar edited successfully'; 
        this.success = true;      
      }, 
      error => {
        if (error.status == 413) this.editAvatarMessage = 'Imagen demasiado grande';
        else this.editAvatarMessage = error
      });
  }

  editPassword() {
    this.resetErrorMessages();
    this.success = false;
    
    this.userService.editPassword(this.passwords)
      .subscribe( response => {
        this.editPasswordMessage = 'Password edited successfully';
        this.success = true;
      },
      error => this.editPasswordMessage = error);
  }

  resetErrorMessages() {
    this.editProfileMessage = '';    
    this.editAvatarMessage = ''; 
    this.editPasswordMessage = '';    
  }

}
