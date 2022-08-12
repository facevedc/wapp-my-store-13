import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Store } from 'src/app/model/store';
import { MyStoreService } from 'src/app/services/my-store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  store!: Store;
  productList: Product[] = [];
  productListBkp: Product[] = []
  categoryList: string[] = []
  constructor(
    private myStoreService: MyStoreService
  ) { }

  ngOnInit(): void {
    this.getStore();
    this.getProductList();
  }

  private getCategories(productList: Product[]): string[] {
    return [ ...new Set(productList.map(p => p.categoria))];
  }

  private getStore() {
    this.store = this.myStoreService.getStore();
    if(!this.store.contacto && !this.store.direccionFisica && !this.store.email && !this.store.instagram) {
      this.myStoreService.getStoreInfo().subscribe({
        next: (store: Store) => {
          this.store = store;
        }
      })
    }
  }

  private getProductList() {
    this.productList = this.myStoreService.getProducts();
    if(this.productList.length === 0) {
      this.myStoreService.getProductListInfo().subscribe({
        next: (products: Product[]) => {
          this.productList = products;
          this.categoryList = this.getCategories(this.productList);
        }
      })
    } else {
      this.categoryList = this.getCategories(this.productList);
    }
  }

  getReceiveFilter(filter: string) {
    this.productList = this.productList.sort((p1, p2) => {
      if(filter === 'categoría') {
        return p1.categoria.localeCompare(p2.categoria);
      } else if (filter === 'Precio de mayor a menor') {
        return p2.precio - p1.precio;
      } else if (filter === 'Precio de menor a mayor') {
        return p1.precio - p2.precio;
      } 
      return p1.idProducto.localeCompare(p2.idProducto);
    })
  }

  getReceiveCategory(category: string) {
    if(this.productListBkp.length === 0) {
      this.productListBkp = this.productList
    } else {
      this.productList = this.productListBkp;
    } 
    if(category !== 'all') {
      this.productList = this.productList.filter(p => p.categoria.toLowerCase() === category.toLowerCase());
    }
  }
}
