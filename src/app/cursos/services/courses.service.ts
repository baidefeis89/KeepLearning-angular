import { Injectable } from '@angular/core';
import { Icourses } from '../interfaces/icourses';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

@Injectable()
export class CoursesService {
  private courses: Icourses[] = [
    {
      id: 1,
      name: 'Curso 1',
      image: 'image',
      description: 'Descripción del curso'
    },{
      id: 2,
      name: 'Curso 2',
      image: 'image',
      description: 'Descripción del curso'
    },{
      id: 3,
      name: 'Curso 3',
      image: 'image',
      description: 'Descripción del curso'
    },{
      id: 4,
      name: 'Curso 4',
      image: 'image',
      description: 'Descripción del curso'
    },{
      id: 5,
      name: 'Curso 5',
      image: 'image',
      description: 'Descripción del curso'
    },{
      id: 6,
      name: 'Curso 6',
      image: 'image',
      description: 'Descripción del curso'
    },
  ];

  constructor() { }

  getCourses(): Observable<Icourses[]> {
    return Observable.of(this.courses);
  }

  getCourse(index: number): Observable<Icourses> {
    return Observable.of(this.courses[index-1])
  }

}
