import Mongoose  from "mongoose";

const user =new Mongoose().Schema({
    firstname:{ type:String , required:true},
    lastname:{ type:String , required:true},
    email:{ type:String , required:true},
    password:{ type:String , required:true},
    profile:{ type:String}
})

export  default  Mongoose.model("User",user)