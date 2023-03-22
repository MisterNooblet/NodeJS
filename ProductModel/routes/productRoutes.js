import express from "express";
import { addProduct, deleteAllProducts, deleteProduct, getActiveProducts, getByPriceRange, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
const router = express.Router()

router.get('/', getProducts).post('/', addProduct).delete('/', deleteAllProducts)
router.get('/active', getActiveProducts)
router.get('/range/:min/:max', getByPriceRange)
router.get('/:id', getProduct).delete('/:id', deleteProduct).put('/:id', updateProduct)
export default router