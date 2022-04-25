import {catchAsync} from '../middleware/errorHandling.js';
import housesModel from '../models/houses.js';
import userModel from '../models/user.js'
import appError from '../helpers/appError.js';

export const  houseController = {
    uploadHouse: catchAsync(async (req,res,next)=>{
        const data = req.body
        const reqFiles = [];
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push("http://localhost/" + req.files[i].filename)
        }
        const user = await userModel.findById({_id:req.query.id})
        if(!user) return next(new appError("User Not Found",404))

     housesModel.create({
            housename:data.housename,
            discription:data.discription,
            price:data.price,
            address:data.address,
            housePicture:reqFiles,
            owner:user
        },function(err,result){
            if(err){
             return next (new appError(err,404))
            }
            return res.json(result)
        })
         
    }),


    // get all
    getallHouse: catchAsync(async (req,res,next)=>{
         housesModel.find().populate('User').exec(function(err,result){

            if(err) return next(new appError(err.message,404))
            return res.json(result)
         })
    }),
    // single house
    getSingleHouse: catchAsync(async (req,res,next)=>{

    })

    // 

}

