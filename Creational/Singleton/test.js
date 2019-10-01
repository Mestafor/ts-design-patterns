"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
function test() {
    var tracker = Singleton_1.StatsTracker.instance;
    tracker = new Singleton_1.StatsTracker();
    console.log("Test:");
    console.log("Buttons click", tracker.buttonClick);
    console.log("Facebooks shares", tracker.facebooksShares);
    console.log("Twitters shares", tracker.twittersShares);
    console.log("Widget views", tracker.widgetViews);
}
exports.test = test;
