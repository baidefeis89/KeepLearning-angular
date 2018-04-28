import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Iparagraph } from '../interfaces/icourses';
import { Observable } from 'rxjs/Observable';
import { CoursesService } from './courses.service';

@Injectable()
export class ParagraphResolverService implements Resolve<Iparagraph>{
  
  constructor( private courseService: CoursesService, private router: Router ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iparagraph> {
    return this.courseService.getParagraph(route.params['idParagraph']).catch(
      err => {
        this.router.navigate(['/events']);
        return Observable.of(null);
      }
    )
   
  }

}
