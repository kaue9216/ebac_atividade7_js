class Conta {
  #saldo;
  constructor(){
    this.#saldo = 0;
  }

  estacionar(valor){
    this.#saldo += valor;
  }

  sair(valor){
    this.#saldo -= valor;
  }

  podeSair(valor){
    return valor <= this.#saldo;
  }

  atualizarSaldo(novoSaldo) {
    this.#saldo = novoSaldo;
  }

  get saldo(){
    return this.#saldo;
  }
}

class Parquimetro {
  constructor(conta){
    this.conta = conta;
  }

  estacionar() {
    const valorPago = parseFloat(document.getElementById("estacionar").value)
    this.valorPago = valorPago;
    this.conta.estacionar(valorPago);
    this.mostrarSaldo(this.conta.saldo);
    this.horaEstacionar = Date.now();
  }

  sair(){
    var horaSaida = Date.now();
    const tempo = horaSaida - this.horaEstacionar;
    const tempoMinutos = Math.floor(tempo / 60000);
    console.log(tempoMinutos)

    let troco = 0;

    if (tempoMinutos <= 30){
      troco = this.valorPago - 1;
    } else if (tempoMinutos <= 60){
      troco = this.valorPago - 1.75;
    } else if (tempoMinutos <= 120){
      troco = this.valorPago - 3;
    } else {
      document.getElementById("saldo").textContent = "Você estourou o tempo, seu carro foi guinchado";
      return;
    }

    if (troco >= 0){
      this.conta.atualizarSaldo(troco);
      document.getElementById("saldo").textContent = "Seu saldo é: R$" + troco.toFixed(2);
    } else {
      document.getElementById("saldo").textContent = "Saldo insuficiente, seu saldo é: R$" + troco.toFixed(2);
    }
  }

  mostrarSaldo(saldo){
    if(saldo >= 1 && saldo <= 1.74) {
      document.getElementById("saldo").textContent = "Seu saldo é: R$" + saldo.toFixed(2) + " você pode ficar aqui 30 minutos";
    } else if(saldo >= 1.75 && saldo <= 2.99){
      document.getElementById("saldo").textContent = "Seu saldo é: R$" + saldo.toFixed(2) + " você pode ficar aqui 60 minutos";
    } else if (saldo >= 3){
      document.getElementById("saldo").textContent = "Seu saldo é: R$" + saldo.toFixed(2) + " você pode ficar aqui 120 minutos";
    } else {
      document.getElementById("saldo").textContent = "Saldo insuficiente";
    }

    document.getElementById("estacionar").value = "";
  }
}

const conta = new Conta();
const parquimetro = new Parquimetro(conta);
