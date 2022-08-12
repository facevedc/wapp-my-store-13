import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.css']
})
export class CheckoutContentComponent implements OnInit {
  cart!: Cart
  formContact!: FormGroup
  constructor(
    private router: Router,
    private formBuild: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getInfoCart();
    this.formContact = this.buildForm()
  }

  private getInfoCart() {
    const data = sessionStorage.getItem('cart');
    this.cart = data ? JSON.parse(data) : this.router.navigate(['']);
  }

  private buildForm(): FormGroup {
    return this.formBuild.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      comuna: ['', [Validators.required]],
      ciudad: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]],
    })
  }

  checkoutSent() {
    if(this.formContact.valid) {
      this.router.navigate(['/checkout-envio'])
      sessionStorage.removeItem('cart')
      this.cartService.cleanCart()
    }
  }

}
