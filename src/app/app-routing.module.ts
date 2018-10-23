import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from 'src/app/layout/base/base.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
