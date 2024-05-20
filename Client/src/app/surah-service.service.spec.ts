import { TestBed } from '@angular/core/testing';

import { SurahServiceService } from './surah-service.service';

describe('SurahServiceService', () => {
  let service: SurahServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurahServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
