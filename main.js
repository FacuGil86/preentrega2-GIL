class Vuelo {
  constructor(origen, destino, tarifa) {
    this.origen = origen.toUpperCase();
    this.destino = destino.toUpperCase();
    this.tarifa = parseInt(tarifa);
  }
}

let vuelo1 = new Vuelo("Buenos Aires", "cordoba", 15000);
let vuelo2 = new Vuelo("Buenos Aires", "Salta", 25000);
let vuelo3 = new Vuelo("Buenos Aires", "Mendoza", 20000);
let vuelo4 = new Vuelo("Buenos Aires", "Ushuaia", 35000);
let vuelo5 = new Vuelo("Buenos Aires", "Iguazu", 25000);
let vuelo6 = new Vuelo("cordoba", "buenos aires", 17500);
let vuelo7 = new Vuelo("salta", "buenos aires", 20000);
let vuelo8 = new Vuelo("mendoza", "buenos aires", 22300);
let vuelo9 = new Vuelo("ushuaia", "buenos aires", 32560);
let vuelo10 = new Vuelo("Iguazu", "buenos aires", 20350);

alert("Hola, ingresaste al sitio adecuado apara elegir tu proximo viaje.");
let nombre = prompt("Por favor, indicanos tu nombre.");
alert(
  "Los destinos son los siguientes: Buenos Aires, Mendoza, Cordoba, Ushuaia, Iguazu, Salta."
);
let idaYVuelta = prompt("Indica si es vuelo Ida con 1 o Ida y Vuelta con 2");
let ingresarOrigen = prompt(nombre + ", elegí el origen de tu proximo Vuelo .");
let ingresarDestino = prompt("Ahora elegí el destino.");
ingresarOrigen = ingresarOrigen.toUpperCase();
ingresarDestino = ingresarDestino.toUpperCase();
idaYVuelta=parseInt(idaYVuelta);

console.log(`${ingresarOrigen}origen y destino${ingresarDestino}`);

let result = null;
for (let vuelo of [
  vuelo1,
  vuelo2,
  vuelo3,
  vuelo4,
  vuelo5,
  vuelo6,
  vuelo7,
  vuelo8,
  vuelo9,
  vuelo10,
]) {
  if (vuelo.origen === ingresarOrigen && vuelo.destino === ingresarDestino) {
    result = vuelo;
    break;
  }
}
function tarifa() {
  if (result !== null) {
    if (idaYVuelta == 1) {
      console.log(result.tarifa);
      alert(`Tu tarifa es de $ ${result.tarifa}`);
      return result.tarifa;
    }
    else {
      console.log((result.tarifa) * 2);
      alert(`Tu tarifa es de $ ${(result.tarifa) * 2}`);
      return (result.tarifa) * 2;
    } 
  }else {
      alert("Vuelo invalido, ingresa otro destino.");
      return null;
    }
}

let cantidad = tarifa();
if (cantidad != null) {
  alert("Calcula las cuotas que pagarias");
  let cuotas = parseInt(
    prompt("cantidad de cuotas: podes elegir entre 1,3,6,12 ")
  );
  calcularCuotas(cantidad,cuotas);
}

function calcularCuotas(cantidad, cuotas) {
  while (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12) {
    alert("Las opciones de cuotas son: 1,3,6 o 12");
    cuotas = parseInt(prompt("cantidad de cuotas"));
  }
  let importeCuotas = cantidad / cuotas;
  let decimales = importeCuotas.toFixed(2);
  alert("Vas a pagar " + cuotas + " cuotas de: $" + decimales);
}


 



