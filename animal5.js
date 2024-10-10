class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    emitirSom() {
      console.log("Som genérico de um animal");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log(`${this.nome}  Au au!`);
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log(`${this.nome} Miau miau!`);
    }
  }
const meuCachorro = new Cachorro("Duque");
const minhaGata = new Gato("Luna");


meuCachorro.emitirSom(); 
minhaGata.emitirSom(); 