import container from './inversify.config';
import { TYPES } from './types';
import { IDepC } from './IDepC';

const c = container.get<IDepC>(TYPES.IDepC);
c.doC();