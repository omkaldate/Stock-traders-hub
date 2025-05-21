const mongoose =  require("mongoose");

const connectionDb = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/StockTradersHub")
    .then(()=>console.log("DB connected"));
}


module.exports = connectionDb;