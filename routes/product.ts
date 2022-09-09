import express from 'express';
import { Router } from 'express';
import Product from '../src/Product';
import { permissions } from '../middlewares/superadmin';
import ProductController from '../controller/ProductController';

const controller = new ProductController();

const router = Router();


//GET ALL localhost/person
router.get("/", controller.getAll);
// GET localhost/person/:id
router.get("/:id", controller.getById);
// POST localhost/person
router.post("/", controller.save);
// PUT localhost/person/:id
router.put("/:id", controller.updateById);
// DELETE localhost/person/:id
router.delete("/:id", controller.deleteById);


export default router;

