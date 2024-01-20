alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// while significa que enquanto chute não for igual ao número secreto 
while(chute != numeroSecreto) {
    chute = prompt('Escolha um número ente 1 e 10');
    //se o chute for igual ao numero secreto 
    if (chute == numeroSecreto) {
        break;
        alert(`Isso ai, vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.` );
    } else {
        if ( chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
        
    }
 
}

if (tentativas > 1) {
    alert(`Isso ai, vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.` );
} else {
    alert(`Isso ai, vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.` );
}







