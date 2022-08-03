import { IUrl } from "../interface/iurl";

export class Url implements IUrl {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}
