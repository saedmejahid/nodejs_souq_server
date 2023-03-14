const mongoose = require('mongoose');
const productSchema = mongoose.Schema
({
    name:
    {
        type: String,
        required: true,
        trim: true,
    },
    description:
    {
        type: String,
        required: true,
        trim: true,
    },
    category:
    {
        type: Number,
        required: true,
        trim: true,

    },
    images:
    [
        {
            type: String,
            required: true,
        }
    ],
    price:
    {
        type: Number,
        required: true,
    },
    qty:
    {
        type: Number,
        required: true,
    },
    
});
const Product = mongoose.model('Product',productSchema);
module.exports = Product;