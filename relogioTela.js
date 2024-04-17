

function atualizarRelogio() {
    // Obtém a data e hora atual
    let dataAtual = new Date();

    // Extrai horas, minutos e segundos
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    // Formata as horas, minutos e segundos para exibir sempre com dois dígitos
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Exibe o horário atual no console
    console.log(horas + ":" + minutos + ":" + segundos);
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
