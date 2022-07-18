import { TestBed } from '@angular/core/testing';

import { CheckRegFormService } from './check-reg-form.service';

describe('CheckRegFormService', () => {
  let service: CheckRegFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckRegFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
