import { TestBed } from '@angular/core/testing';

import { ReviewBookService } from './review-book.service';

describe('ReviewBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewBookService = TestBed.get(ReviewBookService);
    expect(service).toBeTruthy();
  });
});
