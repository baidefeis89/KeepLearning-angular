import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<Iuser>{
  
  constructor(private userService: UserService,
              private router: Router) { }
              
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iuser> {
    return this.userService.getUser(route.params['id']).catch( error => {
      this.router.navigate(['/courses']);
      return Observable.of(null);
    });
  }

}
