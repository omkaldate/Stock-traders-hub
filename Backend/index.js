const express = require("express");
const route = require("./routes/stock");
const connectionDb =  require("./connectDB/connect")

const app = express();
const PORT = 8000;

connectionDb();
app.use(express.json());
app.use("/stock", route);


app.listen(PORT, ()=> console.log(`server started on port : ${PORT}`));
    
