import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormService } from './form.service';

@Injectable()
export class TypesResolverService implements Resolve<any[]>{

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.formService.getTypes().catch(
      err => {
        console.error(err);
        return Observable.of(null)
      }
    );
  }

  constructor( private formService: FormService ) { }

}
