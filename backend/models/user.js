import Mongoose  from "mongoose";
const Schema = Mongoose.Schema
const user =new Schema({
    firstname:{ type:String , required:true},
    lastname:{ type:String , required:true},
    email:{ type:String , required:true},
    password:{ type:String , required:true},
    phonenumber:{type:String},
    profile:{ type:String ,default:"https://robohash.org/suscipiteteos.png?size=50x50&set=set1"},
    rentedCar:{
       type:Schema.Types.ObjectId,
       ref:'car' 
    },
    rentedHouse:{
        type:Schema.Types.ObjectId,
        ref:'house'
    }
    
})

export  default  Mongoose.model("User",user)