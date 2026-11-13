function decoradorClase(
    constructor: any 
    
){
    return class extends constructor {
        nuevaPropiedad= 'Nueva propiedad';
        hola = 'Adiós';
    }
}

@decoradorClase
export class SuperClase {
    public miPropiedad: string = 'Patata';

    print(){
        console.log('Hola mundo|||');
    }
}
console.log(SuperClase);

const superClase = new SuperClase();
console.log(superClase);

export{};