import { Product } from './models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(private http: HttpClient) {

  }

getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>("http://localhost:3000/products");
 }
}


