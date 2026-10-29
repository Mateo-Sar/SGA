const mongoose = require("mongoose");
const usuaruioSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    rol:{
        type:String,
        enum:["admin","usuario"],
        default:"usuario"
    }

},{
    versionKey: false
});

const Usuario = mongoose.model("Usuario",usuaruioSchema);

module.exports = Usuario;