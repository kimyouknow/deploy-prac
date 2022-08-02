import { Application } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Issue Tracker API',
      version,
      description: 'Issue Tracker API with express',
    },
  },
  apis: ['./src/api/routes/*.ts', './src/schema/*.yml'],
};

export const swaggerSpec = swaggerJSDoc(options);

export default async (app: Application) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
