let saldoVitorias = vitorias();
let nivelDeJogo = nivel();

mensagem(saldoVitorias, nivelDeJogo);

function vitorias() {
    let numeroDeVitorias = 1;
    return numeroDeVitorias;
}

function nivel() {
    let vitoriasDoJogador = vitorias();

    if (vitoriasDoJogador < 10) {
        return "Ferro";
    } else if (vitoriasDoJogador > 11 && vitoriasDoJogador < 20) {
        return "Bronze";
    } else if (vitoriasDoJogador > 21 && vitoriasDoJogador < 50) {
        return "Prata";
    } else if (vitoriasDoJogador > 51 && vitoriasDoJogador < 80) {
        return "Ouro";
    } else if (vitoriasDoJogador > 81 && vitoriasDoJogador < 90) {
        return "Diamante";
    } else if (vitoriasDoJogador > 91 && vitoriasDoJogador < 100) {
        return "Lendario";
    } else {
        return "Imortal";
    }
}

function mensagem(saldoVitorias, nivelDeJogo) {
    console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível " + nivelDeJogo);
}


