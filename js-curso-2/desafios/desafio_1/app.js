let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


function verificarConsole() {
    console.log('o botão foi clicado');
}

function verificarAlert() {
    alert('Eu amo Js');
}

function verificarPrompt() {    
    let nomeCidade = prompt('Diga o nome de uma cidade do Brasil que você gosta muito: ');
    alert(`Estive em ${nomeCidade} e lembrei de você <3`);
}

function somaNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

