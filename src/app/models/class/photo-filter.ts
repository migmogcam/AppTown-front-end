import { IPhotoFilter } from "../interface/iphoto-filter";

export class PhotoFilter implements IPhotoFilter {
  photoReference: string;
  photoWith: string;
  photoHeight: string;

  constructor(photoReference: string, photoWith: string, photoHeight: string) {
    this.photoReference = photoReference;
    this.photoWith = photoWith;
    this.photoHeight = photoHeight;
  }

}
