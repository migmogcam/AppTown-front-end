import { IPlaceItem } from "../interface/iplace-item";

export class PlaceItem implements IPlaceItem {
  types: string[];
  rating: number;

  constructor(types: string[], rating: number) {
    this.types = types;
    this.rating = rating;
  }
}
