import { IOpeningHoursPeriod } from "../interface/iopening-hours-period";
import { IOpeningHoursTime } from "../interface/iopening-hours-time";

export class OpeningHoursPeriod implements IOpeningHoursPeriod {
  public open : IOpeningHoursTime;
  public close : IOpeningHoursTime;

  constructor(open : IOpeningHoursTime, close : IOpeningHoursTime) {
    this.open = open;
    this.close = close;
  }
}
