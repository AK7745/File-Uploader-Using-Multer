const { Timestamp } = require('mongodb');
const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const productScheme=new Schema({
    name:{
        type: String,
        unique:true
    },
    productType:{
        type: Number
     
    },


},{Timestamp:true})



const Product=mongoose.model('Product',productScheme);

module.exports= {Product}

