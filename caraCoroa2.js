const readline = require('readline-sync')


//let number = Number(readline.question("Digite [ 1 ] CARA   [ 2 ]  COROA "))


function gerarEscolhaAleatoria() {
    
    let number = Number(readline.question("Digite [ 1 ] CARA   [ 2 ]  COROA "))
    
    let dataAtual = new Date();
    let milissegundos = dataAtual.getMilliseconds();

    // Se o último dígito dos milissegundos for par, consideramos como "cara", caso contrário, consideramos como "coroa"
    if (milissegundos % 2 === 0) {
        if number = 1 
        return "cara vc venceu";
    } else {
        return "coroa";
    }
}

function jogarCaraOuCoroa() {
    // Gera a escolha do jogador aleatoriamente
    let escolhaJogador = gerarEscolhaAleatoria();

    // Gera o resultado aleatoriamente
    let resultado = gerarEscolhaAleatoria();

    // Exibe o resultado e verifica se o jogador acertou
    console.log("O resultado é: " + resultado);
    console.log("Você escolheu: " + escolhaJogador);
    if (escolhaJogador === resultado) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log("Você errou. Tente novamente!");
    }
}

// Chama a função para jogar cara ou coroa
jogarCaraOuCoroa();