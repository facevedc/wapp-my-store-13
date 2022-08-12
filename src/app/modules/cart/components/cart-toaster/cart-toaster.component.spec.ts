import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToasterComponent } from './cart-toaster.component';

describe('CartToasterComponent', () => {
  let component: CartToasterComponent;
  let fixture: ComponentFixture<CartToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
