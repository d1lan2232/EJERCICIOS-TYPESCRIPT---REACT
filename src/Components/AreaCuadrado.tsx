
export const AreaCuadrado = () => {

    let longitud=5;

    const AreaCuadrado = (longitud : number): number => {
        return longitud * longitud;
    };
      
    const resultado = AreaCuadrado(longitud);

    return (
        <div className="container-fluid" style={{textAlign: 'center'}}>
        <p>Longitud del lado: {longitud}</p> 
        <span>Área del cuadrado: {resultado}</span>
        </div>
    );
};


