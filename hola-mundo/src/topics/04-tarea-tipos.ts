/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    showAddress(): string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais; // mostrara solamente el nombre del superheroe, la ciudad y el país
    }
}


const address = superHeroe.showAddress(); // se crea una variable y se le asigna el nombre, ciudad y país
console.log( address );




export {};