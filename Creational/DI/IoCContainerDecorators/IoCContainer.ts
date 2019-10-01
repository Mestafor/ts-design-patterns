export class IoCContainer {
  private static _istance: IoCContainer = new IoCContainer();
  private _dependencies: {
    [key: string]: Object;
  } = {};

  private constructor() {
    if (IoCContainer._istance) {
      throw new Error("Singleton class. Cannot instantiane using new.");
    }
    IoCContainer._istance = this;
  }

  public static get instance(): IoCContainer {
    return IoCContainer._istance;
  }

  register(name: string, dependencies: string[], implementation: any) {
    if (this._dependencies[name]) {
      throw new Error(`Dependency already registered ${name}`);
    }
    const dependenciesImplementatios = this.getDependenciesImplementation(dependencies);
    this._dependencies[name] = new implementation(...dependenciesImplementatios);
  }

  resolve<T>(name: string): T {
    if (!this._dependencies[name]) {
      throw new Error(`Unresolved dependency ${name}.`);
    }
    return this._dependencies[name] as T;
  }

  private getDependenciesImplementation(names: string[]): Object[] {
    return names.map(name => this.resolve(name));
  }
}

export function Register(name: string, dependencies: string[]): Function {
  let container = IoCContainer.instance;
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    container.register(name, dependencies, constructor);
  }
}
