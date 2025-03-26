import { Router } from "express";
import { getProducts } from "./products.controller";

const router = Router();
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene la lista de productos.
 *     responses:
 *       200:
 *         description: Lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Producto A
 *                   price:
 *                     type: number
 *                     example: 100
 */
router.get('/', getProducts);
export default router;