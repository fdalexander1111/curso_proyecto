import { Router } from 'express';
import {getById, save} from '../controller/UserController';

const router = Router();


router.get("/:id", getById);
router.post("/", save);



export default router;

