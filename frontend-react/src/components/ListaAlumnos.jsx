import { useEffect, useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"

function ListaAlumnos(){
    const [Alumnos,setAlumnos] = useState([])

    useEffect(()=>{
        async function cargarAlumno() {
            try{
            const respuesta = await fetch(API_ALUMNOS);

            if(!respuesta.ok){
                throw new Error("No se pudo obtener la lista");
            }

            const datos = await respuesta.json();
            console.log(datos);
            setAlumnos(datos)
            } catch(error){
                console.log("Error de conexion:",error)
            }
        }
        cargarAlumno()
    },[])
    
    return (
        <>
    <h2>Alumnos</h2>
    {Alumnos.map(alumno => (
        <p key={alumno.legajo}>
            {alumno.legajo} - {alumno.nombre} - {alumno.carrera}
        </p>
    ))}

        </>
    )
}

export default ListaAlumnos;