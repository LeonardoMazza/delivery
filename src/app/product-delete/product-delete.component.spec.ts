import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteComponent } from './product-delete.component';

describe('ProductDeleteComponent', () => {
  let component: ProductDeleteComponent;
  let fixture: ComponentFixture<ProductDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeleteComponent]
    });
    fixture = TestBed.createComponent(ProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
