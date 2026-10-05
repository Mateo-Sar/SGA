import { useState } from "react";

function Mensaje(){
    const [mensaje,setMensaje] = useState("Hola alumno");

    function CambiarMensaje(){
        setMensaje(mensaje === "hola,alumno" ? "Bienvenido a Programacion IV" : "Hola alumno")
    }

    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={()=>CambiarMensaje}>Cambiar mensaje</button>
        </div>
    )
}

export default Mensaje;