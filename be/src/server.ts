import { Application } from 'express';
import app from '~src/app';
import config from '~src/config';
import loaders from '~src/loaders';

const PORT = config.SERVER_PORT;

async function startServer(application: Application) {
  await loaders(application);

  application
    .listen(PORT, () => {
      console.log(`✅  Server listening on port: ${PORT}`);
    })
    .on('error', err => {
      console.error(err);
      process.exit(1);
    });

  return application;
}

startServer(app);
