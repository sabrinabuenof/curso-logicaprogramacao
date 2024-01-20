/*Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.*/


let numero = prompt("Informe um número qualquer");

let numeroInformado = numero; 

if (numero > 0) {
    alert("O numero é POSITIVO");
} else if (numero < 0){
    alert("O  número é NEGATIVO");
} else {
    alert("Número inválido");
}



