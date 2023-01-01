const express = require("express");
const apiRoutes = require("./routes/index");
const app = express();
const mongoose = require("mongoose");


const log = require("./middlewares/log");




app.use(log);
app.use(express.json());
app.use('/api',apiRoutes);




mongoose.connect("mongodb://127.0.0.1:27017/no-relacional", (error) =>{
        if(error) {
            console.log("Hubo un error al conectar a MongoDB", error);
        }else{
            console.log("Coneccion exitosa");
        }
    }
);

app.listen(3000);