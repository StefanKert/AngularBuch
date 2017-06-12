import { TestBed, inject } from '@angular/core/testing';

import { BookResolverService } from './book-resolver.service';

describe('BookResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookResolverService]
    });
  });

  it('should ...', inject([BookResolverService], (service: BookResolverService) => {
    expect(service).toBeTruthy();
  }));
});
