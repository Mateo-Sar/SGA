import { useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"

function FormularioAlumno({ onAlumnoCreado}){
    const [formulario,setFormulario] = useState({
        legajo:"",
        nombre:"",
        carrera:"",
        correo:""
    })
    const [error,setError] = useState("")
    const [guardando,setGuardando] =  useState(false)

    function manejarCambio(e){
        const {name,value} = e.target
    
        setFormulario({
        ...formulario,
        [name]:value
        })
    
    }

   /* const [nombre,setNombre] = useState("");
    const [correo,setCorreo] = useState("");
    const [carrera,setCarrera] = useState("");
    const [legajo,setLegajo] = useState("");*/

    async function Guardar(e){
        e.preventDeafult();
        setError("")
        setGuardando(true)

        try{
            const alumno = {
                ...formulario,
                legajo: Number(formulario.legajo)
            }
            const respuesta = await fetch(API_ALUMNOS,{
                method:"POST",
                header:{"Content-Type":"aplication/json"},
                body: JSON.stringify(alumno)
            })
            if(!respuesta.ok) {
                throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`);
            }
            setFormulario({
                legajo:"",
                nombre:"",
                carrera:"",
                correo:""
            })

            onAlumnoCreado()
        }
        catch(error){
            console.error("Error al guardar:", error)
            setError(error.message || "No se pudo conectar con el servidor");
        } finally{
            setGuardando(false);
        }
    }

    return(
        <form onSubmit={Guardar} action="">
            <label htmlFor="nombre">Nombre: </label>
            <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} type="text" required /> <br />

            <label htmlFor="correo">Correo: </label>
            <input id="correo" name="correo" value={formulario.correo} onChange={manejarCambio} type="text" required /> <br />

            <label htmlFor="carrera">Carrera: </label>
            <input id="carrera" name="carrera" value={formulario.carrera} onChange={manejarCambio} type="text" required /> <br />

            <label htmlFor="legajo">Legajo: </label>
            <input id="legajo" name="legajo" value={formulario.legajo} onChange={manejarCambio} type="text" required /> <br />

            <button type="submit" disabled = {guardando}>{guardando ? "Guardando..." : "Guardar"}</button> <br />

            {error && <p role="alert">{error}</p>}

        </form>
    )
}

export default FormularioAlumno;