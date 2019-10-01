import { StatsTracker } from './Singleton';

export function test() {
  let tracker = StatsTracker.instance;
  console.log("Test:");
  console.log("Buttons click", tracker.buttonClick);
  console.log("Facebooks shares", tracker.facebooksShares);
  console.log("Twitters shares", tracker.twittersShares);
  console.log("Widget views", tracker.widgetViews);
}