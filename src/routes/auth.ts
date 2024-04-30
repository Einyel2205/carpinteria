import express from "express";
import authController from '../controllers/user/auth.controller';
const router = express.Router();


router.post('/', authController);


export default router;
    