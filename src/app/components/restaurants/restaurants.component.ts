import { Component, OnInit } from '@angular/core';
import { PlaceFilter } from 'src/app/models/class/place-filter';
import { MapPlacesService } from 'src/app/services/map-places.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(private mapPlacesService : MapPlacesService) { }

  resultado : any;

  ngOnInit(): void {

    let placeFilter : PlaceFilter = new PlaceFilter();
    placeFilter.location = '37.893162,-6.563482';
    placeFilter.radius = '2000';
    placeFilter.type = '';
    placeFilter.keyword = '';
    placeFilter.language = '';
    placeFilter.pagetoken = '';

    this.mapPlacesService.getPlaces(placeFilter).subscribe({
      next: (v) => this.resultado = v.results,
      error: (e) => console.error(e),
      complete: () => console.info('complete getPlaces')

    });
  }



}
