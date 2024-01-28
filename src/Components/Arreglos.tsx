
export const Arreglos = () => {
    
    const elementosArreglo = (arreglo: number[]) =>{
        return (
            arreglo.reduce ((elemento1, elemento2) => elemento1 + elemento2)
        ) 
    }

    const ArregloNumeros: number[] = [4,  1,  2,  8];
    const suma: number = elementosArreglo(ArregloNumeros);

  return (
    <div style={{textAlign:'center'}}>
        <p>Arreglo seleccionado: [4,  1,  2,  8]</p>
        <p>La suma del arreglo es: {suma}</p>
    </div>
  )
}


