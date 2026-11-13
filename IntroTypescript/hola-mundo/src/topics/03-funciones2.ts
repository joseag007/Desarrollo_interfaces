interface Personaje {
    nombre: string;
    pv: number;
    muestraPV: () => void;
}

const curarPersonaje = (personaje: Personaje, cantidad: number) => {
    personaje.pv += cantidad;
}

const saiyan: Personaje = {
    nombre: 'Goku',
    pv: 500,
    muestraPV() {
        console.log(`Puntos de vida de ${this.nombre}: ${this.pv}`)
    }
}

saiyan.muestraPV()
curarPersonaje(saiyan, 300)
saiyan.muestraPV()
curarPersonaje(saiyan, 200)
saiyan.muestraPV()

export {};