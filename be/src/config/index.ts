import * as dotenv from 'dotenv';

dotenv.config();

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  LOCAL_SERVER_DOMAIN: process.env.LOCAL_SERVER_DOMAIN,
  SERVER_PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_PATH,
  MONGO_TEST_URI: process.env.MONGO_TEST_PATH as string,
  API: {
    PREFIX: '/api',
  },
  CORS_URI: process.env.CORS,
};
