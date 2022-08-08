import { PriceEnum } from "../enum/price-enum";
import { IOpeningHours } from "../interface/iopening-hours";
import { IPlaceItem } from "../interface/iplace-item";
import { IPlacePhoto } from "../interface/iplace-photo";

export class PlaceItem implements IPlaceItem {
  public place_id? : string;
  public types? : Array<string>;
  public rating? : number;
  public icon? : string;
  public icon_background_color?: string;
  public icon_mask_base_uri? : string;
  public international_phone_number? : string;
  public name? : string;
  public opening_hours? : IOpeningHours;
  public photos? : Array<IPlacePhoto>;
  public mainPhotoURL? : string;
  public price_level? : PriceEnum;
  public url? : string;
  public website? : string;

  constructor(placeItem : IPlaceItem) {
    this.place_id = placeItem.place_id;
    this.types = placeItem.types;
    this.rating = placeItem.rating;
    this.icon = placeItem.icon;
    this.icon_background_color = placeItem.icon_background_color;
    this.icon_mask_base_uri = placeItem.icon_mask_base_uri;
    this.international_phone_number = placeItem.international_phone_number;
    this.name = placeItem.name;
    this.opening_hours = placeItem.opening_hours;
    this.photos = placeItem.photos;
    this.mainPhotoURL = placeItem.mainPhotoURL;
    this.price_level = placeItem.price_level;
    this.url = placeItem.url;
    this.website = placeItem.website;
  }
}
