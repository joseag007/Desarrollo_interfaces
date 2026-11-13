export interface Pasajero {
    nombre:string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Antonio'
}

const pasajero2: Pasajero = {
    nombre: 'Pilar',
hijos: ['María', 'Elena', 'Antonio']
}

const imprimirHijos = (pasajero: Pasajero) => {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(pasajero.nombre, cuantosHijos);
}

const numeroHijos = (pasajero: Pasajero) => {
    const cuantosHijos = pasajero.hijos!.length || 0;
    return cuantosHijos;
}

imprimirHijos(pasajero1);
imprimirHijos(pasajero2);

console.log(numeroHijos(pasajero1));
console.log(numeroHijos(pasajero2));

export{};