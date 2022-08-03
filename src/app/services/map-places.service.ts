import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlaceFilter } from '../models/class/place-filter';
import { Buffer } from 'buffer';
import { PlaceResult } from '../models/class/place-result';
import { IPhotoFilter } from '../models/interface/iphoto-filter';
import { IUrl } from '../models/interface/iurl';

@Injectable({
  providedIn: 'root'
})
export class MapPlacesService {

  constructor(private httpsClient: HttpClient) { }

  //Get envirometnal variables microserviceHOST and microserviceURL from .env
  getMicroserviceHOST(): string {
    return environment.microserviceHOST || '';
  }
  getMicroservicePlaceURL(): string {
    return environment.microservicePlaceURL || '';
  }

  getMicroservicePhotoURL(): string {
    return environment.microservicePhotoURL || '';
  }

  getUserName(): string {
    return environment.userName || '';
  }
  getPassword(): string {
    return environment.passWord || '';
  }

  //Get places from microservice
  getPlaces(placeFilter: PlaceFilter) {
    let params = new HttpParams().set('location', placeFilter.location)
      .set('radius', placeFilter.radius)
      .set('type', placeFilter.type)
      .set('keyword', placeFilter.keyword)
      .set('language', placeFilter.language)
      .set('pagetoken', placeFilter.pagetoken);

    let basicAuth = this.getUserName() + ':' + this.getPassword();
    let basicAuthB64 = Buffer.from(basicAuth).toString('base64');
    let header_options = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set("Authorization", "Basic " + basicAuthB64);
    const options = placeFilter ?
      { params, 'headers': header_options } : {'headers': header_options };

    return this.httpsClient.get<PlaceResult>(this.getMicroserviceHOST() + this.getMicroservicePlaceURL(), options);
  }

    //Get places from microservice
    getPhoto(PhotoFilter: IPhotoFilter) : Promise<string> {
      let params = new HttpParams().set('photoReference', PhotoFilter.photoReference)
        .set('photoWith', PhotoFilter.photoWith)
        .set('photoHeight', PhotoFilter.photoHeight);

      let basicAuth = this.getUserName() + ':' + this.getPassword();
      let basicAuthB64 = Buffer.from(basicAuth).toString('base64');
      let header_options = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*')
        .set('Access-Control-Allow-Origin', '*')
        .set("Authorization", "Basic " + basicAuthB64);

      const options = PhotoFilter ?
        { params, 'headers': header_options } : {'headers': header_options };

      return new Promise<string>((resolve,reject) => {
        this.httpsClient.get<IUrl>(this.getMicroserviceHOST() + this.getMicroservicePhotoURL(), options).subscribe({
          next: (v) => resolve(v.url),
          error: (e) => {reject(e); console.info(e)},
          complete: () => console.info('complete getPhoto')
        });
      });
    }

}
