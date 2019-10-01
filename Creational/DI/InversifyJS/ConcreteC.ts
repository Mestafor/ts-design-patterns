import { injectable, inject } from 'inversify';
import { TYPES } from './types';
import { IDepA } from './IDepA';
import { IDepB } from './IDepB';
import { IDepC } from './IDepC';
@injectable()
export class ConcreteC implements IDepC {
  constructor(
    @inject(TYPES.IDepA)
    private _depA: IDepA,
    @inject(TYPES.IDepB)
    private _idepB: IDepB) {
  }
  doC(): void {
    this._depA.doA();
    this._idepB.doB();
    console.log("Doing C");
  }
}
