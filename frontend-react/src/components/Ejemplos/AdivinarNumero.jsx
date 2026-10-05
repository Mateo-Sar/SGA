import { useState } from "react";

function AdivinarNumero(){
    const [Seleccion,setSeleccion] = useState("")
    const [Resultado,setResultado] = useState("")
    const [colorResultado,setColorResultado] = useState("");
    const [ganadas,setGanadas] = useState(0);
    const [perdidas,setPerdidas] = useState(0);
    const [partidas,setPartidas] = useState(0);

    function sortear(){
    const ganador = Number(Math.floor(Math.random*10 + 1))
    const elegido = Number(Seleccion)
    setPartidas(partidas + 1);
    
    if(Seleccion ===""){
        setResultado("ingresa un numero")
        setColorResultado("red");
        return
    }
    if(elegido < 1 || elegido > 10){
        setResultado("Ingresa un numero entre 1 y 10");
        setColorResultado("red");
        return
    }

    if(elegido === ganador){
        setResultado(`Ganaste.Salio ${(ganador)} y elegiste ${elegido}`)
        setColorResultado("green");
        setGanadas(ganadas +1)
        
    } else {
        setResultado(`Perdiste.Salio ${(ganador)} y elegiste ${elegido}`)
        setColorResultado("red");
        setPerdidas(perdidas + 1);
        
    }
    }
    return(
        <div>
            <h2>Adivina el numero</h2>
            <input type="number" value = {Seleccion} onChange={(e) => {setSeleccion(e.target.value)}} />
            <button onClick={sortear}>Adivinar</button>
            <p style={{color:colorResultado}}>{Resultado}</p>
            <hr />
            <p>Partidas jugadas: {partidas}</p>
            <p>Partidas Ganadas: {ganadas}</p>
            <p>Partidas Perdidas: {perdidas}</p>
        </div>
    )
    
}


export default AdivinarNumero;