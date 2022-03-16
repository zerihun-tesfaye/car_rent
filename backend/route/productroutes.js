 const express=require('express');
 const router = express.Router();
 const{ getProductById,getAllProducts} = require('../controller/productController');
  // public
  // api/products
  // get all products from db
   

  router.get('/',getAllProducts )
  // public
  // api/products :id
  // get all products by id from db

  router.get('/:id',getProductById);

  module.exports = router;