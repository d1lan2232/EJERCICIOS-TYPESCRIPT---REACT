import { useState } from "react"

export const Contador = () => {

    const[valor, setValor]= useState (0);

    const contador=(num:number)=>{
        setValor(valor + num);
    }

  return (
    <div>
        <h6 style={{textAlign: 'center'}}>Contador: <small>{valor}</small></h6>
        <div style={{textAlign: 'center'}}>
        <button className="btn btn-success" onClick={()=>contador(5)}>+5</button>
        &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={()=>contador(-5)}>-5</button>
        </div>
    </div>
  )
}


