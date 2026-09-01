const express = require('express');
const app = express();
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes");
app.use("/alumnos",alumnosRoutes);


let alumnos = [

    {
        id:1,
        nombre:"Mateo",
        carrera:"programacion"
    },
    {
        id:2,
        nombre:"Juan",
        Carrera:"Seguridad e higiene"
    },
    {
        id:3,
        nombre:"Roberto",
        Carrera:"Ingenieria electromecanica"
    },
    {
        id:4,
        nombre:"Matias",
        Carrera:"Ingenieria agronoma"
    },
    {
        id:5,
        nombre:"Maria",
        Carrera:"Psicologia"
    },
]
// creo un middleware
app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
})


app.listen(3000, ()=>{
    console.log("Servidor funcionando en http://localhost:3000");
})