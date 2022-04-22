import mongoose  from "mongoose";
import {MongoURL} from '../helpers/constant.js'

export function db(){
    try {
        mongoose.connect(
            MongoURL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected")
          );
        
    } catch (error) {
        console.log("could not connect");
    }
}
