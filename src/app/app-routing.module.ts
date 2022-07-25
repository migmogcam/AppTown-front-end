import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./components/restaurants/restaurants.module').then(m => m.RestaurantsModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./components/map/map.module').then(m => m.MapModule)
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
