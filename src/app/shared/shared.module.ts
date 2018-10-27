import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { ExternalComponentsModule } from './external-components/external-components.module';
import { ServicesModule } from './services/services.module';
import { RouterModule } from '@angular/router';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  ComponentsModule,
  ExternalComponentsModule,
  ServicesModule,
  RouterModule
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class SharedModule { }
