import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperMarketComponent } from './super-market.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: SuperMarketComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SuperMarketModule { }
