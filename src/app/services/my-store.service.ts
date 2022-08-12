import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Store } from '../model/store';
import { endpointProduct, endpointStore } from '../config/constants';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getStoreInfo(): Observable<Store> {
    return this.http.get<Store>(endpointStore).pipe(catchError(this.handleError));
  }

  getProductListInfo(): Observable<Product[]> {
    return this.http.get<Product[]>(endpointProduct).pipe(catchError(this.handleError));
  }

  getStore(): Store {
    const data = sessionStorage.getItem('store');
    if(data) {
      return JSON.parse(data);
    }
    return new Store();
  }

  getProducts(): Product[] {
    const data = sessionStorage.getItem('store');
    if(data) {
      return JSON.parse(data);
    }
    return [];
  }
}
