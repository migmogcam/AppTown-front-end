import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlaceFilter } from '../models/class/place-filter';
import { Buffer } from 'buffer';
import { PlaceResult } from '../models/class/place-result';

@Injectable({
  providedIn: 'root'
})
export class MapPlacesService {

  constructor(private httpsClient: HttpClient) { }

  //Get envirometnal variables microserviceHOST and microserviceURL from .env
  getMicroserviceHOST(): string {
    return environment.microserviceHOST || '';
  }
  getMicroserviceURL(): string {
    return environment.microserviceURL || '';
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

    return this.httpsClient.get<PlaceResult>(this.getMicroserviceHOST() + this.getMicroserviceURL(), options);
  }

}
