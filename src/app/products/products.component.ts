import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export default class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private ProductService: ProductService){}
  ngOnInit(): void {
     this.ProductService.getProducts().subscribe(
      {
        next: products => this.products = products
      }
     )
    }

}

