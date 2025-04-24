const express = require("express");
const {getStock,getStockBId,postStock,putStock, deleteStockBId} = require("../controller/stock");


const router = express.Router();

router.get("/", getStock);
router.get("/:id", getStockBId);
router.post("/", postStock);
router.put("/:id", putStock);
router.delete("/:id", deleteStockBId);



module.exports = router;