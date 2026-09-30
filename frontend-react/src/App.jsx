import Titulo from "./components/Titulo";
import {Navbar} from "./components/Navbar";// ejemplo de exportacion nombrada_ mirar archivos
import Pie from "./components/Footer" // este tipo permite cambiar de nombre en la importacion
import TarjetaAlumno from "./components/TarjetaAlumno";
function App(){

  return(
    <>
    <Titulo texto="Sistema de Gestion Academica doc" color="yellow"/>
    <Navbar/>
    <h2>Adiminstracion de Alumnos</h2><br />
    <TarjetaAlumno nombre="Mateo" carrera="Programacion" edad="25"/><br />
    <TarjetaAlumno nombre="Juan" carrera="Ingenieria" edad="26"/><br />
    <Pie/>
    
    </>
  )
}

export default App