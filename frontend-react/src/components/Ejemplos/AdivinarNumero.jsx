import { useState } from "react";

function AdivinarNumero(){
    const [Seleccion,setSeleccion] = useState("")
    const [Resultado,setResultado] = useState("")

    function sortear(){
    const ganador = Number(Math.floor(Math.random*10 + 1))
    const elegido = Number(Seleccion)
    
    if(Seleccion ===""){
        setResultado("ingresa un numero")
        return
    }
    if(elegido < 1 || elegido > 10){
        setResultado("Ingresa un numero entre 1 y 10");
        return
    }

    if(elegido === ganador){
        setResultado(`Ganaste.Salio ${Number(ganador)} y elegiste ${elegido}`)
    } else {
        setResultado(`Perdiste.Salio ${Number(ganador)} y elegiste ${elegido}`)
    }
    }
    return(
        <div>
            <h2>Adivina el numero</h2>
            <input type="number" value = {Seleccion} onChange={(e) => {setSeleccion(e.target.value)}} />
            <button onClick={sortear}>Adivinar</button>
            <p>{Resultado}</p>
        </div>
    )
    
}


export default AdivinarNumero;