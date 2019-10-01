export function disable(target: Object, methodName: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => {
    throw new Error("Method is disabled");
  }
}

export function before(hook: Function) {
  return function <T extends Function>(target: Object, methodName: string, description: PropertyDescriptor): PropertyDescriptor {
    return {
      get: function(this: T) {
        let originalMethod = description.value!.bind(this);
        hook = hook.bind(this);

        return () => {
          hook();
          originalMethod();
        }
      }
    }
  }
}

export function capitalize() {
  return function<T extends {new (...args: any[]): {}}>(constructor: T): T {
    return class extends constructor {
      _a = "A";
      _b = "B";
    }
  }
}

@capitalize()
export class Whatever {
  private _a: string = 'a';
  private _b: string = 'b';


  @disable
  foo() {
    console.log("foo");
  }

  @before(() => { console.log("Before hook for the bar"); })
  bar() {
    console.log("bar");
  }

  baz() {
    console.log(this._a);
    console.log(this._b);
  }
}

const whatever = new Whatever();
whatever.foo();
whatever.bar();
whatever.baz();
