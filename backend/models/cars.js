import mongoose from 'mongoose'
const Schema = mongoose.Schema

const car = new Schema({
  name:{type:String ,required:true},
  model:{type:String,required:true},
  discription:{type:String,required:true},
  pricePerdat:{type:String,required:true},
  picture:{type:Array},
  Owner:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})


export default mongoose.model('car',car)