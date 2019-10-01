import { GameCharcter } from './game-character';


export class GameCharactersFactory {
  public static getWarrior(level: number): GameCharcter {
    let warrior: GameCharcter;
    if(level < 10) {
      warrior = {
        strength: 18,
        dexterity: 12,
        health: 20,
        magic: 0
      }
    }
    else {
      warrior = {
        strength: 30,
        dexterity: 21,
        health: 32,
        magic: 0
      }
    }

    return warrior;
  }  

  public static getMage(level: number): GameCharcter {
    let mage: GameCharcter;
    if(level < 10) {
      mage = {
        strength: 0,
        dexterity: 8,
        health: 10,
        magic: 32
      }
    }
    else {
      mage = {
        strength: 2,
        dexterity: 12,
        health: 14,
        magic: 92
      }
    }

    return mage;
  }  
}