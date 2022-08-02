import mongoose, { ConnectOptions } from 'mongoose';
import config from '~src/config';

export default async () => {
  const connection = await mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
  } as ConnectOptions);
  // return connection.connection.db;
};
