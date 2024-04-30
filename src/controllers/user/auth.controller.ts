import bcrypt from 'bcryptjs';
import UserRepository from "../../repositories/User/userRepository";
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { generateToken } from '../../middlewares/generateJWT';

let auth = async (req: Request, res: Response) => {
      try {
        const {
            email, 
            password
        } = req.body;
        const result: any = await UserRepository.auth(email);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(password, result[0][0].contrasenia);
        
          if (isPasswordValid){
            const token = generateToken(email, process.env.JWT_SECRET || "defualtSecret");
            return res.status(200).json({ 
              status: 'Successful authentication',
              token: token
            });
          }
        }
        return res.status(401).json({ 
          status: 'Incorrect username or password',
          message: 'Denied Access'
        });
      } catch (error) {
        console.log(error);
      }
}


export default auth;  