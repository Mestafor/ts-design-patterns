import { GameCharactersFactory } from './game-characters-factory';
import { GameCharacter } from "./game-character";

export class GameCharactersPool {
  private _warriorsPool: GameCharacter[] = [];
  private _magesPool: GameCharacter[] = [];
  
  static WARRIORS_POOL_SIZE = 30;
  static MAGES_POOL_SIZE = 20;

  constructor(private _level: number) {
    this._loadWarriorPool();
    this._loadMagesPool();
  }

  private _loadMagesPool() {
    for(let i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
      this._magesPool.push(GameCharactersFactory.getMage(this._level));
    }
  }

  private _loadWarriorPool() {
    for(let i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
      this._warriorsPool.push(GameCharactersFactory.getWarrior(this._level));
    }
  }

  private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
    const item: T = pool.pop() as T;
    if(!pool.length) {
      reloadFn();
    }

    return item;
  }

  public getWarrior(): GameCharacter {
    return this.getPoolItem(this._warriorsPool, this._loadWarriorPool.bind(this));
  }

  public getMage(): GameCharacter {
    return this.getPoolItem(this._magesPool, this._loadMagesPool.bind(this));
  }
}