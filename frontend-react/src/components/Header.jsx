import { Link } from "react-router-dom";
import SelectorTema from "./SelectorTema";

function Header(){
    return(
        <>
        <header>
            <h2>SGA</h2>
        </header>
        <nav>
            <Link to="/" >Link</Link>
            {" | "}
            <Link to="/alumnos" >Alumnos</Link>
            {" | "}
            <Link tp="ayuda" aria-label="ayuda">?</Link>
            <SelectorTema/>

        </nav>
        </>
    )
}

export default Header