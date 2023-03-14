const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        required : true,
        type: String,
        trim: true,
    },
    email:{
        required: true,
        type: String,
        trim: true,
        validate:{
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
               return value.match(re);
            },
            message:'Your Email Is Not Vaild !',
        },
    },
    password:{
        required: true,
        type : String,
    },
    address:{
        default:'',
        type: String,
        trim: true,
    },
    type:{
        type:String,
        default:'user',
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User;
