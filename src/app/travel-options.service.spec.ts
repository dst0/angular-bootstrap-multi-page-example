import { TestBed } from '@angular/core/testing';

import { TravelOptionsService } from './travel-options.service';

describe('TravelOptionsService', () => {
  let service: TravelOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
