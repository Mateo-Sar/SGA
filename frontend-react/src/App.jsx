
//import EjemploMui from "./components/Ejemplos/EjemploMui"
import FAQ from "./components/FAQ"
import SelectorTema from "./components/SelectorTema"
import Alumnos from "./pages/Alumnos"
import {Routes,Route} from "react-router-dom"
import LayoutPrincipal from "./layout/LayoutPrincipal"
import Inicio from "./pages/Inicio"
function App(){

  return(

  <>
  <Routes>
    <Route element={<SelectorTema/>}/>
    <Route path="/" element={<LayoutPrincipal/>}/>
    <Route index element = {<Inicio/>}/>
    <Route path="alumnos" element={<Alumnos/>}/>
    <Route path="ayuda" element={<FAQ/>}/>
  </Routes>
  </>
  )
  
}

export default App