import ListaDocentes from "../components/ListaDocente"
import FormularioDocente from "../components/FormularioDocente"
import { useState } from "react"


function Docentes(){

const [actualizar,setActualizar] = useState(0)
  const [DocenteEditar,setDocenteEditar] = useState(null)

  function onDocenteCreado(){
    setActualizar(valor => valor + 1)
    setDocenteEditar(null)
  }

  function seleccionarDocente(docente){
    setDocenteEditar(docente)
  }

  return(

  <>
    <FormularioDocente onAlumnoCreado={onDocenteCreado} key={DocenteEditar?.legajo ?? "nuevo"} DocenteEditar={DocenteEditar} onCancelar={() => setDocenteEditar(null)}/>
    <ListaDocentes actualizar={actualizar} onAlumnoCreado={onDocenteCreado} onEditarAlumno={seleccionarDocente}/> 
  </>
  )
}

export default Docentes