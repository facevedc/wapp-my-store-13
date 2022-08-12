import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../model/cart';
import { CartProduct } from '../model/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartModel: Cart = new Cart();
  private _cart = new Subject<Cart>();
  cart: Observable<Cart>;

  constructor() { 
    this.cart = this._cart.asObservable();
    const data = sessionStorage.getItem('cart');
    if(data) {
      this.cartModel = JSON.parse(data);
    }
  }

  sendCart(cart: Cart) {
    sessionStorage.setItem('cart', JSON.stringify(cart))
    this._cart.next(cart);
  }

  addProductCart(cartProduct: CartProduct) {
    if(this.cartModel.cartProductList.find(p => p.idProducto === cartProduct.idProducto)) {
      this.cartModel.cartProductList.forEach(p => {
        if(p.idProducto === cartProduct.idProducto)  {
          p.cantidad += 1;
          p.totalPrecio += cartProduct.precio
        } 
      })
    } else {
      this.cartModel.cartProductList.push(cartProduct);
    }
    this.cartModel.totalProductos +=1
    this.cartModel.totalMonto += cartProduct.precio
    this.sendCart(this.cartModel);
  }

  downgradeProductCart(cartProduct: CartProduct) {
    if(this.cartModel.cartProductList.length > 0 && this.cartModel.cartProductList.find(p => p.idProducto === cartProduct.idProducto)) {
      this.cartModel.cartProductList.forEach(p => {
        if(p.idProducto === cartProduct.idProducto) {
          if(p.cantidad > 1) {
            p.cantidad -= 1;
            p.totalPrecio -= cartProduct.precio
          } else {
            this.cartModel.cartProductList = this.cartModel.cartProductList.filter(p2 => p2.idProducto !== cartProduct.idProducto);
          }
          this.cartModel.totalProductos -= 1
          this.cartModel.totalMonto -= cartProduct.precio;
        }
      });
      this.sendCart(this.cartModel);
    }
  }

  cleanCart() {
    this.sendCart(new Cart());
  }
}
