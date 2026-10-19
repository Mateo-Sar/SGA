import { useEffect, useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"

function ListaAlumnos({ actualizar, onAlumnoCreado }){
    const [Alumnos,setAlumnos] = useState([])
    const [cargando,setCargando] = useState(true)
    const [error,setError] = useState("")

    async function eliminarAlumno(legajo) {
        const confirmacion = window.confirm("¿Seguro que queres eliminar este alumno?")
        if(!confirmacion){
            return
        }

        try{
            const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`,
                {method: "DELETE"}
            )

            if(!respuesta.ok){
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onAlumnoCreado()
        } catch(error){
            console.error("Error al eliminar")
            alert(error.message || "No se pudo eliminar alumno")
        }
        
    }

    useEffect(()=>{
        async function cargarAlumno() {
            setCargando(true);
            setError("")
            try{
            const respuesta = await fetch(API_ALUMNOS);

            if(!respuesta.ok){
                throw new Error("No se pudo obtener la lista");
            }

            const datos = await respuesta.json();
            console.log(datos);
            setAlumnos(datos)
            } catch(error){
                console.error("Error de conexion:",error)
                setError("No se pudo cargar la lista de alumno.")
            } finally{
                setCargando(false);
            }
        }
        cargarAlumno()
    },[actualizar])
    if(cargando){
        return <p>Cargando alumnos...</p>
    }
    if(error){
        return(<p role="alert">{error}</p>)
    }

    return (
        <>
    <h2>Alumnos</h2>
    {Alumnos.length === 0 ? (<p>No hay alumnos registrados.</p>) : (<ul style={{listStyle:"none"}}>{Alumnos.map(alumno => (
        <li key={alumno.legajo}>
            {alumno.legajo} - {alumno.nombre} - {alumno.carrera} <br />
            <button type="button" onClick={() => eliminarAlumno(alumno.legajo)}>Eliminar</button>
        </li>
    ))}</ul>)  }
    

        </>
    )
}

export default ListaAlumnos;