export class StatsTracker {
  buttonClick: number = 0;
  facebooksShares: number = 0;
  twittersShares: number = 0;
  widgetViews: number = 0;

  private constructor() {
    if(StatsTracker._instance) {
      throw new Error("Cannot initialize singleton class using new");
    }
    StatsTracker._instance = this;
  }

  private static _instance: StatsTracker = new StatsTracker();

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }
}