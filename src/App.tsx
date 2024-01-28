import { AreaCuadrado } from './Components/AreaCuadrado';
import { Arreglos } from './Components/Arreglos';
import { DivisionArreglo } from './Components/DivisionArreglo';
import { Promedio } from './Components/Promedio';
import { Contador } from './Components/Contador';


//Componente en base a la funcion
const App = () =>{
  return(
    <div className="mt-2">
      <h1>Ejercicios</h1>
      <hr/>
      <h5>1. Calcular el area de un cuadrado:</h5>
      <br />
      <AreaCuadrado/>
      <hr />
      <h5>2. Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo </h5>
      <br />
      <Arreglos/>
      <hr />
      <h5>3. Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5. <br />
          const arreglo = [5,10,15,20,25,30,35,40,45,50] <br />
          Recomendación emplear función map.
      </h5>
      <br />
      <DivisionArreglo/>
      <hr />
      <h5>4. Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones. </h5>
      <br />
      <Promedio/>
      <hr />
      <h5>5. Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)</h5>
      <br />
      <Contador/>
      <hr />
    </div>
  )
}

export default App;