import { useState } from "react";

function FormularioAlumno(){
    const [nombre,setNombre] = useState("");
    const [correo,setCorreo] = useState("");
    const [carrera,setCarrera] = useState("");
    const [legajo,setLegajo] = useState("");

    function Guardar(e){
        e.preventDeafult();
        console.log(nombre)
        console.log(correo)
    }

    return(
        <form onSubmit={Guardar} action="">
            <label htmlFor="nombre">Nombre: </label>
            <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" /> <br />
            <label htmlFor="correo">Correo: </label>
            <input value={correo} onChange={(e)=>setCorreo(e.target.value)} type="text" /> <br />
            <label htmlFor="carrera">Carrera: </label>
            <input value={carrera} onChange={(e)=>setCarrera(e.target.value)} type="text" /> <br />
            <label htmlFor="legajo">Legajo: </label>
            <input value={legajo} onChange={(e)=>setLegajo(e.target.value)} type="text" /> <br />
            <button type="submit">Guardar</button>
            <h3>Legajo:{legajo}</h3>
            <h3>nombre:{nombre} </h3>
            <h3>Carrera:{carrera}</h3>
            <h3>Correo:{correo}</h3>
        </form>
    )
}

export default FormularioAlumno;