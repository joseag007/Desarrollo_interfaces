interface ReproductorAudio {
    volumenAudio : number;
    DuracionCancion: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductorAudio: ReproductorAudio = {
    volumenAudio: 100,
    DuracionCancion: 120,
    cancion: "Song Two",
    detalles: {
        autor: "Oasis",
        anio: 2000
    }
}

const {cancion} = reproductorAudio;
console.log(cancion);

const {autor} = reproductorAudio.detalles;
console.log(cancion);

const {cancion: cancion2} = reproductorAudio;
console.log({cancion2});

export {};