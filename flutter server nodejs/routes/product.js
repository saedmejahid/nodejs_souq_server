const express =require('express');
const productRouter = express.Router();
const auth = require('../components/my_auth')
const Product = require('../models/product')


productRouter.get('/api/get-products',auth, async (req,res) =>
{
    try
    {
        const products =await Product.find({
            category: req.query.category
        });
        res.json(products);
    }
    catch(e)
    {
        res.status(5000).json({error :e.meesage});
    }
});

productRouter.get('/api/get-products/search/:text',auth, async (req,res) =>
{
    try
    {
        const products =await Product.find({
            name:{$regex:req.params.text,$options: "i"}
        });
        res.json(products);
    }
    catch(e)
    {
        res.status(5000).json({error :e.meesage});
    }
});




module.exports = productRouter;