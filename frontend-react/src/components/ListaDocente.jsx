import { useEffect, useState } from "react";
const API_DOCENTES = "http://localhost:3000/docentes"

function ListaDocentes({ actualizar, onDocenteCreado, onEditarDocente }){
    const [Docentes,setDocentes] = useState([])
    const [cargando,setCargando] = useState(true)
    const [error,setError] = useState("")

    async function eliminarDocente(dni) {
        const confirmacion = window.confirm("¿Seguro que queres eliminar este Docente?")
        if(!confirmacion){
            return
        }

        try{
            const respuesta = await fetch(`${API_DOCENTES}/${dni}`,
                {method: "DELETE"}
            )

            if(!respuesta.ok){
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onDocenteCreado()
        } catch(error){
            console.error("Error al eliminar")
            alert(error.message || "No se pudo eliminar docente")
        }
        
    }

    useEffect(()=>{
        async function cargarDocente() {
            setCargando(true);
            setError("")
            try{
            const respuesta = await fetch(API_DOCENTES);

            if(!respuesta.ok){
                throw new Error("No se pudo obtener la lista");
            }

            const datos = await respuesta.json();
            console.log(datos);
            setDocentes(datos)
            } catch(error){
                console.error("Error de conexion:",error)
                setError("No se pudo cargar la lista de docente.")
            } finally{
                setCargando(false);
            }
        }
        cargarDocente()
    },[actualizar])
    if(cargando){
        return <p>Cargando docentes...</p>
    }
    if(error){
        return(<p role="alert">{error}</p>)
    }

    return (
        <>
    <h2>Alumnos</h2>
    {Docentes.length === 0 ? (<p>No hay alumnos registrados.</p>) : (<ul style={{listStyle:"none"}}>{Docentes.map(docente => (
        <li key={docente.dni}>
            {docente.dni} - {docente.nombre} - {docente.especialidad} <br />
            <button type="button" onClick={()=> onEditarDocente(docente)}>Editar</button>
            <button type="button" onClick={() => eliminarDocente(docente.dni)}>Eliminar</button>
        </li>
    ))}</ul>)  }
    

        </>
    )
}

export default ListaDocentes;