function olaMundo(){
    console.log("Ola mundo!");
 
}
olaMundo();

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
exibirNome("Sabrina");


function dobroNumero (numero) {
    return numero * 2;
}
let resultadoDobro = dobroNumero (5);
console.log(resultadoDobro);

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }

let media = calcularMedia(25, 4, 8);
console.log(media);

function buscarMaior(a, b) {
    return a > b ? a : b;
  }
  
let maiorNumero = buscarMaior(20, 3);
console.log(maiorNumero);

