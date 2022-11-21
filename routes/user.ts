import { Router } from 'express';
import {getById, save, login, saveLogin, signupSave, signup, logout, postLogout } from '../controller/UserController';
import { passportLogin, passportSignup} from '../middlewares/login/passport';


const router = Router();


router.get('/login', login)
router.post('/login', passportLogin, saveLogin);
router.get('/signup', signup)
router.post('/signup', passportSignup,  signupSave)
router.get('/logout', logout)
router.post('/logout', postLogout)




router.get("/:id", getById);
router.post("/", save);



export default router;

