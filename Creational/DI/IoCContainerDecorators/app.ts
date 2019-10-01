import { IoCContainer, Register } from './IoCContainer';

interface IDepA {
  doA(): void;
  message: string;
}

interface IDepB {
  doB(): void;
  message: string;
}

interface IDepC {
  doC(): void;
}

@Register("IDepA", [])
class ConcreteA implements IDepA {
  private _message: string = "Doing A";

  set message(text: string) {
    this._message = text;
  }

  doA(): void {
    console.log(this._message);
  }
}

@Register("IDepB", [])
class ConcreteB implements IDepB {
  private _message: string = "Doing B";

  set message(text: string) {
    this._message = text;
  }

  doB(): void {
    console.log(this._message);
  }
}

@Register("IDepC", ["IDepA", "IDepB"])
class ConcreteC implements IDepC {
  private _message: string = "Doing C";

  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {

  }

  doC(): void {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log(this._message);
  }
}

let container = IoCContainer.instance;

let a = container.resolve<IDepA>("IDepA");
a.doA();
a.message = 'AAAAAA';

let b = container.resolve<IDepB>("IDepB");
b.doB();
b.message = 'BBBBBB';


let c = container.resolve<IDepC>("IDepC");
c.doC();