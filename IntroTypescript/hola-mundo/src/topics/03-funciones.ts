//  function sumarNumerosSinDefinirNada() {

// }

// function sumarNumerosSinTipos(a, b) {

// } 

function sumarNumeros(a: number, b: number) {
    return a+b;
}

const resultado: number = sumarNumeros(1,3);

console.log(resultado);
console.log({resultado});

const sumarNumeroFlecha = (a: number, b: number): string => {
    //return (a+b).toString(); 
    return `La suma de ${a} y ${b} es ${a+b}. Te ha gustado?`;
}

const resultado2 = sumarNumeroFlecha(4,5);

console.log({resultado2});

function multiplicar(primerNumero: number, segundoNumero?: number, base:number = 2) {
    return primerNumero*base;
}

const resultadoMulti: number = multiplicar(5);

console.log(resultadoMulti);

export {};