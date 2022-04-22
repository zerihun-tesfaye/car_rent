import mongoose from 'mongoose'

const Schema = mongoose.Schema


const payment = new Schema({
  rentBy:{
      type:Schema.Types.ObjectId,
      ref:'User'
  },
  startingDate:{type:Date},
  endingDate:{type:Date},
  rentedCar:{
      type:Schema.Types.ObjectId,
      ref:'car'
  },
  totalprice:{type:String}
})

export default mongoose.model('payment',payment)
