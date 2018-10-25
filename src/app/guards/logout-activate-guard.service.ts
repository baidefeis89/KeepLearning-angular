import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogoutActivateGuard implements CanActivate {

  constructor(private auth:AuthService,
              private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    return this.auth.isLogged().map( response => {
      if (response) {
        this.router.navigate(['/events']);
        return false;
      } else 
        return true;
    });
  }

}
