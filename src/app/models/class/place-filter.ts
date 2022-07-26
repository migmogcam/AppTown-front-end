import { IPlaceFilter } from "../interface/iplace-filter";

export class PlaceFilter implements IPlaceFilter {
  public location: string;
  public radius: string;
  public type: string;
  public keyword: string;
  public language: string;
  public pagetoken: string;

  constructor() {
    this.location = '';
    this.radius = '';
    this.type = '';
    this.keyword = '';
    this.language = '';
    this.pagetoken = '';
  }


}
