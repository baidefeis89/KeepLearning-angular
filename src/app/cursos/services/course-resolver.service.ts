import { Injectable } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { CoursesService } from './courses.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import 'rxjs/add/operator/catch';

@Injectable()
export class CourseResolverService implements Resolve<Icourses>{

  constructor( private courseService: CoursesService, private router: Router ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Icourses>  {
    return this.courseService.getCourse(route.params['id']).catch( error => {
      this.router.navigate(['/events']);
      return Observable.of(null);
    });
  }
}
