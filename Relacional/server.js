const express = require("express");
const apiRoutes = require("./routes/index");
const db = require("./models/index");
const log = require("./middlewares/log");

const app = express();
app.use(express.json());
app.use(log);

db.sync().then(() => {
    console.log("Conectado a SQLite");
  }).catch(() => {
    console.log("Hubo un error al conectarse a la base de datos");
  });

app.use('/api',apiRoutes);

app.listen(3000),'localhost',(req, res) =>{
    console.log("Sirviendo en el puerto: 300");
};