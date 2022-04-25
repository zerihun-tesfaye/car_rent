import userModel from '../models/user.js'
import bcryptjs from 'bcryptjs'
import {createSendToken} from '../helpers/utils.js'
import appError from '../helpers/appError.js'
import {} from '../utils/multer.js'
import {catchAsync} from '../middleware/errorHandling.js'
import user from '../models/user.js'
import  jwt  from 'jsonwebtoken'
import {JWTSecretKey} from '../helpers/constant.js'
import { promisify } from "util";




const register = catchAsync(async (req,res,next)=>{
    const data = req.body
    const password = await bcryptjs.hash(data.password,12) 
    if(req.file?.fieldname == "profile") data.profile = "http://localhost/"+ req.file.filename 
    const email = data.email
    const firstname = data.firstname
    const lastname = data.lastname
    const olduser = await userModel.findOne({email})
    
    console.log(olduser)
  if(olduser) return next(new appError("User Already Registered",404))
  await userModel.create({
     firstname:firstname,
     lastname:lastname,
     email:email,
     password:password,
     phonenumber:phonenumber,
     profile:data.profile
 })
 .then((responce)=>{
  createSendToken(responce,200,res)
}).catch((err)=>{
     return next(new appError(err.message,404))
 })
 
});

const loginuser = catchAsync(async (req,res,next)=>{
        const {email,password} = req.body
        const user = await userModel.findOne({email})
        if(user && (await bcryptjs.compare(password,user.password))){
            createSendToken(user,200,res)
        } else{
            return next(new appError("User No Found Please Register!",404))
        }
 });
 const protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
  
    if (!token) {
      return next(
        new appError("You are not logged in! Please log in to get access.", 401)
      );
    }
  
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, JWTSecretKey);
   const user = userModel.findById({_id:decoded.id})
  
    // 3) Check if user still exists
      if (!user) {
        return next(
          new appError(
            "The user belonging to this token does no longer exist.",
            401
          )
        );
      }
      next();
  });
  const testing= catchAsync(async (req,res,next)=>{
      res.json("Your Logged In")
  })
export default{
    register,
    loginuser,
    protect,
}

