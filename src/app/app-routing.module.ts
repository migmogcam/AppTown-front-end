import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./components/restaurants/restaurants.module').then(m => m.RestaurantsModule)
  },
  {
    path: 'pharmacy',
    loadChildren: () => import('./components/pharmacy/pharmacy.module').then(m => m.PharmacyModule)
  },
  {
    path: 'superMarket',
    loadChildren: () => import('./components/super-market/super-market.module').then(m => m.SuperMarketModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./components/map/map.module').then(m => m.MapModule)
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '',   redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
