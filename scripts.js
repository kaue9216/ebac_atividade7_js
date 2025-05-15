class Conta {
  // metodos
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

  get saldo(){
    return this.#saldo;
  }
}

class Parquimetro {
  constructor(conta){
    this.conta = conta;
  }

  estacionar() {
    // adiciona o saldo
    const valorPago = parseFloat(document.getElementById("estacionar").value)
    this.valorPago = valorPago
    // adiciona o valor a conta
    this.conta.estacionar(valorPago);
    //mostra o saldo
    this.mostrarSaldo(this.conta.saldo);
    this.horaEstacionar = Date.now();
    // console.log(this.horaEstacionar)
  }

  sair(){
    var horaSaida = Date.now();
    // console.log(horaSaida)
    const tempo = horaSaida - this.horaEstacionar;
    // console.log(tempo)
    const tempoMinutos = Math.floor(tempo / 60000);
    console.log(tempoMinutos)

    if(tempoMinutos <= 30){ //30
      const troco = this.valorPago - 1
      console.log(troco)
      if (troco >= 0){
        document.getElementById("saldo").textContent = "Seu saldo é: R$" + troco
        } else {
          document.getElementById("saldo").textContent = "Saldo insuficiente, seu saldo é: " + troco.toFixed(2)
        }

    } else if(tempoMinutos <= 60){ //60
      const troco = this.valorPago - 1.75
      console.log(troco)
      if (troco >= 0){
        document.getElementById("saldo").textContent = "Seu saldo é: R$" + troco
        } else {
          document.getElementById("saldo").textContent = "Saldo insuficiente, seu saldo é: " + troco.toFixed(2)
        }

    } else if(tempoMinutos <= 120){ //120
      const troco = this.valorPago - 3
      console.log(troco)
      if (troco >= 0){
        document.getElementById("saldo").textContent = "Seu saldo é: R$" + troco
        } else {
          document.getElementById("saldo").textContent = "Saldo insuficiente, seu saldo é: " + troco.toFixed(2)
        }
    } else {document.getElementById("saldo").textContent = "Você estourou o tempo, seu carro foi guinchado"}
  }

  mostrarSaldo(saldo){
    if(saldo >= 1 && saldo <= 1.74) {
    document.getElementById("saldo").textContent = "Seu saldo é: R$" + saldo + " você pode ficar aqui 30 minutos"
    document.getElementById("estacionar").value = ""
    } else if(saldo >= 1.75 && saldo <= 2.99){
      document.getElementById("saldo").textContent = "Seu saldo é: R$" + saldo + " você pode ficar aqui 60 minutos"
      document.getElementById("estacionar").value = ""
    } else if (saldo >= 3){
      document.getElementById("saldo").textContent = "Seu saldo é: R$" + saldo + " você pode ficar aqui 120 minutos"
      document.getElementById("estacionar").value = ""
    } else{
      document.getElementById("saldo").textContent = "Saldo insuficiente"
    }

  }

}

const conta = new Conta();
const parquimetro = new Parquimetro(conta);
