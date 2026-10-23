interface Alumno {
    nombre: string;
    apellidos: string;
    anioNacimiento: number;
    nacionalidad: string;
    matricula: Matricula
}

interface Matricula {
modulos: string[];
cicloFormativo: string;
centroEducativo: CentroEducativo
}

interface CentroEducativo {
    centro: string;
    localidad: string;
    codigoCentro: number;
    telefono: string
}

const alumno1: Alumno = {
    nombre: "Paco",
    apellidos: "Ruíz fernández",
    anioNacimiento: 2003,
    nacionalidad: "Español",
    matricula: {
        modulos: ["programación", "Sistemas informáticos"],
        cicloFormativo: "1º DAM",
        centroEducativo: {
            centro: "IES playamar",
            localidad: "Málaga",
            codigoCentro: 193,
            telefono: "656 478 291"
        }

    }
}

const alumno2: Alumno = {
    nombre: "Juan",
    apellidos: "Fernández Ruíz",
    anioNacimiento: 2002,
    nacionalidad: "Español",
    matricula: {
        modulos: ["Python", "Desarrollo de interfaces"],
        cicloFormativo: "2º DAM",
        centroEducativo: {
            centro: "IES playamar",
            localidad: "Málaga",
            codigoCentro: 193,
            telefono: "654 094 238"
        }
    }
}

console.table([alumno1, alumno1.matricula, alumno1.matricula.centroEducativo]);

console.table([alumno2, alumno2.matricula, alumno2.matricula.centroEducativo]);

const {nombre, apellidos} = alumno2;
console.log("Alumno: ", nombre, apellidos);

const {cicloFormativo} = alumno2.matricula;
console.log("Ciclo formativo: ", cicloFormativo);
const {centro} = alumno2.matricula.centroEducativo;
console.log("Centro: ", centro);

export {};