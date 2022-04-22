import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null,"public/uploads")
    },
    filename: function(req,res,cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);

    }
})

const uploads = multer({storage:storage})
export default uploads;
