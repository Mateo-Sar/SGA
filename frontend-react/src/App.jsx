import ListaAlumnos from "./components/ListaAlumnos"
import FormularioAlumno from "./components/FormularioAlumno"
import { useState } from "react"

function App(){

  const [actualizar,setActualizar] = useState(0)
  const [alumnoEditar,setAlumnoEditar] = useState(null)

  function onAlumnoCreado(){
    setActualizar(valor => valor + 1)
    setAlumnoEditar(null)
  }

  function seleccionarAlumno(alumno){
    setAlumnoEditar(alumno)
  }

  return(

  <>
    <FormularioAlumno onAlumnoCreado={onAlumnoCreado} key={alumnoEditar?.legajo ?? "nuevo"} alumnoEditar={alumnoEditar}/>
    <ListaAlumnos actualizar={actualizar} onAlumnoCreado={onAlumnoCreado} onEditarAlumno={seleccionarAlumno}/> 
  </>
  )
  
}

export default App