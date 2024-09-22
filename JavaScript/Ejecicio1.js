// Ejercicio 01 : Declaración de variables 

var miNombre = "José Arturo ";
var misApellidos ;
var miEdad = 19;


misApellidos = "García González";
// El objeto de consola nos permite enviar datos a la terminal y poder visuzalizar el valor de una variable o resultado de una función o metodo



console.log ("Intentando leer las variables = ",miNombre+misApellidos);


// una variable puede cambiar en el proceso de ejecución de l programa 


console.warn ("---- Declaración de variables del tipo constante usando : cnst ");

const miUniversidad = "UT Xicotepec";
const miMatricula = 230629;
console.log ("Hola, ",miNombre," ",misApellidos," se que estudias actualmente en : ", miUniversidad , " asignamos la matricula ",miMatricula," y tu edad es ",miEdad);


//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función TupeOff()

console.log ("Analizando los datos puedo decir que: ");
console.log ("miNombre es del tipo ",typeof(miNombre));
console.log ("misApellidos es del tipo ",typeof(misApellidos));
console.log ("miUniversidad es del tipo ",typeof(miUniversidad));
console.log ("miMatricula es del tipo ",typeof(miMatricula));
console.log ("miEdad es del tipo ",typeof(miEdad));

// c) LET
let miFechaNacimiento = "2005-08-23";
let miColorFavorito;

console.warn("--- Declaración de variables usando : let ");
console.log ("Genial,te voy conociendo mejor , ahora se que tu naciste el :",miFechaNacimiento," y tu color favorito es : ",miColorFavorito);
miColorFavorito = "Negro";
console.log (`Creo que es ${miColorFavorito}, le atine`);


console.warn("--- Analizar datos ");
console.log("Analizando los datos puedo decir que: ");
console.log("miColorFavorito es del tipo: ",typeof(miColorFavorito));
console.log("miFechaNacimiento es del tipo: ",typeof(miFechaNacimiento));




