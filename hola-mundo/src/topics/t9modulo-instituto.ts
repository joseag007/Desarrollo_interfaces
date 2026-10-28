export interface Direccion {
    calle: string;
    cp: string;
    localidad: string;
    provincia: string;
}

export interface Ensenanza {
    nivel: string;
    obligatoria: boolean;
    familiaProfesional: string;
    modalidad: string;
}

export interface Alumno {
    nombre: string;
    edad: number;
    sexo: string;
    ensenanza: Ensenanza;
    direccion: Direccion;
}

export interface Instituto {
    nombre: string;
    director: string;
    telefono: string;
    correo: string;
    direccion: Direccion;
    alumnos: Alumno[];
}

// Matricular alumno
export function matricularAlumno(
    instituto: Instituto,
    alumno: Alumno,
    ensenanza: Ensenanza
): void {
    alumno.ensenanza = ensenanza;
    instituto.alumnos.push(alumno);
}

// Mostrar alumnos
export function mostrarAlumnos({ alumnos }: Instituto): void {
    alumnos.forEach(({ nombre, ensenanza, direccion }) => {
        const { nivel } = ensenanza;
        const { localidad } = direccion;

        console.log('Nombre:', nombre);
        console.log('Nivel:', nivel);
        console.log('Localidad:', localidad);
    });
}

// Mostrar dirección del instituto
export function mostrarDireccion({ direccion }: Instituto): void {
    const { calle, cp, localidad, provincia } = direccion;

    console.log('Dirección:', calle, cp, localidad, provincia);
}

export {};