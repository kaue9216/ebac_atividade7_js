class Estacionamento {
  constructor(valor) {
    this.valor = valor;
  }

  calcular() {
    if (this.valor < 1) {
      return { mensagem: "Valor insuficiente." };
    } else if (this.valor < 1.75) {
      return {
        tempo: 30,
        troco: (this.valor - 1).toFixed(2)
      };
    } else if (this.valor < 3) {
      return {
        tempo: 60,
        troco: (this.valor - 1.75).toFixed(2)
      };
    } else {
      return {
        tempo: 120,
        troco: (this.valor - 3).toFixed(2)
      };
    }
  }
}

function calcularTempo() {
  const valor = parseFloat(document.getElementById('valor').value);
  const estacionamento = new Estacionamento(valor);
  const resultado = estacionamento.calcular();
  const divResultado = document.getElementById('resultado');

  if (resultado.mensagem) {
    divResultado.innerHTML = `<p>${resultado.mensagem}</p>`;
  } else {
    divResultado.innerHTML = `<p>Tempo: ${resultado.tempo} minutos</p><p>Troco: R$ ${resultado.troco}</p>`;
  }
}
