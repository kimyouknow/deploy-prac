import { Router } from 'express';
import product from '~src/api/routes/product.route';

export default () => {
  const router = Router();
  product(router);
  return router;
};
