alert("Boas vindas ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;


let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro)

let nome1 = prompt("Digite o seu nome");
let idade1 = prompt(`Digite ${nome1}, informe a sua idade`);

if (idade1 >= 18) {
    alert("Parabéns! Você pode tirar sua habilitação!");
}else {
    alert("Vai continuar andando a pé! :D")
}




