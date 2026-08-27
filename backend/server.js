const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Servidor funcionando en http://localhost:3000");
})

const alumnos = [

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

app.get("/alumnos",(req,res) =>{
    res.json(alumnos);
})

app.get("/alumnos/:id",(req,res)=>{
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id);
    res.json(alumno);
});