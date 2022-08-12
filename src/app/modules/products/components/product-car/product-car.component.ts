import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-car',
  templateUrl: './product-car.component.html',
  styleUrls: ['./product-car.component.css']
})
export class ProductCarComponent implements OnInit {
  @Input() productCar!: CartProduct
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.cartService.addProductCart(this.productCar);
  }

  downgradeProduct() {
    this.cartService.downgradeProductCart(this.productCar)
  }

}
