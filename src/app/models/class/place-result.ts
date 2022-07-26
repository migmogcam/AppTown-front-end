import { IPlaceItem } from "../interface/iplace-item";
import { IPlaceResult } from "../interface/Iplace-result";

export class PlaceResult implements IPlaceResult{
  results: IPlaceItem[];
  next_page_token: string;

  constructor(results: IPlaceItem[], next_page_token: string) {
    this.results = results;
    this.next_page_token = next_page_token;
  }
}
