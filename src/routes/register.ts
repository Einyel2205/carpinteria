import express from "express";
import registerController from '../controllers/user/register.controller';
const router = express.Router();


router.post('/', registerController);


export default router;