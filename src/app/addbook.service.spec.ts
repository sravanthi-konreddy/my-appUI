import { TestBed } from '@angular/core/testing';

import { AddbookService } from './addbook.service';

describe('AddbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddbookService = TestBed.get(AddbookService);
    expect(service).toBeTruthy();
  });
});
