function sumar(a: number, b: number = a): number { // suma a a el valor de b 
// la asignamos el valor de a a b para que si no se introduce un segundo valor se opere por si mismo
    return a+b;
}

function restar(a: number, b: number = a): number { // resta a a el valor de b
// la asignamos el valor de a a b para que si no se introduce un segundo valor se opere por si mismo
    return a-b;
}

function multiplicar(a: number, b: number = a): number { // multiplica a a el valor de b
// la asignamos el valor de a a b para que si no se introduce un segundo valor se opere por si mismo
    return a*b;
}

function dividir(a: number, b: number = a): number { // divide a a el valor de b
// la asignamos el valor de a a b para que si no se introduce un segundo valor se opere por si mismo
    if(b===0) {
        console.log('No se puede dividir entre cero');
        return 0;
    }
    return a/b;
}

console.log(sumar(5,2))
console.log(sumar(9))
console.log(restar(6,8))
console.log(restar(4))
console.log(multiplicar(7,3))
console.log(multiplicar(5))
console.log(dividir(10,3))
console.log(dividir(4))

export {};