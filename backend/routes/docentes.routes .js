const express = require("express");
const { obtenerDocentes } = require("../controllers/docentes.controller");
const router = express.Router();


router.get("/",obtenerDocentes);


router.get("/:id",(req,res)=>{
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id);
    res.json(docentes);
});


router.post("/",(req,res)=>{
    const nuevodocente = req.body
    docentes.push(nuevodocente)
    res.json({mensaje:"docente registrado correctamente"})
    console.log(req.body);
})


router.put("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const docente = docentes.find(alumno => alumno.id === id);
    docente.id = req.body.id;
    docente.nombre = req.body.nombre;
    docente.carrera = req.body.carrera;
    res.json({mensaje:"docente actualizado correctamente"});
})


router.delete("/:id",(req,res)=>{
    const id = Number(req.params.id);
    docentes = docente.filter(docente => docente.id !== id);
    res.json({mensaje:"docente eliminado correctamente"})
})

module.exports = router