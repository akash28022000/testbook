const mongoose = require('mongoose');

const menuitemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require:true
    },
    taste: {
        type: String,
        enum: ['sweets', 'spicy', 'sour'],
        required: true
    },
    is_drink:{
        type: [String],
        default:false
    },
   ingredients:{
        type: [String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    
    },
    
});

const menu = mongoose.model('menu',menuitemSchema);
module.exports=menu;


