import type {
    Direccion,
    Ensenanza,
    Alumno,
    Instituto
} from './t9modulo-instituto';

import {
    matricularAlumno,
    mostrarAlumnos,
    mostrarDireccion
} from './t9modulo-instituto';

// Direcciones
const direccionInstituto: Direccion = {
    calle: 'Calle Mayor, 10',
    cp: '29001',
    localidad: 'Málaga',
    provincia: 'Málaga'
};

const direccionAlumno1: Direccion = {
    calle: 'Calle Sol, 5',
    cp: '29002',
    localidad: 'Málaga',
    provincia: 'Málaga'
};

const direccionAlumno2: Direccion = {
    calle: 'Calle Luna, 8',
    cp: '29100',
    localidad: 'Alhaurín de la Torre',
    provincia: 'Málaga'
};

// Enseñanzas
const ensenanza1: Ensenanza = {
    nivel: 'ESO',
    obligatoria: true,
    familiaProfesional: '',
    modalidad: 'Mañana'
};

const ensenanza2: Ensenanza = {
    nivel: 'DAM',
    obligatoria: false,
    familiaProfesional: 'Informática y Comunicaciones',
    modalidad: 'Tarde'
};

const ensenanza3: Ensenanza = {
    nivel: 'DAW',
    obligatoria: false,
    familiaProfesional: 'Informática y Comunicaciones',
    modalidad: 'Telemático'
};

// Alumnos
const alumno1: Alumno = {
    nombre: 'Ana',
    edad: 16,
    sexo: 'Mujer',
    ensenanza: ensenanza1,
    direccion: direccionAlumno1
};

const alumno2: Alumno = {
    nombre: 'Carlos',
    edad: 19,
    sexo: 'Hombre',
    ensenanza: ensenanza2,
    direccion: direccionAlumno2
};

// Instituto
const instituto: Instituto = {
    nombre: 'IES Ejemplo',
    director: 'Juan Pérez',
    telefono: '952000000',
    correo: 'instituto@ejemplo.es',
    direccion: direccionInstituto,
    alumnos: []
};

// Matricular alumnos
matricularAlumno(instituto, alumno1, ensenanza1);
matricularAlumno(instituto, alumno2, ensenanza2);

// Mostrar datos
console.log('--- ALUMNOS ---');
mostrarAlumnos(instituto);

console.log('--- DIRECCIÓN DEL INSTITUTO ---');
mostrarDireccion(instituto);

export {};