import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartProduct } from 'src/app/model/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  cart!: Cart;
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem('cart');
    if(data) {
      this.cart = JSON.parse(data);
      this.cartService.sendCart(this.cart);
    }
    this.cartService.cart.subscribe({
      next: cart => {
        this.cart = cart;
      }
    })
  }

  sendCheckout() {
    this.router.navigate(['checkout'])
  }

}
