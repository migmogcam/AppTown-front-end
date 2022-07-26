import { IOpeningHoursTime } from "../interface/iopening-hours-time";

export class OpeningHoursTime implements IOpeningHoursTime {
  public day : number;
  public time : string;

  constructor(day : number, time : string) {
    this.day = day;
    this.time = time;
  }
}
