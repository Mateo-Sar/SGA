import { useState } from "react";
const API_DOCENTES = "http://localhost:3000/docentes"

function FormularioDocente({ onDocenteCreado, docenteEditar, onCancelar}){
    const [formulario,setFormulario] = useState({
        dni: String(docenteEditar?.dni ?? ""),
        nombre:docenteEditar?.nombre ?? "",
        especialidad:docenteEditar?.especialidad ?? "",
        correo:docenteEditar?.correo ?? ""
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

        const editando = Boolean(docenteEditar)
        const url = editando? `${API_DOCENTES}/${docenteEditar.dni}`: API_DOCENTES

        try{
            const docente = {
                ...formulario,
                dni: Number(formulario.dni)
            }
            const respuesta = await fetch(url,{
                method: editando ? "PUT" : "POST",
                header:{"Content-Type":"aplication/json"},
                body: JSON.stringify(docente)
            })

            if(!respuesta.ok) {
                throw new Error(`No se pudo guardar el docente. Estado HTTP: ${respuesta.status}`);
            }
            setFormulario({
                dni:"",
                nombre:"",
                especialidad:"",
                correo:""
            })

            onDocenteCreado()//
        }
        catch(error){
            console.error("Error al guardar:", error)
            setError(error.message || "No se pudo conectar con el servidor");
        } finally{
            setGuardando(false);
        }
    }

    function cancelar(){
        onCancelar()
    }

    return(
        <form onSubmit={Guardar} action="">
            <h2>{docenteEditar? "Editar Alumno": "Nuevo alumno"}</h2>
            <label htmlFor="nombre">Nombre: </label>
            <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} type="text" required /> <br />

            <label htmlFor="correo">Correo: </label>
            <input id="correo" name="correo" value={formulario.correo} onChange={manejarCambio} type="text" required /> <br />

            <label htmlFor="especialidad">Especialidad: </label>
            <input id="especialidad" name="especialidad" value={formulario.especialidad} onChange={manejarCambio} type="text" required /> <br />

            <label htmlFor="dni">DNI: </label>
            <input id="dni" name="dni" value={formulario.dni} onChange={manejarCambio} type="text" required /> <br />

            <button type="submit" disabled = {guardando}>{guardando ? "Guardando..." : docenteEditar ? "Guardar Cambio" : "Guardar"}</button> <br />

            {docenteEditar && (<button type="button" onClick={cancelar} disabled={guardando}> Cancelar</button>)}

            {error && <p role="alert">{error}</p>}

        </form>
    )
}

export default FormularioDocente;