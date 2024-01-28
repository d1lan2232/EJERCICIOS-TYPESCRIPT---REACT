import React from "react";

interface Alumno {
    name: string;
    edad: number;
    calificaciones: number[];
}

const alumnos: Alumno[] = [
    {
        name: "Viviana",
        edad: 19,
        calificaciones: [10],
    },
    {
        name: "Wendy",
        edad: 20,
        calificaciones: [8],
    },
    {
        name: "Gerson",
        edad: 18,
        calificaciones: [9],
    }
];

export const Promedio = () => {
    let sumaCalificaciones = 0;
    let totalAlumnos = 0;

    for (const alumno of alumnos) {
        const promedioCalificaciones = alumno.calificaciones.reduce((a) => a) / alumno.calificaciones.length;
        sumaCalificaciones += promedioCalificaciones;
        totalAlumnos++;
    }

    return (
        <div style={{textAlign:'center'}}>
            <p>El promedio de las calificaciones es: {sumaCalificaciones / totalAlumnos}</p> 
        </div>
    );
}



