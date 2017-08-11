import { TestBed, inject } from '@angular/core/testing';

import { GunInterpService } from './gun-interp.service';

describe('GunInterpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GunInterpService]
    });
  });

  it('should be created', inject([GunInterpService], (service: GunInterpService) => {
    expect(service).toBeTruthy();
  }));
});
