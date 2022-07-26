import { IPlacePhoto } from "../interface/iplace-photo";

export class PlacePhoto implements IPlacePhoto {

  height?: number;

  html_attributions?: Array<string>;

  photo_reference?: string;

  width?: number;

  constructor(height?: number, html_attributions?: Array<string>, photo_reference?: string, width?: number) {
    this.height = height;
    this.html_attributions = html_attributions;
    this.photo_reference = photo_reference;
    this.width = width;
  }
}
