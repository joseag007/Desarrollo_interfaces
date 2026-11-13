
export class Persona {
    constructor(
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public direccion?: string
    ) {}
}

export class Jugador extends Persona {
    constructor(
        nombre: string,
        apellidos: string,
        genero: string,
        telefono: string,
        public categoria: 1 | 2 | 3 | 4 | 5 | 6,
        direccion?: string
    ) {
        super(nombre, apellidos, genero, telefono, direccion);
    }
}

export class Arbitro extends Persona {
    constructor(
        nombre: string,
        apellidos: string,
        genero: string,
        telefono: string,
        public numeroColegiado: number,
        direccion?: string
    ) {
        super(nombre, apellidos, genero, telefono, direccion);
    }
}

export class Equipo {
    constructor(
        public jugador1?: Jugador,
        public jugador2?: Jugador
    ) {}
}

export class SetPartido {
    constructor(
        public juegosEquipo1: number,
        public juegosEquipo2: number
    ) {}
}

export class Partido {
    constructor(
        public equipo1: Equipo,
        public equipo2: Equipo | undefined,
        public fecha: string,
        public hora: string,
        public recinto: string,
        public pista: string,
        public arbitro: Arbitro | undefined,
        public sets: SetPartido[]
    ) {}

    resultadoPartido(): string {
        let setsEquipo1 = 0;
        let setsEquipo2 = 0;

        for (let set of this.sets) {
            if (set.juegosEquipo1 > set.juegosEquipo2) {
                setsEquipo1++;
            } else if (set.juegosEquipo2 > set.juegosEquipo1) {
                setsEquipo2++;
            }
        }

        if (setsEquipo1 > setsEquipo2) {
            return "Ha ganado el equipo 1 por " + setsEquipo1 + " sets a " + setsEquipo2;
        } else if (setsEquipo2 > setsEquipo1) {
            return "Ha ganado el equipo 2 por " + setsEquipo2 + " sets a " + setsEquipo1;
        } else {
            return "El partido ha terminado empatado a " + setsEquipo1 + " sets";
        }
    }
}


// JUGADORES

const jugador1 = new Jugador(
    "Juan", "Pérez Romero", "Masculino", "653748527", 6,
    "Calle alguna, 29310, Torremolinos, Málaga"
);

const jugador2 = new Jugador(
    "Lucía", "García", "Femenino", "672819384", 1
);

const jugador3 = new Jugador(
    "Pedro", "López", "Masculino", "654123789", 2
);

const jugador4 = new Jugador(
    "Ana", "Martínez", "Femenino", "654987321", 3
);

const jugador5 = new Jugador(
    "Manuel", "Pérez Romero", "Masculino", "653748527", 4,
    "Calle alguna, 29310, Torremolinos, Málaga"
);

const jugador6 = new Jugador(
    "Rocío", "García", "Femenino", "672819384", 3
);


// EQUIPOS

const equipo1 = new Equipo(jugador1, jugador2);
const equipo2 = new Equipo(jugador3, jugador4);
const equipo3 = new Equipo(jugador5, jugador6);


// ÁRBITROS

const arbitro1 = new Arbitro(
    "Paco", "Ruíz", "Masculino", "670169354", 37823,
    "Calle ninguna, 29130, Alhaurín de la Torre, Málaga"
);

const arbitro2 = new Arbitro(
    "Luisa", "Abril", "Femenino", "670169354", 26823
);


// PARTIDOS

const partido1 = new Partido(
    equipo1,
    equipo2,
    "30/12/26",
    "12:23",
    "Recinto deportivo de Benalmádena",
    "Pista 4",
    arbitro1,
    [
        new SetPartido(6, 8),
        new SetPartido(3, 6)
    ]
);

const partido2 = new Partido(
    equipo2,
    equipo3,
    "31/12/26",
    "11:30",
    "Recinto deportivo de Benalmádena",
    "Pista 3",
    arbitro2,
    [
        new SetPartido(5, 7),
        new SetPartido(6, 2),
        new SetPartido(6, 4)
    ]
);

const partido3 = new Partido(
    equipo1,
    equipo3,
    "1/1/27",
    "18:15",
    "Recinto deportivo de Torremolinos",
    "Pista 5",
    arbitro2,
    [
        new SetPartido(6, 8),
        new SetPartido(5, 7)
    ]
);


// PARTIDO SIN RIVAL

const partido4 = new Partido(
    equipo1,
    undefined,
    "2/1/27",
    "12:00",
    "Recinto deportivo de Benalmádena",
    "Pista 2",
    undefined,
    []
);


// CALENDARIO

let calendario: Partido[] = [
    partido1,
    partido2,
    partido3,
    partido4
];


// IMPRIMIR CALENDARIO

function imprimirCalendario(): void {

    console.log("CALENDARIO DE PARTIDOS");

    for (let partido of calendario) {

        console.log("----------------------------");

        // EMPAREJAMIENTOS

        console.log("Equipo 1:");
        console.log(partido.equipo1.jugador1?.nombre, partido.equipo1.jugador1?.apellidos);
        console.log(partido.equipo1.jugador2?.nombre, partido.equipo1.jugador2?.apellidos);

        console.log("Equipo 2:");
        console.log(partido.equipo2?.jugador1?.nombre, partido.equipo2?.jugador1?.apellidos);
        console.log(partido.equipo2?.jugador2?.nombre, partido.equipo2?.jugador2?.apellidos);

        // FECHA

        console.log("Fecha:", partido.fecha);

        // ÁRBITRO Y DIRECCIÓN

        console.log("Árbitro:", partido.arbitro?.nombre, partido.arbitro?.apellidos);
        console.log("Dirección:", partido.arbitro?.direccion);
    }
}

imprimirCalendario();

export {};
