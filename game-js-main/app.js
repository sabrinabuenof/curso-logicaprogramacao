alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt('Escolha um número ente 1 e 10');

//se o chute for igual ao numero secreto 
if (numeroSecreto == chute) {
   alert(`Isso ai, vc descobriu o numero secreto ${numeroSecreto}` );
} else {
    alert('Você errou!');
}





