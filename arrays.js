var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

//reto

var i = 0;
var autos = [];

function constructor(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

while (i < 30) {
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new constructor(marca, modelo, annio));
  i++;
}

for (auto of autos) {
  console.log(
    `El modelo del auto es ${auto.modelo}, su marca es ${auto.marca} del año ${auto.annio}`
  );
}
