const express = require('express');
const app = express();
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes");
//const docentesRoutes = require("./routes/docentes.routes");
app.use("/alumnos",alumnosRoutes);
//app.use("/docentes",docentesRoutes);


// creo un middleware
app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
})




app.listen(3000, ()=>{
    console.log("Servidor funcionando en http://localhost:3000");
})

