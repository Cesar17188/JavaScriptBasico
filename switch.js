var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy uno!");
    break;
  case 2:
    console.log("Soy un 10!");
    break;
  case 3:
    console.log("Soy un 100!");
    break;
  default:
    console.log("No soy nada");
    break;
}

// reto

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function jugar(usuario, pc) {
  var resultado = usuario + " " + pc;
  switch (resultado) {
    case "piedra papel":
      console.log("ganador pc");
      break;
    case "piedra tijera":
      console.log("ganador usuario");
      break;
    case "papel tijera":
      console.log("ganador pc");
      break;
    case "papel piedra":
      console.log("ganador usuario");
      break;
    case "tijera piedra":
      console.log("ganador pc");
      break;
    case "tijera papel":
      console.log("ganador usuario");
      break;
    default:
      console.log("empate");
      break;
  }
}

resultado = jugar(piedra, tijera);
