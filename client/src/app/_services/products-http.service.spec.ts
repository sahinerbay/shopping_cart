import { TestBed, inject } from '@angular/core/testing';

import { ProductsHttpService } from './products-http.service';

describe('ProductsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsHttpService]
    });
  });

  it('should be created', inject([ProductsHttpService], (service: ProductsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
