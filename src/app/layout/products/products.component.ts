import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/Products/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products = [1,2,3,4,5];
  selectedProduct: Products;

  constructor() { }

  ngOnInit() {
  }

  selectProduct(product: Products){
    this.selectedProduct = product;
  }

}
