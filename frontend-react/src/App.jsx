import ListaAlumnos from "./components/ListaAlumnos"
import FormularioAlumno from "./components/FormularioAlumno"
import EjemploMui from "./components/Ejemplos/EjemploMui"
import { useState } from "react"
import FAQ from "./components/FAQ"

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
    <FormularioAlumno onAlumnoCreado={onAlumnoCreado} key={alumnoEditar?.legajo ?? "nuevo"} alumnoEditar={alumnoEditar} onCancelar={() => setAlumnoEditar(null)}/>
    <ListaAlumnos actualizar={actualizar} onAlumnoCreado={onAlumnoCreado} onEditarAlumno={seleccionarAlumno}/> 
    <EjemploMui/> <br /><br />
    <FAQ/>
  </>
  )
  
}

export default App