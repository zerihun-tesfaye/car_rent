import {catchAsync} from  '../middleware/errorHandling.js'
import userModel from '../models/user.js'
import appError from '../helpers/appError'
import carModel from '../models/cars.js'


export default userController = {
    // get profile
    getuser: catchAsync(async (req,res,next)=>{
       await userModel.findById({_id:req.query.id},function(err,results){
            if(err) return next(new appError(err,404))
            return res.json(results) 
        })
    }),
    // history 
    getUsercarhistory: catchAsync(async (req,res,next)=>{
      
    }),
  // search car by model
    searchcar: catchAsync(async (req,res,next)=>{   
      await carModel.findOne({model:req.query.model},function(err,results){
            if(err) return next(new appError(err,404))
            return res.json(results)
        })
    }),
   // history of car 
   rentedcarhistory: catchAsync(async (req,res,next)=>{
       
   }),

   // history of House
       
}

