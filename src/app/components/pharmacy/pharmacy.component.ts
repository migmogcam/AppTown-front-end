import { Component, OnInit } from '@angular/core';
import { PlaceFilter } from 'src/app/models/class/place-filter';
import { IPhotoFilter } from 'src/app/models/interface/iphoto-filter';
import { IPlaceItem } from 'src/app/models/interface/iplace-item';
import { MapPlacesService } from 'src/app/services/map-places.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {

  constructor(private mapPlacesService: MapPlacesService) { }

  resultado: IPlaceItem[] = [];

  ngOnInit(): void {

    let placeFilter: PlaceFilter = new PlaceFilter();
    placeFilter.location = '37.893162,-6.563482';
    placeFilter.radius = '2000';
    placeFilter.type = 'pharmacy';
    placeFilter.keyword = '';
    placeFilter.language = '';
    placeFilter.pagetoken = '';

    this.mapPlacesService.getPlaces(placeFilter).subscribe({
      next: (v) => {
        for (let i = 0; i < v.results.length; i++) {
          this.getPhoto(v.results[i]).then(
            (value) => {
              v.results[i].mainPhotoURL = value;
            }
          );
        }
        this.resultado = v.results
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete getPlaces')

    });
  }

  async getPhoto(item: IPlaceItem) {
    let photo = item.photos ? item.photos[0] : null;
    let photoFilter: IPhotoFilter = {
      photoReference: photo?.photo_reference || '',
      photoWith: photo?.width?.toString() || '',
      photoHeight: photo?.height?.toString() || ''
    };

    return await this.mapPlacesService.getPhoto(photoFilter);
  }



}
