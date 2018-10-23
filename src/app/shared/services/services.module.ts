import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractService } from './abstract.service';
import { LoaderService } from './components/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AbstractService,
    LoaderService
  ],
  declarations: []
})
export class ServicesModule { }
