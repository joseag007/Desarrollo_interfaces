interface Producto {
	descripcion: string;
	precio: number;
}

const telefono: Producto = {
	descripcion: 'iPhone 15 Pro',
	precio: 1000
}

const tablet: Producto = {
	descripcion: 'iPad Air 3',
	precio: 500
}

interface CalculaImpuestoOpciones {
	impuesto: number;
	productos: Producto[];
}

function calculaImpuesto (opciones: CalculaImpuestoOpciones): number[] {
	let total = 0;
	opciones.productos.forEach(producto => {
		total += producto.precio;
	});
	return [total, total * opciones.impuesto];
}

const carritoCompra = [telefono, tablet];
const impuesto = 0.21;

const resultado = calculaImpuesto({
	productos: carritoCompra,
	impuesto: impuesto
	// también podemos poner por la línea anterior, ya que se llaman iguales:
	// impuesto
})

console.log('Total',resultado[0]);
console.log('Impuesto',resultado[1]);

// Desestructuración al recibir parámetros en una función
function mostrarProducto({ descripcion, precio }: Producto): void {
	console.log(descripcion, precio);
}
mostrarProducto(telefono);

// Desestructuración al crear una variable a partir de una función
const [total, totalImpuesto] = resultado;

console.log('Total', total);
console.log('Impuesto', totalImpuesto);

// Desestructuración al acceder a un dato dentro de una estructura de control
carritoCompra.forEach(({ precio }) => {
	console.log('Precio:', precio);
});

export {};
