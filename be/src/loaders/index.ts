import { Application } from 'express';

import mongooseLoader from './mongoose';
import swaggerLoader from './swagger';

export default async (app: Application) => {
  await mongooseLoader();
  console.log('✌️ DB loaded and connected!');
  await swaggerLoader(app);
};
