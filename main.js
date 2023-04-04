alert("Calcula tus cuotas");
let nombre = prompt("Ingresa tu nombre");
let cantidad = parseFloat(prompt(nombre + " ingresa el importe en $"));
let cuotas = parseInt(
  prompt("cantidad de cuotas: podes elegir entre 1,3,6,12 ")
);

function calcularCuotas() {
  while ((i = cuotas)) {
    if (i !== 1 && i !== 3 && i !== 6 && i !== 12) {
      alert("Las opciones de cuotas son: 1,3,6 o 12");
      cuotas = parseInt(prompt("cantidad de cuotas"));
    } else {
      importeCuotas();
      break;
    }
  }
}

function importeCuotas() {
  let importeCuotas = cantidad / cuotas;
  let decimales = importeCuotas.toFixed(2);
  alert("Vas a pagar " + cuotas + " cuotas de: $" + decimales);
}

calcularCuotas();
