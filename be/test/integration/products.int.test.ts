import mongoose, { ConnectOptions } from 'mongoose';
import request from 'supertest';
import app from '~src/app';
import config from '~src/config';
import newProduct from '~test/data/new-product.json';

beforeEach(done => {
  mongoose.connect(
    config.MONGO_TEST_URI,
    {
      useNewUrlParser: true,
    } as ConnectOptions,
    () => done(),
  );
});

afterEach(done => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

it('POST /api/product', async () => {
  const response = await request(app).post('/api/product').send(newProduct);
  const {
    statusCode,
    body: { name, description, price },
  } = response;
  expect(statusCode).toBe(201);
  expect(name).toBe(newProduct.name);
  expect(description).toBe(newProduct.description);
  expect(price).toBe(newProduct.price);
});

it('should return 500 on POST /api/product', async () => {
  const response = await request(app).post('/api/product').send({ name: 'error product' });
  expect(response.body).toStrictEqual({
    message: 'Product validation failed: description: Path `description` is required.',
  });
});

it('GET /api/product', async () => {
  const response = await request(app).get('/api/product');
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  // expect(response.body[0].name).toBeDefined();
  // expect(response.body[0].description).toBeDefined();
  // const firstProduct = response.body[0];
});
