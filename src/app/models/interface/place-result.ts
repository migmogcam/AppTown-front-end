import { PlaceItem } from "../class/place-item";

export interface IPlaceResult {
  results : PlaceItem[];
  next_page_token : string;
}
