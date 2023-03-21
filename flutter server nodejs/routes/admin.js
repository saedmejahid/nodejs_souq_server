const express =require('express');
const adminRouter = express.Router();
const admin = require('../components/my_admin');
const {Product} = require('../models/product');
const Order = require('../models/order');

adminRouter.post('/admin/add-product',admin,async(req,res) => {
    try
    {
        const {name,price ,description , images , qty , category} = req.body;
        let product = new Product({
            name,price ,description , images , qty , category
        });
        product = await product.save();
        res.json(product);
    }
    catch(e)
    {
        res.status(500).json({error : e.meesage});
    }
});

adminRouter.get('/admin/get-products',admin, async (req,res) =>
{
    try
    {
        const products =await Product.find({});
        res.json(products);
    }
    catch(e)
    {
        res.status(5000).json({error :e.meesage});
    }
});
adminRouter.post('/admin/delete-products',admin, async (req,res) =>
{
    try
    {
        const {id} = req.body;
        let product = await Product.findByIdAndDelete(id);
        res.json(product);
    }
    catch(e)
    {
        res.status(5000).json({error :e.meesage});
    }
});
adminRouter.get('/api/all-orders-admin', admin, async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
  });
  adminRouter.post('/admin/update-order-status', admin, async (req, res) => {
    try {
      const {id , status} = req.body;
      let order = await Order.findById(id);
      order.status = status;
      order = await order.save();
      res.json(order);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  });
module.exports = adminRouter;