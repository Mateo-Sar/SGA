import { useState } from "react";

function CambiarTitulo(){
    const [Titulo,setTitulo] = useState("Inicio")

    return(
        <div>
            <h2>{Titulo}</h2>
            <div style={{display:"flex",gap:"15px",justifyContent:"center"}}>
                <button onClick={()=> setTitulo("Alumnos")} style={{width : "100px",height:"100px",fontSize:"20px",color:"lightblue",padding:"5px"}}>Alumnos</button>
                <button onClick={()=> setTitulo("Docentes")} style={{width : "100px",height:"100px", fontSize:"20px",color:"lightblue",padding:"5px"}}>Docentes</button>

            </div>
        </div>
    )
}

export default CambiarTitulo;