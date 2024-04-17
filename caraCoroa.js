
const readline = require('readline-sync')


let number = Number(readline.question("Digite [ 1 ] CARA   [ 2 ]  COROA "))

let recsegundos = 0

function atualizarRelogio() {
    // Obtém a data e hora atual
    let dataAtual = new Date();

    // Extrai horas, minutos e segundos
   let horas = dataAtual.getHours();
   let minutos = dataAtual.getMinutes();
    
   let segundos = dataAtual.getSeconds();
       recsegundos = segundos
        console.log( ":" , segundos)
        if (segundos % 2 === 0)
            console.log( "2" , "Coroa Venceu")
        else
            console.log( "1" , "Cara Venceu")

    // Formata as horas, minutos e segundos para exibir sempre com dois dígitos
   // horas = horas < 10 ? "0" + horas : horas;
   // minutos = minutos < 10 ? "0" + minutos : minutos;
    
   segundos = segundos < 10 ? "0" + segundos : segundos;
   console.log( ":" , segundos)
    // Exibe o horário atual no console
    //console.log(horas + ":" + minutos + ":" + segundos);
}
console.log( ":" , recsegundos)
console.log( "fim" )

// Atualiza o relógio a cada segundo
//setInterval(atualizarRelogio, 1000);





/////
