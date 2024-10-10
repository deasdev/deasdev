class ContaBancaria {
    constructor() {
      this.titular = titular;
      this._saldo = 0; 
    }
     saldo() {
      return this._saldo;
    }
  
    depositar() {
      if (valor > 0) {
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this._saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    sacar() {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this._saldo}`);
      } else {
        console.log("Saldo insuficiente ou valor de saque inválido.");
      }
    }
  }
const minhaConta = new contaBancaria("Andrea Souza");

minhaConta.depositar(1000);
minhaConta.sacar(1500);
console.log("Saldo atual:", minhaConta.saldo);