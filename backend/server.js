const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors());
const alumnosRoutes = require("./routes/alumnos.routes");
//const docentesRoutes = require("./routes/docentes.routes");
app.use("/alumnos",alumnosRoutes);
//app.use("/docentes",docentesRoutes);
const conectarBD = require("./config/databse")
require("dotenv").config()
const PORT = process.env.PORT;


conectarBD();
// creo un middleware
app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
})




app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
})

