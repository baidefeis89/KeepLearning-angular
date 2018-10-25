import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  config: {
    isPublic: boolean,
    key: string,
    _id: string
  }
  notPublic: boolean;
  error: boolean = false;
  infoMsg: string;

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.adminService.getRegisterPreferences().subscribe( res => {
      this.config = res
      this.notPublic = !this.config.isPublic;
    });
  }

  setPublic(isPrivate) {
    this.config.isPublic = !isPrivate;
  }

  changeRegisterPreferences() {
    this.adminService.setRegisterPreferences(this.config).subscribe( res => {
      if (res) {
        this.infoMsg = 'Se han guardado las nuevas preferencias correctamente';
        setTimeout(() => {
          this.infoMsg = null;
        }, 2500);
      }
      else {
        this.error = true;
        this.infoMsg = 'Error al actualizar las preferencias';
      }
    })
  }

}
