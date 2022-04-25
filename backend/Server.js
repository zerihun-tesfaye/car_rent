import  Express  from "express";
import cors from "cors";
import {PORT} from './helpers/constant.js'
import route from "./route/index.js";
import {db} from './helpers/connection.js'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import path from 'path'
dotenv.config()
const app = new Express()
db()
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
const  __dirname = path.resolve();
app.use(Express.static(`${__dirname}public`))

route(app)



app.listen(PORT | "5000", ()  => {
    console.log(`App listening on port ${PORT}`);
});