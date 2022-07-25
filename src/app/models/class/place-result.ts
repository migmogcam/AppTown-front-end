import { IPlaceResult } from "../interface/place-result";

export class PlaceResult implements IPlaceResult{
  results: any[];
  next_page_token: string;

  constructor(results: any[], next_page_token: string) {
    this.results = results;
    this.next_page_token = next_page_token;
  }
}
