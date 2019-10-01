import { StatsTracker } from './Singleton';
import { test } from './test';

let tracker = StatsTracker.instance;

tracker.buttonClick = 98;
tracker.facebooksShares = 100;
tracker.twittersShares = 50;
tracker.widgetViews = 25;

console.log("Buttons click", tracker.buttonClick);
console.log("Facebooks shares", tracker.facebooksShares);
console.log("Twitters shares", tracker.twittersShares);
console.log("Widget views", tracker.widgetViews);

tracker.facebooksShares++;
tracker.widgetViews += 10;

test();