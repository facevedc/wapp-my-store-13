import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToastComponent } from './cart-toast.component';

describe('CartToastComponent', () => {
  let component: CartToastComponent;
  let fixture: ComponentFixture<CartToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
