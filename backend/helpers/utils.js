import jwt from "jsonwebtoken";
import {JWTExpiresIn,JWTSecretKey} from './constant.js'


export const signToken = (id) => {
    return jwt.sign({ id }, JWTSecretKey, {
      expiresIn: JWTExpiresIn,
    });
  };
  export const createSendToken = (user,statusCode, res) => {
   const token = signToken(user._id);
   const id = user._id;
   const cookieOptions = {
     expires: new Date(
       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
     ),
     httpOnly: true,
   };
   if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
 
   //res.cookie("jwt", token, cookieOptions);
 
   // Remove password from output
 
   return res.status(statusCode).json({
     status: "success",
     message: "user registered successfully",
     id,
     token,
     user,
   });
 };