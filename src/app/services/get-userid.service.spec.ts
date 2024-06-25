import { TestBed } from '@angular/core/testing';

import { GetUserIdService } from './get-userid.service';

describe('GetUseridService', () => {
  let service: GetUserIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
