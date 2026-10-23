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
    apellidos: "Ruíz fernández",
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
    expedientes: [{
        curso: "1º DAW",
        notaMedia: 3.69
    }]
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

// Accedemos al segundo alumno mediante el índice 1
const { nombre, apellidos } = listadoAlumnos.listaAlumnos[1];
console.log("Nombre: ", nombre, ". Apellidos", apellidos);

const { modulos } = listadoAlumnos.listaAlumnos[1].modulos[0];
console.log("Modulos: ", modulos);

export {};