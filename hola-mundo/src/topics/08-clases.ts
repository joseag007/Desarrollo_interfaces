export class Persona{
    public nombre: string;
    public direccion: string;
    public altura?: number;
    private edad: number;
    constructor() {
    this.nombre = 'Antonio';
    this.direccion = 'Torremolinos';
    this.edad = 49;
    };
}

const profe = new Persona();
console.log(profe);
console.log(profe.edad);

export class PersonaCutre{
    public nombre: string;
    public direccion: string;
    public altura?: number;
    private edad: number;
    constructor(nombre: string, direccion: string, edad: number = 0, altura?: number) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.edad = edad;
    this.altura = altura;
    };
}

const gohan = new PersonaCutre('Gohan', 'La Tierra', 6)

export class PersonaSmart{
    constructor(
        public nombre: string,
        public direccion: string,
        private edad: number = 0,
        public altura?: number
    ) {}
}

const vegetta = new PersonaCutre('Gohan', 'La Tierra', 6)

export {};