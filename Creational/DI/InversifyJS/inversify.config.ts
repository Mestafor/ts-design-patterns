import 'reflect-metadata';
import { Container } from "inversify";
import { ConcreteC } from "./ConcreteC";
import { ConcreteB } from "./ConcreteB";
import { ConcreteA } from "./ConcreteA";
import { IDepC } from "./IDepC";
import { IDepB } from "./IDepB";
import { IDepA } from "./IDepA";
import { TYPES } from "./types";

const container = new Container();
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA);
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB);
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC);


export default container;