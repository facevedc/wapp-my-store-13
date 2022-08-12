import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cartProduct';
import { EventTypes } from 'src/app/model/eventTypes';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {
  @Input() product!: Product;

  EventTypes = EventTypes;

  constructor(
    private toastService: ToastService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    this.toastService.showSuccessToast(`${this.product.nombre}`, 'Producto agregado al carrito. ');
    this.cartService.addProductCart(
      new CartProduct(
        this.product.idProducto,
        this.product.nombre,
        1,
        this.product.precio,
        this.product.imagenPrincipal,
        this.product.promocionPrecio,
        this.product.precio
      )
    )
  }
}
