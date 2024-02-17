import { TestBed } from '@angular/core/testing';

import { StudentSService } from './student-s.service';

describe('StudentSService', () => {
  let service: StudentSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
