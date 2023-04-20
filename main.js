class Vuelo  {
  constructor(origen, destino, tarifa){
    this.origen = origen;
    this.destino = destino;
    this.tarifa = tarifa;
    origen = origen.toUpperCase();
    destino = destino.toUpperCase();
    
  
  }
  
}

let vuelo1 = new Vuelo("Buenos Aries", "cordoba", 15000);
let vuelo2 = new Vuelo ("Buenos Aries", "Salta", 25000);
let vuelo3 = new Vuelo ("Buenos Aries", "Mendoza", 20000);
let vuelo4 = new Vuelo ("Buenos Aries", "Ushuaia", 35000);
let vuelo5 = new Vuelo ("Buenos Aries", "Iguazu", 25000);
let vuelo6 = new Vuelo ("cordoba", "buenos aires", 17500);
let vuelo7 = new Vuelo ("salta", "buenos aires", 20000);
let vuelo8 = new Vuelo ("mendoza", "buenos aires", 22300);
let vuelo9 = new Vuelo ("ushuaia", "buenos aires", 32560);
let vuelo10 = new Vuelo ("Iguazu", "buenos aires", 20350);

alert("Hola, ingresaste al sitio adecuado apara elegir tu proximo viaje.");
let nombre = prompt("Por favor, indicanos tu nombre.");
alert(
  "Los destinos son los siguientes: Buenos Aires, Mendoza, Cordoba, Ushuaia, Iguazu, Salta."
);
let ingresarOrigen = prompt(nombre + ", elegí el origen de tu proximo Vuelo .");
let ingresarDestino = prompt("Ahora elegí el destino.");
ingresarOrigen = ingresarOrigen.toUpperCase();
ingresarDestino = ingresarDestino.toUpperCase();

 
console.log(`${ingresarOrigen}origen y destino${ingresarDestino}`);
let result = null;
for (let vuelo of [vuelo1, vuelo2, vuelo3, vuelo4]) {
  
  if(vuelo.origen === ingresarOrigen && vuelo.destino === ingresarDestino ) {
    result = vuelo ;
    break;
  }
}

console.log(result.tarifa);
console.log(vuelo1.destino)
// alert("Calcula tus cuotas");
// let nombre = prompt("Ingresa tu nombre");
// let cantidad = parseFloat(prompt(nombre + " ingresa el importe en $"));
// let cuotas = parseInt(
//   prompt("cantidad de cuotas: podes elegir entre 1,3,6,12 ")
// );

// function calcularCuotas() {
//   while ((i = cuotas)) {
//     if (i !== 1 && i !== 3 && i !== 6 && i !== 12) {
//       alert("Las opciones de cuotas son: 1,3,6 o 12");
//       cuotas = parseInt(prompt("cantidad de cuotas"));
//     } else {
//       importeCuotas();
//       break;
//     }
//   }
// }

// function importeCuotas() {
//   let importeCuotas = cantidad / cuotas;
//   let decimales = importeCuotas.toFixed(2);
//   alert("Vas a pagar " + cuotas + " cuotas de: $" + decimales);
// }

// calcularCuotas();
