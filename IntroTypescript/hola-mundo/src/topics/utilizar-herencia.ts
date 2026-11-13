export class Persona{
    constructor(
        public nombre: string,
        public apellidos: string,
        private edad: number = 0,
        public localidad: string,
        public sexo?: string
    ) {}
}

export class Profesor extends Persona {
    constructor(
        public centro: string,
        public especialidad: string,
        public departamento: string
    ) {}
}