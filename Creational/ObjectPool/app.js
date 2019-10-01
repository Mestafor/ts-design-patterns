"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_characters_pool_1 = require("./game-characters-pool");
var game_characters_factory_1 = require("./game-characters-factory");
var warrior = game_characters_factory_1.GameCharactersFactory.getWarrior(6);
var mage = game_characters_factory_1.GameCharactersFactory.getMage(12);
console.log('Warrior at level 6:', warrior);
console.log('Mage at level 12:', mage);
console.log("\n\n\n");
var level = 12;
var pool = new game_characters_pool_1.GameCharactersPool(level);
//  Load 40 warriors
for (var i = 0; i < 40; i++) {
    console.log(i + 1);
    console.log(pool.getWarrior());
}
