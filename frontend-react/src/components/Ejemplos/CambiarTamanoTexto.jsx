import { useState } from "react";

function CambiarTamañoTexto(){
    const [tamano,setTamano] = useState("20px");

    return(
        <div>
            <p style={{fontSize: tamano}}>Sistema de Gestion Academico</p>
            <div style={{display:"flex",justifyContent:"center",gap:"5px",marginTop:"15px"}}>
            <button onClick={()=>setTamano("40px")}>Texto Grande</button>
            <button onClick={()=>setTamano("20px")}>Texto mediano</button>
            <button onClick={()=>setTamano("10px")}>Texto chico</button>
            </div>
        </div>
    )
}

export default CambiarTamañoTexto;