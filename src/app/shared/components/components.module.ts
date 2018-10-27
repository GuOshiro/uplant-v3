import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { ExternalComponentsModule } from '../external-components/external-components.module';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const declarations = [
  HeaderComponent,
  LoaderComponent,
  ProductCardsComponent,
  ProductDetailComponent
]

@NgModule({
  imports: [
    CommonModule,
    ExternalComponentsModule
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...declarations
  ]
})
export class ComponentsModule { }
