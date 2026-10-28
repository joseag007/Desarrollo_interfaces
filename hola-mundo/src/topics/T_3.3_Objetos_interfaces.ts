interface Alumno {
    nombre: string;                       // Obligatorio
    apellidos: string;                    // Obligatorio
    nacionalidad: string;                 // Obligatorio
    anioNacimiento: number;               // Obligatorio
    telefono: string;                     // Obligatorio
    correoElectronico: string;            // Obligatorio
    modulosMatriculados: string[];        // Obligatorio
    convalidaIPE: boolean;                // Obligatorio
    nivelPadel?: string;                  // Opcional
    centroProcedencia?: string;           // Opcional
}

const alumno1: Alumno = {
    nombre: "Carlos",
    apellidos: "García Pérez",
    nacionalidad: "Española",
    anioNacimiento: 2004,
    telefono: "600123456",
    correoElectronico: "carlos@email.com",
    modulosMatriculados: ["Sistemas Informáticos", "Bases de Datos"],
    convalidaIPE: false,
    nivelPadel: "Intermedio"
}

const alumno2: Alumno = {
    nombre: "Lucía",
    apellidos: "Fernández Gómez",
    nacionalidad: "Argentina",
    anioNacimiento: 2003,
    telefono: "699876543",
    correoElectronico: "lucia@email.com",
    modulosMatriculados: ["Entornos de Desarrollo", "Lenguajes de Marcas"],
    convalidaIPE: true
}

alumno1.centroProcedencia = "IES Tecnológico";

console.table([alumno1, alumno2]);

export {};