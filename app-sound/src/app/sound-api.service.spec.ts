import { TestBed } from '@angular/core/testing';

import { SoundApiService } from './sound-api.service';

describe('SoundApiService', () => {
  let service: SoundApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
