import { IOpeningHours } from "../interface/iopening-hours";
import { IOpeningHoursPeriod } from "../interface/iopening-hours-period";
import { IOpeningHoursTime } from "../interface/iopening-hours-time";

export class OpeningHours implements IOpeningHours {
  public open_now? : boolean;
  public periods? : IOpeningHoursPeriod[];
  public weekday_text? : string[];

  constructor(open_now : boolean, periods : IOpeningHoursPeriod[], weekday_text : string[]) {
    this.open_now = open_now;
    this.periods = periods;
    this.weekday_text = weekday_text;
  }
}
