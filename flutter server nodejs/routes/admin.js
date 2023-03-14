const express =require('express');
const adminRouter = express.Router();
const admin = require('../components/my_admin');
const Product = require('../models/product');

adminRouter.post('/admin/add-product',admin,async(req,res) => {
    try
    {
        const {name, description , images , qty , category} = req.body;
        let product = new Product({
            name, description , images , qty , category
        });
        product = await product.save();
        res.json(product);
    }
    catch(e)
    {
        res.status(500).json({error : e.meesage});
    }
});
module.exports = adminRouter;