import { useState } from "react";
function Incremento(){
   // let contador = 0;
   const [Contador,setContador] = useState(0)
    function incremento(){
        setContador(Contador + 1)
       // console.log(contador);
    }

    function decremento(){
        if (Contador > 0)
        setContador(Contador - 1)
    }

    return(
        <div style={{display: "flex",justifyContent: "center",gap:"10px"}}>
            <h1>contador: {Contador}</h1>
            <button onClick={incremento} style={{width:"100px",height:"100px",fontSize:"15px"}}>Incremento</button>
            <button onClick={decremento} style={{width:"100px",height:"100px",fontSize:"15px"}}>Decremento</button>

        </div>
    )
}

export default Incremento