import 'dotenv/config';
import express, { Application } from 'express';
import morgan from 'morgan';
import routes from '~src/api';
import config from '~src/config';
import errorhandler from '~src/api/middleware/errorhandler';

const createServer = () => {
  const app: Application = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(express.json());

  app.use(config.API.PREFIX, routes());
  errorhandler(app);

  app.get('/', (req, res) => {
    res.send('Docker prac');
  });

  return app;
};

const app = createServer();

export default app;
