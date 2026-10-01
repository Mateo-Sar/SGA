import { useState } from "react";

function Mostrar(){
    const [Mostrar,setMostrar] = useState(false)

    return(
        <div>
            <h1>Mostrar texto</h1>

            <button onClick={()=> setMostrar(!Mostrar)}>Mostrar/Ocultar</button>
            {Mostrar && <p>Iformacion visible</p>}
        </div>
    )
}

export default Mostrar;