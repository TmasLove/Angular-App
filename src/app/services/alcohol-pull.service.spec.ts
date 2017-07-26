import { TestBed, inject } from '@angular/core/testing';

import { AlcoholPullService } from './alcohol-pull.service';

describe('AlcoholPullService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlcoholPullService]
    });
  });

  it('should be created', inject([AlcoholPullService], (service: AlcoholPullService) => {
    expect(service).toBeTruthy();
  }));
});
