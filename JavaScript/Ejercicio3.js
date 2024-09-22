// objetos 

const producto = {
    nombre : "Tablet",
    marca :"mac",
    modelo : "ipad",
    Costo_Compra : "11500.25",
    Disponible : true ,
    sku : Symbol("554684831"),
    colores: ["Blanco","Negro","Rosa","Azul","Amarillo"]
}

// imprimir el objeto 
console.warn(`--OBJETOS ---`)
console.log(producto);

// Los objetos tambien pueden representarse en formato de tabla utilizando la función de console.table
console.table(producto)


// Acceder a las propiedades de un objeto 
console.warn("Leyendo las propiedades de un objeto y sus tipos de dato\n ")
console.log(`Nombre del producto: ${producto.nombre} que es del tipo: ${typeof(producto.tipo)}\n`)

console.log(`Nombre del producto: ${producto.marca} que es del tipo: ${typeof(producto.marca)}\n`)
console.log(`Nombre del producto: ${producto.modelo} que es del tipo: ${typeof(producto.modelo)}\n`)
console.log(`Nombre del producto: ${producto.Costo_Compra} que es del tipo: ${typeof(producto.Costo_Compra)}\n`)
console.log(`Nombre del producto: ${producto.Disponible} que es del tipo: ${typeof(producto.Disponible)}\n`)
console.log(`Nombre del producto: ${producto.Symbol} que es del tipo: ${typeof(producto.Symbol)}\n`)
console.log(`Nombre del producto: ${producto.colores} que es del tipo: ${typeof(producto.colores)}\n`)