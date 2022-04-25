import mongoose  from "mongoose";
const Schema = mongoose.Schema
const house = new Schema({
    housename:{type:String},
    discription:{type:String},
    price:{type:String},
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    address:{type:String},
    housePicture:{
        type:Array
    }
})

export default mongoose.model('house',house)