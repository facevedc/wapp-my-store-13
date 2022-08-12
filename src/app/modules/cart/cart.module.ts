import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContentComponent } from './components/cart-content/cart-content.component';
import { CartToastComponent } from './components/cart-toast/cart-toast.component';
import { CartToasterComponent } from './components/cart-toaster/cart-toaster.component';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CartContentComponent,
    CartToastComponent,
    CartToasterComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports: [
    CartContentComponent,
    CartToasterComponent
  ]
})
export class CartModule { }
