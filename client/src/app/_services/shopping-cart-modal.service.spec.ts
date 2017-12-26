import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartModalService } from './shopping-cart-modal.service';

describe('ShoppingCartModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartModalService]
    });
  });

  it('should be created', inject([ShoppingCartModalService], (service: ShoppingCartModalService) => {
    expect(service).toBeTruthy();
  }));
});
