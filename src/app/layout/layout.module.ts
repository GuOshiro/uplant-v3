import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BaseComponent } from './base/base.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [BaseComponent, ProductsComponent]
})
export class LayoutModule { }
