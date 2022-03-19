const string = "2022-03-19 17:25:43.215523+00";

let fechaActual = new Date(string);
// let fechaActual = new Date();

console.log(fechaActual);

console.log(fechaActual.toString());

console.log(string === fechaActual.toString());
