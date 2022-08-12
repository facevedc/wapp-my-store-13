import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsModule } from '../products/products.module';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    StoreComponent,
    BannerComponent,
    ProductListComponent,
    FilterComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    CartModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
