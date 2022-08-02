import { NextFunction, Request, Response } from 'express';
import ProductModel from '~src/model/Product.model';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const createdProduct = await ProductModel.create(body);
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};
