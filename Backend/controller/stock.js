const express = require("express");
const Stock = require("../models/stock");

async function getStock(req,res) {
    const allStocks = await Stock.find();
    return res.status(200).json(allStocks);
};


async function getStockBId(req,res) {
    const stk = await Stock.findById(req.params.id);
    return res.status(200).json(stk);};



async function postStock(req,res) {
 const {stockName,data,openion, profit,image} = req.body;
 //console.log(req.body);
 if(!stockName || !data || !openion || !profit || !image){
    return res.status(400).json({message : "please fill all the information"});
 }
 const newStock = await Stock.create({
    stockName,data,openion, profit,image
 });

 return res.status(200).json(newStock);
};


async function putStock(req,res) {
    const {stockName,data,openion, profit,image} = req.body;
    let stk = await Stock.findById(req.params.id);
    if(!stk){
        return res.status(400).json({message : "that stock is not exists" });
    }
    else{
        await Stock.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.status(200).json({stockName,data,openion, profit,image});
    }
};


async function deleteStockBId(req,res) {
    let stk = await Stock.findById(req.params.id);
    if(!stk){
        return res.status(400).json({message : "that stock is not exists" });
    }
    else{
        await Stock.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Stock deleted successfully" });
    }
 };



module.exports = {
    getStock,
    getStockBId,
    postStock,
    putStock,
    deleteStockBId
};
