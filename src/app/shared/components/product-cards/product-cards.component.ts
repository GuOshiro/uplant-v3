import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../models/Products/Products';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.sass']
})
export class ProductCardsComponent implements OnInit {

  constructor() { }

  @Input() productInformation: Products;
  @Output() selectProduct = new EventEmitter();

  ngOnInit() {
  }

  sendProduct(){
    this.selectProduct.emit();
  }

}
