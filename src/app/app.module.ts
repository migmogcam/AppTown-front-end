import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { MapComponent } from './components/map/map.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { SuperMarketComponent } from './components/super-market/super-market.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantsComponent,
    MapComponent,
    PageNotFoundComponent,
    PharmacyComponent,
    SuperMarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialImportsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
