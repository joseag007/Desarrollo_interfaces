export class PersonaSmart{
    constructor(
        public nombre: string,
        public apellidos: string,
        private edad: number = 0,
        public localidad: string,
        public sexo?: string
    ) {}
}