import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../models/Products/Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Products;

  constructor() { }

  ngOnInit() {
  }

}
