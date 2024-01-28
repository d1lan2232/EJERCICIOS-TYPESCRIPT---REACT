
export const DivisionArreglo = () => {

    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const division = (elemento: number): number => {
        return elemento / 5;
    };

    const nuevoArreglo = arreglo.map(division);

  return (
    <div style={{textAlign: 'center'}}>
        <p>Del arreglo: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]</p>
        <p>Se obtiene este nuevo arreglo es: {nuevoArreglo}</p>
    </div>
  )
}


