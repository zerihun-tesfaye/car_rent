import Mongoose  from "mongoose";
const Schema = Mongoose.Schema
const user =new Schema({
    firstname:{ type:String , required:true},
    lastname:{ type:String , required:true},
    email:{ type:String , required:true},
    password:{ type:String , required:true},
    profile:{ type:String ,default:"https://robohash.org/suscipiteteos.png?size=50x50&set=set1"}
})

export  default  Mongoose.model("User",user)