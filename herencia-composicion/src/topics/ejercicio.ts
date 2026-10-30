export class Persona{
    constructor(
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public direccion: string
    ) {}
}

export class Jugador extends Persona {
    constructor(
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public direccion: string,
        public categoria: 1 | 2 | 3 | 4 | 5 | 6
    ) {super(nombre, apellidos, genero, telefono, direccion)
        this.categoria = categoria;
    }
}

export class Arbitro extends Persona {
    constructor(
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public direccion: string,
        public numeroColegiado: number
    ) {super(nombre, apellidos, genero, telefono, direccion)
        this.numeroColegiado = numeroColegiado;
    }
}

export class Equipo{
    constructor(
        public jugador1: Jugador,
        public jugador2: Jugador
    ) {}
}

// NUEVA CLASE
export class SetPartido {
    constructor(
        public juegosEquipo1: number,
        public juegosEquipo2: number
    ) {}
}

export class Partido{
    constructor (
        public equipo1: Equipo,
        public equipo2: Equipo,
        public fecha: string,
        public hora: string,
        public recinto: string,
        public pista: string,
        public arbitro: Arbitro,
        public sets: SetPartido[]
    ) {}

    // NUEVO MÉTODO
    resultadoPartido(): string {
        let setsEquipo1 = 0;
        let setsEquipo2 = 0;

        for (const set of this.sets) {
            if (set.juegosEquipo1 > set.juegosEquipo2) {
                setsEquipo1++;
            } else if (set.juegosEquipo2 > set.juegosEquipo1) {
                setsEquipo2++;
            }
        }

        if (setsEquipo1 > setsEquipo2) {
            return `El equipo ${this.equipo1.jugador1.apellidos}-${this.equipo1.jugador2.apellidos} ha ganado al equipo ${this.equipo2.jugador1.apellidos}-${this.equipo2.jugador2.apellidos} por ${setsEquipo1} sets a ${setsEquipo2}.`;
        } else if (setsEquipo2 > setsEquipo1) {
            return `El equipo ${this.equipo2.jugador1.apellidos}-${this.equipo2.jugador2.apellidos} ha ganado al equipo ${this.equipo1.jugador1.apellidos}-${this.equipo1.jugador2.apellidos} por ${setsEquipo2} sets a ${setsEquipo1}.`;
        } else {
            return `El partido ha terminado empatado a ${setsEquipo1} sets.`;
        }
    }
}

const jugador1 = new Jugador("Juan", "Pérez Romero", "Masculino", "653748527", "Calle alguna, 29310, Torremolinos, Málaga", 6);
const jugador2 = new Jugador("Lucía", "García ", "Femenino", "672819384", "Calle ninguna, 29130, Alhaurín de la Torre, Málaga", 1);
const equipo1 = new Equipo(jugador1, jugador2);

const jugador3 = new Jugador("María", "Pérez Romero", "Femenino", "653478527", "Calle alguna, 29310, Torremolinos, Málaga", 5);
const jugador4 = new Jugador("Pedro", "García ", "Masculino", "672869354", "Calle ninguna, 29130, Alhaurín de la Torre, Málaga", 2);
const equipo2 = new Equipo(jugador3, jugador4);

const jugador5 = new Jugador("Manuel", "Pérez Romero", "Masculino", "653748527", "Calle alguna, 29310, Torremolinos, Málaga", 4);
const jugador6 = new Jugador("Rocío", "García ", "Femenino", "672819384", "Calle ninguna, 29130, Alhaurín de la Torre, Málaga", 3);
const equipo3 = new Equipo(jugador5, jugador6);

const arbitro1 = new Arbitro("Paco", "Ruíz ", "Masculino", "670169354", "Calle ninguna, 29130, Alhaurín de la Torre, Málaga", 37823)
const arbitro2 = new Arbitro("Luisa", "Abril ", "Femenino", "670169354", "Calle ninguna, 29130, Alhaurín de la Torre, Málaga", 26823)

const partido1 = new Partido(equipo1, equipo2, "30/12/26", "12:23", "recinto deportivo de Benalmádena", "pista 4", arbitro1, [new SetPartido(6,8), new SetPartido(3,6)])
const partido2 = new Partido(equipo2, equipo3, "31/12/26", "11:30", "recinto deportivo de Benalmádena", "pista 3", arbitro2, [new SetPartido(5,7), new SetPartido(6,2), new SetPartido(6,4)])
const partido3 = new Partido(equipo1, equipo3, "1/1/27", "18:15", "recinto deportivo de Torremolinos", "pista 5", arbitro2, [new SetPartido(6,8), new SetPartido(5,7)])

let calendario: Partido[] = [partido1, partido2, partido3];

// implementar salida por consola

export {};
