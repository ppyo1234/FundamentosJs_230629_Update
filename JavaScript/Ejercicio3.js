// Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 05: Repaso de Objetos en Java Script");
//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Computadora Gammer Laptop 17\"";
let Producto_Marca= "ASUS"
let Producto_Modelo= "TUF 17"
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W") 
let Producto_Stock = 15;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias= ["Electrónicos", "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];


// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);
let Producto = 
{
    ID:100,
    Nombre : "Tenis Deportivos", 
    Marca: "Nike",
    Modelo: "Jordan '24", 
    Precio: 3361.25,
    Disponibilidad: false,
    
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode:null,
    Categorias: ["Deportes", "Juvenil"]
}
// Ahora leemos el objeto completo
console.table(Producto)

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{   
    Clave: 316,
    Nombre : "Lentes para Sol", 
    Marca: "Oakley",
    Modelo: "QNTM Kato", 
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "OO9481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRed.png",
    Barcode:  888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}


let Comprador =
{
    ID: 3216,
    Nombre: "Marco",
    Apellidos: "Ramírez Hernández",
    Tipo: "Frecuente",
    Correo: "mar.ram@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido= {
    ID:5816,
    Producto_ID: 316, 
    Comprador_ID: 3216,
    Cantidad: 2, 
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

//En base a los 3 objetos necesitamos calcular el producto el costo y si le alcanza con su saldo a favor

//En base de a los 3 objetos necesitamos calcular el costo de la compra y si nos alcanza a favor del cliente
let{Precio: Producto_Precio2}=Producto2; 
let{Cantidad: Pedido_Cantidad}= Pedido;
let{SaldoActual: Cliente_SaldoActual}= Comprador;
let Costo_Compra= Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${(Costo_Compra)}`)

if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")



//console.warn("Práctica 05: Repaso de Objetos en JavaScript");
//Actualizar el valor de los objetos
console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);

console.log(`El objeto tiene los siguientes valores:`)
console.log(JSON.stringify(Producto2,null,2));
//convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor sino el tipo de dato de un objeto en JS?



console.log(`-----------------------------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2,null,2)); //Disponibilidad Boolean
Producto2.Disponibilidad="Sí";
let nuevoTipoDisponible= typeof(Producto2.Disponibilidad)
console.log(Producto2);

console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponible}`)//AGREGAR NUEVAS PROPIEDADES AL OBJETO
console.log("%c5.- Agregación de propiedades al Objeto", style_console);

console.log ("Objeto antes de ser modificado");
console.log (JSON.stringify(Comprador));

//agregando propiedades 
Comprador[`Direccion`] = "Av. 05 de Mayo #25, Interior 4A, Xicotepec de Juarez, Puebla , México";

Comprador [`Tipo`] = "Premium";
Comprador [`Estatus`] = "Inactivo";
Comprador [`TotalCompra`] = 2525.50;
console.log("Objeto despues de ser modificado")
console.table(Comprador)


// Eliminar propiedades de un objeto existente
console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)
delete Pedido.TipoPago // elimina algo dentro del objeto
console.log("Despues de la modificación...")
console.table(Pedido)


console.log("%c7.- métodos para controlar la mutabilidad de los objetos m Congelación (FREEZE)", style_console);
//Si deseamos 
console.log("La estrucutura actual del objeto comprador es:")
console.table(Comprador)
Object.freeze(Comprador)
// imtentamos agregar , eliminar o modificar los valores de su propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
delete Comprador.Tipo
Comprador.Direccion = "Calle 16 de Septiembre #102m Col. Manantiales,m Huachinango , Puebla , México" 
console.log(`Verificamos si se relaizaron los cambios ene le objeto comprador`)
console.table(Comprador);

console.log("%c8.- Metodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);

console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)

// Sin embargo , en le caso que desamos poder podificar los valores del las propiedades del objeto, pero no su estructura , usaremos SEAL
Object.seal(Pedido)
// intentamos modificar su estrucutra 
Pedido[`FechaPedido`] = "25/09/24 15:00:52"
delete Pedido[`Cantidad`]

console.log("Verificamos si se realizaron los cambios en el objeto PEDIDO")
console.table(Pedido) 

// Ahora intentamos modificiar el valor de las propiedades 
Pedido.Cantidad= 5;
console.log("Verificamos si se realizaron los cambios en el objeto PEDIDO")
console.table(Pedido) 


// Desestrucutración sw 2 o mas objetos 
console.log("%c9.- Desestrucuturación de 2 o más objetos", style_console);
let {Precio: productoPrecio, SKU: productoSKU,Marca: productoMarca} = Producto
let {Correo : clienteCorreo, PaisOrigen : clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador
Comprador
// lado derecho nuevo nombre y lado izquierdo nombre que se va a cambiar 

// transformar valores cuantitativos en cualitativos 
if (productoPrecio >2000){
    productoPrecio = "caro"
}else{
    productoPrecio= "Barato"
}

if(clienteSaldo > 0){
    clienteSaldo = "A  favor "

}else if (clienteSaldo<0){
    clienteSaldo = "En contra"
}else{
    clienteSaldo = "Sin deuda"
}
// transformar valores cualitativos en cualitativos 
let clienteNivel;

if(clienteTipo == "Premium"){
    clienteNivel = 1
}
if(clienteNivel == "Freemium"){
    clienteTipo = 2
}
if(clienteNivel =="No identificado"){
    clienteNivel= 3
}

// clasificamos al cliente por su pais de origen 
if (clientePais == "México"){
    clientePais = "Nacional"
}else{
    clientePais = "Extranjero "
}

// OLE - Object Literal Ennhacemet

let datosClientesPromociones  = {clienteCorreo,  clientePais,clienteNivel,clienteSaldo, productoMarca, productoPrecio}

console.log ("Los datos del cliente y sus habitos de compra son :")
console.table(datosClientesPromociones)
// Operaciones sobre Objetos 
// Unión de Objetos 
console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)", style_console);

console.log ("Imprimimos la estrucutra y valores del objeto PRODUCTO");
console.table(Producto);

console.log("Imprimimos la estructura y valores del objeto PEDIDO")
console.table(Pedido);

//Suponiendo que los usuariols ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos 
const VENTA = Object.assign(Producto,Pedido);


/// assign puede perder infromación asi que hay que teber cuidado
console.log("Imprimimos ya las dos tablas juntas por el metodo assign")
console.table(VENTA);
// modificar valores no es mutación 

let Producto3 = {...Producto}
const Venta =Object.assign(Producto3,Pedido);
console.log("Checamos")
console.table(Venta)



console.log("%c11.- Unión de Objetos usando el SPREAD OPERATOR (...)", style_console);

Producto.ID=100

let Venta2 = 
{
    Producto: {...Producto},
    Comprador: {...Comprador},
    Pedido: {...Pedido}
}

console.log("Fusionamos los 3 objetos en uno nuevo , sin perdida de información")
console.log(Venta2);
console.table(Venta2);

console.log("%c12.- Mutabilidad POST union de Objetos", style_console);


// vamos a verificar el estatus de mutabilidad de los objetos
console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Pedido)}`);
console.log(`Esta el objeto de Pedido Sellado ? : ${Object.isSealed(Pedido)}`);


console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Comprador)}`);
console.log(`Esta el objeto de Pedido Sellado ? : ${Object.isSealed(Comprador)}`);


console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Producto)}`);
console.log(`Esta el objeto de Pedido Sellado ? : ${Object.isSealed(Producto)}`);

// Modificamos la estructura de producto , agregando una nueva propiedad 
Producto[`isLegacy`] = false;
console.log(Producto)
console.table(Venta2)