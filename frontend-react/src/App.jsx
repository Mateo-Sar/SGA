import Titulo from "./components/Titulo";
import {Navbar} from "./components/Navbar";// ejemplo de exportacion nombrada_ mirar archivos
import Pie from "./components/Footer" // este tipo permite cambiar de nombre en la importacion
import TarjetaAlumno from "./components/TarjetaAlumno";
import Incremento from "./components/Ejemplos/Incremento";
import Mostrar from "./components/Ejemplos/Mostrar";
import CambiarTitulo from "./components/Ejemplos/CambiarTitulo";
import AdivinarNumero from "./components/Ejemplos/AdivinarNumero";
import CambiarMensaje from "./components/Ejemplos/CambiarMensaje";
import CambiarTamanoTexto from "./components/Ejemplos/CambiarTamanoTexto"

function App(){

  return(
    <>
    <Titulo texto="Sistema de Gestion Academica doc" color="yellow"/>
    <Navbar/>
    <h2>Adiminstracion de Alumnos</h2><br />
    <TarjetaAlumno nombre="Mateo" carrera="Programacion" edad="25"/><br />
    <TarjetaAlumno nombre="Juan" carrera="Ingenieria" edad="26"/><br />
    <Mostrar></Mostrar>
    <CambiarTitulo/>
    <Incremento/>
    <AdivinarNumero></AdivinarNumero>
    <CambiarMensaje/>
    <CambiarTamanoTexto/>
    <Pie/>
    
    </>
  )
}

export default App