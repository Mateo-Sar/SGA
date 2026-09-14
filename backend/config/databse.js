const mongoose = require("mongoose");

async function conectarBD(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base de datos conectada...")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = conectarBD;