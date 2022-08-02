import { NextFunction } from 'express';
// eslint-disable-next-line import/default
import httpMock from 'node-mocks-http';
import { productController } from '~src/api/controllers';
import ProductModel from '~src/model/Product.model';
import allProducts from '~test/data/all-product.json';
import newProduct from '~test/data/new-product.json';

jest.mock('~src/model/Product.model');

let req = httpMock.createRequest();
let res = httpMock.createResponse();
const next: NextFunction = jest.fn();

beforeEach(() => {
  req = httpMock.createRequest();
  res = httpMock.createResponse();
});

describe('Product Controller Create', () => {
  beforeEach(() => {
    req.body = newProduct;
  });
  it('should have a ceateProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });
  it('should call productModel.create', async () => {
    await productController.createProduct(req, res, next);
    expect(ProductModel.create).toBeCalledWith(req.body);
  });
  it('should return 201 response code', async () => {
    await productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return json body in response', async () => {
    (ProductModel.create as jest.Mock).mockReturnValue(req.body);
    await productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });
  it('should handle errors', async () => {
    const errorMessage = { message: 'decription property missing' };
    const rejectedPromise = Promise.reject(errorMessage);
    (ProductModel.create as jest.Mock).mockReturnValue(rejectedPromise);
    await productController.createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});

describe('Product Controller Get', () => {
  it('should have a ceateProduct function', () => {
    expect(typeof productController.getProducts).toBe('function');
  });
  it('should call PrdocutModel.find()', async () => {
    await productController.getProducts(req, res, next);
    expect(ProductModel.find as jest.Mock).toHaveBeenCalled();
  });
  it('should return 200 response', async () => {
    await productController.getProducts(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return json body in response', async () => {
    (ProductModel.find as jest.Mock).mockReturnValue(allProducts);
    await productController.getProducts(req, res, next);
    expect(res._getJSONData()).toStrictEqual(allProducts);
  });
  it('should handle errors', async () => {
    const errorMessage = { message: 'Error finding product data' };
    const rejectedPromise = Promise.reject(errorMessage);
    (ProductModel.find as jest.Mock).mockReturnValue(rejectedPromise);
    await productController.getProducts(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
