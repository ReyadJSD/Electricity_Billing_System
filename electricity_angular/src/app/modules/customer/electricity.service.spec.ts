import { TestBed } from '@angular/core/testing';

import { ElectricityService } from './electricity.service';

describe('ElectricityService', () => {
  let service: ElectricityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
