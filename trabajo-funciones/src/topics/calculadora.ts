function sumar(a: number, b: number = a): number {
    return a+b;
}

function restar(a: number, b: number = a): number {
    return a-b;
}

function multiplicar(a: number, b: number = a): number {
    return a*b;
}

function dividir(a: number, b: number = a): number {
    if(b=0) {
        console.log('No se puede dividir entre cero');
        return 0;
    }
    return a/b;
}

console.log(sumar(5,2))

export {};