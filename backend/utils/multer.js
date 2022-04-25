import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: function(req,res,cb){
      const  __dirname = path.resolve();
        cb(null,path.join(__dirname+'/public/data/image'))
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);

    }
})

const uploads = multer({storage:storage})
export default uploads;
