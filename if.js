var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, sera tu primera votación");
} else if (edad > 18) {
  console.log("Puedes votar, otra vez");
} else {
  console.log("Aun no puedes votar");
}

// condición ternaria condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";

// if (true) {
//   console.log("Hola");
// } else if () {
//   console.log("soy falso");
// } else {
// }

// Reto

var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";

function juega(tiro_usuario, tiro_pc) {
  if (tiro_usuario != tiro_pc) {
    if (tiro_usuario === opc1 && tiro_pc === opc2) {
      console.log("La pc ganó con " + opc2 + " frente a " + opc1);
    } else if (tiro_usuario === opc2 && tiro_pc === opc3) {
      console.log("La pc ganó con " + opc3 + " frente a " + opc2);
    } else if (tiro_usuario === opc1 && tiro_pc === opc3) {
      console.log("El usuario ganó con " + opc3 + " frente a " + opc1);
    } else if (tiro_usuario === opc3 && tiro_pc === opc2) {
      console.log("El usuario ganó con " + opc2 + " frente a " + opc3);
    }
  } else {
    console.log("Empate");
  }
}

resultado = juega(opc1, opc2);
