const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");

const stockSchema = mongoose.Schema({
    stockName :{
        type : String,
        required : true,
    },
    data :{
        type : String,
        required : true,
    },
    openion :{
        type : String,
        required : true,
    },
    profit :{
        type : String,
        required : true,
    },
    image :{
        type : String,
        required : true,
    },
},
{timestamps:true});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;