import ListaAlumnos from "./components/ListaAlumnos"
import FormularioAlumno from "./components/FormularioAlumno"
import { useState } from "react"

function App(){

  const [actualizar,setActualizar] = useState(0)

  function onAlumnoCreado(){
    setActualizar(valor => valor + 1)
  }

  return(

  <>
    <FormularioAlumno onAlumnoCreado={onAlumnoCreado}/>
    <ListaAlumnos actualizar={actualizar}/> 
  </>
  )
  
}

export default App