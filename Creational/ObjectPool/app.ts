import { GameCharactersPool } from './game-characters-pool';
import { GameCharactersFactory } from './game-characters-factory';
let warrior = GameCharactersFactory.getWarrior(6);
let mage = GameCharactersFactory.getMage(12);

console.log('Warrior at level 6:', warrior);
console.log('Mage at level 12:', mage);

console.log("\n\n\n");

const level = 12;
const pool = new GameCharactersPool(level);

//  Load 40 warriors
for(let i=0; i < 40; i++) {
  console.log(i+1);
  console.log(pool.getWarrior());
}