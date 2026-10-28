const mongoose = require("mongoose");

const docenteSchema = new mongoose.Schema({
    dni:{
        type:Number,
        unique:true},
    nombre:String,
    especialidad:String,
    correo:String,

},
{
    versionKey:false
})

const docente = mongoose.model("docente",docenteSchema)

module.exports = docente;