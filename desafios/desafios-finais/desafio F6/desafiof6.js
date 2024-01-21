// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
   alert("O número é POSITIVO.");
} else if (numero < 0) {
    alert("O número é NEGATIVO.");
} else {
    alert("O número é zero.");
}