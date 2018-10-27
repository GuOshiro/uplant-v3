import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MDBBootstrapModule,
  ButtonsModule,
  CarouselModule,
  ChartsModule,
  CollapseModule,
  InputsModule,
  ModalModule,
  NavbarModule,
  PopoverModule,
  TooltipModule,
  WavesModule,
} from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//translation
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';

const imports = [
  AngularFontAwesomeModule,
  HttpClientModule,
  BrowserModule
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    ...imports,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    ChartsModule,
    CollapseModule.forRoot(),
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    NavbarModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    WavesModule.forRoot(),
  ],
  exports: [
    TranslateModule,
    MDBBootstrapModule,
    ...imports,
    ButtonsModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    InputsModule,
    ModalModule,
    NavbarModule,
    PopoverModule,
    TooltipModule,
    WavesModule,
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExternalComponentsModule { }
