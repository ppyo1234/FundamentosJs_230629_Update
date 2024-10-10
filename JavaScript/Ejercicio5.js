const bg =
  "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(260,129,12,1) 33%, rgba(255,19,260,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 07: Arreglos en Java Script");

console.log("%c1.- Condicionales Si/Entoces ... (IF)", style_console);

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`);

//Y si la necesitamos en formato local(?)

const fechaLocalMX = fechaActual.toLocaleString("es-MX", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

console.log(`en formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con buenos días

if (fechaActual.getHours() < 12)
  console.log(`Buenos días, hoy es ${fechaLocalMX}`);

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if (fechaActual.getMonth() <= 6)
  console.log(`Estas en la primera mitad del año`);
else console.log(`Estas en la segunda mitad del año.`);

//que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if (fechaActual >= inicioPrimavera || fechaActual < inicioVerano) {
  console.log("Estamos en PRIMAVERA...");
  console.log("Inicia la floración de michas plantas...");
  console.log("Los días son más largos y las noches mas cortas ...");
  console.log("Muchos animales despiertan de la hibernación...");
  estacion = "Primavera";
  horarioVerano = true;
  
}else if(fechaActual>= inicioVerano && fechaActual<inicioOtonio){
    console.log("Estasmos en verano")
    console.log("En esta temporada los abundan los dias Soleados y Calurosos...");
    console.log("En esta temporada el indicé de turismo vacacional sube...");
    console.log("Mucha gente busca realizar actividades al aire...");
    estacion = "Verano";
    horarioVerano = true;



} else if (fechaActual >= inicioOtonio && fechaActual<inicioInvierno){
    console.log("Estamos en OTOÑO...");
    console.log("Los árboles suelen cambiar de follaje");
    console.log("Se registran temperaturas más templadas");
    console.log("Los animales comienza con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.");
    estacion ="Verano"
    horarioVerano =true;
}else{
    console.log("Estamos en INVIERNO...");
    console.log("En esta temporada los días son más cortos y las noches mas largas...");
    console.log("En algunas regiones suele nevar...");
    console.log("Dado las bajas temperaturas, se recomienda abrigarse");
    estacion ="Invierno"
    horarioVerano =false;

}

console.log("%c2.-Operador Ternario (Validación?cumple:no_cumple)",style_console);

// En java script exista una operacion simplicada que valida si una condición se cumple o no , y que hacer cada caso

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad >=18 ?"Eres mayor de edad. ":"No eres mayor de edad."

console.log ("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada país 
//por cuestiones legales , por lo que debemos considerar un segunod parámetro en la evaluación

evaluarMayoriaEdad = (edad,pais) =>
    (edad >= 18 && pais==="MX") ? `En ${pais} eres mayor de edad `: `En ${pais} NO eres mayor de edad`;

console.log("Evaluando la mayoria de edad de una persona en México...");
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...");
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.-Switch - CASE (Elección por valor definido)",style_console);

// calculando tu generación en base a tu edad

let asignaGeneracion = (anioNacimiento)=>{
    switch(true)
    {
        case(anioNacimiento<1968): // Baby Boomers 
        return "Baby Boomers";
        case (anioNacimiento>1968 && anioNacimiento<=1980):
            return "Generación X";
        case (anioNacimiento>1980 && anioNacimiento<=1994):
             return "Milenials";
        case (anioNacimiento>1994 && anioNacimiento<=2010):
             return "Centenials";
        case (anioNacimiento>2010):
             return "Krystal";
    }
}


console.log (`Dado que naci en el año 2005 soy de la generación: ${asignaGeneracion(2005)} `)

console.log("%c4.-Manejo de Excepciones (TRY / CATCH)",style_console);

//En algunas ocaciones existiran errores que no son culpa del programa , si no del usuario , la red , el so o incluso de un middleware , pero que si duda debemos controlar para evitar las fallas de ejecución ,

console.log ("Intentamos dividir : 0/10, el resultado es :")

try{ //intenta
    let resul = 0/10 //dividir un entero entre 0
    console.log(resul);
}
catch(error)
{
  console.log("Ocurrio un error: "+error.message);
}


console.log("Intentamos dividir : 10/0, el resultado es: ")
try{
    let result= 10/0;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir : a/0, el resultado es: ")
try{ //intentamos
    let result= "a"/0; //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("Intentamos dividir : la variable a/0, el resultado es: ")
try{ //intentamos
    let result= a/0; //dividir una variable no definida 
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir : el valor de la variable x/ entre el valor de la variable y, el resultado es:")
try{ //intentamos
    let x=8, y=2, result=x/y; //dividir una variable no definida 
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("%c5.-Control de Ciclos (BREAK / CONTINUE)",style_console);

// En alguna ocaciones sera importante detener un ciclo de manera abruptam para controlar casos especiales en un ciclo ...

console.log("Vamos a contar del uno al 10")
for(let num=1; num<11; num++){
  console.log(num);
}

console.log("Ahora necesitamos que si llegas ak 7 pares de contar ...")
console.log("suponinedo que solo por hoy es de mala suerte")

for(num=1; num<= 10; num++){
  if (num == 7){
    break;
  }else{
    console.log(num)
  }
}

console.log("Ahora necesitamos que si llegas al 7 te saltes ese numero y continues...")

for(num=1; num<= 10; num++){
  if (num == 7){
    continue; // este lo que hace es saltar lo que esta dentro del if osea que no muestra en este caso el numero 
  }else{
    console.log(num)
  }
}
console.log("%c6.- Ciclo Iterativo - (FOR))", style_console);

//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana son en ordenes ascendentes son: ")
let dias= ["Domingo","Lunes","Martes","Miércoles", "Jueves", "viernes","Sábado"]

for(let i=0; i<dias.length; i++){
    console.log(dias[i])
}
console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"]

for(let i=11; i>=0; i--){
    console.log(meses[i]);
}

console.log("%c7.-Ciclo Condicionales - (WHILE)",style_console);

let finDeSemana= false;
let j=0;
let mensaje= " ";

while(j<dias.length){    
    //let diaHabil= dias[i];
        switch(j) //Usamos "j" para que coincide con los casos
        {
            case 0:
                finDeSemana=true
                mensaje="Mormingooooo... ZzzzZZzzz"
                break;
            case 1:
                finDeSemana=false;
                mensaje="San Lunes a chambiar..."
                break;
            case 2:
                finDeSemana=false
                mensaje="Martes ni te cases, ni te embarques"
                break;
            case 3:
                finDeSemana=false
                mensaje="Ombligo de la semana, sigues chambeando..."
                break;
            case 4:
                finDeSemana=false;
                mensaje="Jueves de racismo..."
                break;
            case 5:
                finDeSemana=false
                mensaje="VIEeeEEEEeeeernes, disfruta el día"
                break;
            case 6:
                finDeSemana=true
                mensaje="Sábado, diviértete"
                break;
        }

    if(!finDeSemana){
        console.log(`Día: ${j} ${dias[j]}`)
        console.log(`Mensaje del día ${mensaje}`)
    }
    j++;
}



console.log("%c8.-Ciclo Condicionales, que se ejecuta al menos una vez - (DO WHILE)",style_console);

// Simulamos una lista de episodios de una temporada
let episodios =[
  "Episodio 1 : ",
  "Episodio 2 : ",
  "Episodio 3 : ",
  "Episodio 4 : ",
  "Episodio 5 : "
]

let indice  = 0;
let continuarViendo = true; // Esta variable simula la decisiónn del usuario de continuar viendo 

 

do{
  console.log (`Reproduciendo ${episodios[indice]}`)

  indice++

  //Simulamos la repreoducción del episodio
  if(indice < episodios.length){
    continuarViendo = confirm("¿Deseas continuar con el siguiente episodio ?")
  }else{
    continuarViendo = false; // Cuando se acaba la lista de episodios 
  }
} while(continuarViendo && indice < episodios.length); // primero evalua y luego ejecuta

console.log("Fin de la reproducción.");


// Ciclo para recorrer objetos iterables como mapas , cadenas y conjuntos de datos.
console.log("%c9.-Ciclo para recorrer elementos finitos - (FOR ... OF)",style_console);



let seriesTrending = [
    {nombre:"Stranger Things", temporada: 2,totalViewers: "1.5M",totalReprods: "10.5M"},
    {nombre:"Propuesta Laboral", temporada: 1,totalViewers: "4.5M",totalReprods: "14.5M"},
    {nombre:"Betty la Fea", temporada: 2,totalViewers: "8.5M",totalReprods: "18.5M"},
    {nombre:"Lazy Town", temporada: 5,totalViewers: "14.5M",totalReprods: "20.5M"},
    {nombre:"La Casa de Papel", temporada: 2,totalViewers: "7.5M",totalReprods: "16.5M"}

    

];

//Usando for ... of para recorrer la lista

for(let serie of seriesTrending){
  console.log(`Serie ${serie.nombre},Temporadas: ${serie.temporada}`)
}
try{
  console.log(`la ultima serie leida fué: ${serie.nombre}`);
}
catch (error){
  console.log("Mensaje de error: "+error.message)
}

console.log("%c10.-Ciclo para recorrer Las propiedades de elementos  finitos - (FOR ... IN)",style_console);

//Usando for..in para recorrer cada serie 

for(let i in seriesTrending){
  console.log(`Serie ${parseInt(i)+1}:`)
  for (let propiedad in seriesTrending[i]){
    console.log(`${propiedad}:${seriesTrending[i][propiedad]}`)
  }
  
}
console.log("-----------------------")

console.log("%c11.-Ciclos interrumpidos para cada uno demlos elementos del arreglo - (FOR EACH)",style_console);

// Listas de series de TV trending con temporadas , viewers y reproducciones 

let seriesTrending2 = [
  {nombre: "La bruja ",temporada:3,Viewers : 4541,reproducciones:524834513},
  {nombre: "La Otra ",temporada:4,Viewers : 4541,reproducciones:524834513},
  {nombre: "La Sotana ",temporada:3,Viewers : 4541,reproducciones:524834513},
  {nombre: "La Madrina ",temporada:2,Viewers : 4541,reproducciones:524834513},
  {nombre: "La Mosca ",temporada:4,Viewers : 4541,reproducciones:524834513}

];

//Usando forEach para recorrer cada serie y calcular la calificacion 
  seriesTrending2.forEach((serie,index)=>{
    let calificacion = (serie.reproducciones / serie.Viewers).toFixed(2); // Calcula la calificacion y la redondea a 2 decimales 

    console.log(`Serie ${index +1}:`);
    console.log(`Nombre ${serie.nombre}`);
    console.log(`Temporadas: ${serie.temporadas}`);
    console.log(`Viewers: ${serie.viewers}`);
    console.log(`Reproducciones: ${serie.reproducciones}`);
    console.log(`Calificación: ${calificacion}`);
    console.log(`----------------------------------`);
  })

  // Usando filter para filtrar y map para transformar la información
  //Lista de series que queremos verificar 
  let seriesDeseadas = ["La Madrina ","La Mosca ", "La bruja "];

  //Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
  let sereiesConTresTemporadas = seriesTrending2 
    .filter(serie => serie.temporada <= 3)

    .map (serie => serie.nombre) //Obtenemos solo los nombres de esas series 
    .filter (nombre =>seriesDeseadas.includes(nombre)) 

console.log("Series con menos de tres temporadas")
console.log(sereiesConTresTemporadas)




