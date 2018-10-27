import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { ExternalComponentsModule } from '../external-components/external-components.module';

const declarations = [
  HeaderComponent,
  LoaderComponent
]

@NgModule({
  imports: [
    CommonModule,
    ExternalComponentsModule
  ],
  declarations: [
    ...declarations
  ],
  exports: [
    ...declarations
  ]
})
export class ComponentsModule { }
