import { Router, Request, Response } from 'express';
import { productController } from '~src/api/controllers';

const route = Router();

export default (app: Router) => {
  /**
   *  @swagger
   *  tags:
   *  name: Product
   *  description: Product management
   *
   */
  app.use('/product', route);

  /**
   *  @swagger
   *  "/product":
   *    get:
   *      tags:
   *      - Product
   *      summary: "Sample"
   *      responses:
   *        "200":
   *          description: 전체 Product 검색
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  data:
   *                    type: array
   *                    items:
   *                      $ref: '#/components/schemas/Product'
   */

  route.get('/', productController.getProducts);
  route.post('/', productController.createProduct);
};
