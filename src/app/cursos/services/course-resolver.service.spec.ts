import { TestBed, inject } from '@angular/core/testing';

import { CourseResolverService } from './course-resolver.service';

describe('CourseResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseResolverService]
    });
  });

  it('should be created', inject([CourseResolverService], (service: CourseResolverService) => {
    expect(service).toBeTruthy();
  }));
});
