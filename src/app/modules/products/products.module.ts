import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarComponent } from './components/product-car/product-car.component';
import { ProductStoreComponent } from './components/product-store/product-store.component';



@NgModule({
  declarations: [
    ProductCarComponent,
    ProductStoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCarComponent,
    ProductStoreComponent
  ]
})
export class ProductsModule { }
