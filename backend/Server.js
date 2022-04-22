import  Express  from "express";
import cors from "cors";
import {PORT} from './helpers/constant.js'
import route from "./route/index.js";
import {db} from './helpers/connection.js'
import dotenv from 'dotenv'
dotenv.config()
const app = new Express()
db()
app.use(cors())
app.use(Express.urlencoded({extended:false}))


// route(app)



app.listen(PORT | "5000", ()  => {
    console.log(`App listening on port ${PORT}`);
});