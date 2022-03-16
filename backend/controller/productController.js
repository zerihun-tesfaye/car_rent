const Product = require('../models/Product');

// all product 
const getAllproduacts = async () =>{
   try{
     const products = await Product.find({});
      res.json(products);
   }catch(error){
      console.error(error);
       res.status(500).json({massage:"opse server error"});
   }
}
// id
const getproduactById = async () =>{
   try{
     const product = await Product.findById(req.params.id);
      res.json(product);
   }catch(error){
      console.error(error);
       res.status(500).json({massage:"opse server error"});
   }
}
 module.exports = (
    getAllproduacts(),
    getproduactById()

 )
   
 