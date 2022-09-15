import { Router } from 'express';
import { permissions } from '../middlewares/superadmin';
import {getAll, getById, save, updateById, deleteById } from '../controller/ProductController';

const router = Router();


router.get("/", getAll);
router.get("/:id", getById);
router.post("/", permissions, save);
router.put("/:id", permissions, updateById);
router.delete("/:id", permissions, deleteById);


export default router;

