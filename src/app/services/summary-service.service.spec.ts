import { TestBed, inject } from '@angular/core/testing';

import { SummaryServiceService } from './summary-service.service';

describe('SummaryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryServiceService]
    });
  });

  it('should be created', inject([SummaryServiceService], (service: SummaryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
