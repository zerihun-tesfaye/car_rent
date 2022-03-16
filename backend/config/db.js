 require('dotenv').config();
  const mongoose=require('mongoose');
   const connectDB = async ()=>{
      try {
          mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
           console.log("db connect successful")
        }catch(error){
          console.error("hello db not connected");
           process.exit(1)
        }

   }
   module.exports = connectDB;
