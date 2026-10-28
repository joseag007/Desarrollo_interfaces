interface ListadoAlumnos {
    listaAlumnos: Alumno[];
}

interface Alumno {
    nombre: string;
    apellidos: string;
    modulos: string[];
    expedientes: Expediente[];
}

interface Expediente {
    curso: string;
    notaMedia: number;
}

const alumno1: Alumno = {
    nombre: "Paco",
    apellidos: "Fernández Ruíz",
    modulos: ["programación", "Sistemas informáticos"],
    expedientes: [{
        curso: "1º DAM",
        notaMedia: 7.89
    }]
};

const alumno2: Alumno = {
    nombre: "Carlos",
    apellidos: "Ruíz fernández",
    modulos: ["programación", "Sistemas informáticos"],
    expedientes: [
        {
            curso: "1º DAW",
            notaMedia: 3.69
        },
        {
            curso: "2º DAW",
            notaMedia: 7.5
        }
    ]
};

const alumno3: Alumno = {
    nombre: "Juan",
    apellidos: "Ruíz fernández",
    modulos: ["programación", "Sistemas informáticos"],
    expedientes: [{
        curso: "2º DAM",
        notaMedia: 9.99
    }]
};

const listadoAlumnos: ListadoAlumnos = {
    listaAlumnos: [alumno1, alumno2, alumno3]
};



// Nombre y apellidos del segundo alumno
const { nombre, apellidos } = listadoAlumnos.listaAlumnos[1];
console.log("Alumno:", nombre, apellidos);

// Primer módulo profesional del segundo alumno
const { modulos } = listadoAlumnos.listaAlumnos[1];
const [primerModulo] = modulos;
console.log("Primer módulo:", primerModulo);

// Curso y nota media del segundo expediente
const { expedientes } = listadoAlumnos.listaAlumnos[1];
const { curso, notaMedia } = expedientes[1];
console.log("Curso:", curso);
console.log("Nota media:", notaMedia);

export {};
