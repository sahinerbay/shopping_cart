import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTotalQuantityComponent } from './product-total-quantity.component';

describe('ProductTotalQuantityComponent', () => {
  let component: ProductTotalQuantityComponent;
  let fixture: ComponentFixture<ProductTotalQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTotalQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTotalQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
