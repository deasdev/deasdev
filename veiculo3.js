class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
      super(marca, modelo); 
      this.cilindradas = cilindradas;
    }
  
    exibirDetalhes() {
      console.log(`Moto: ${this.marca} ${this.modelo}, ${this.cilindradas} cilindradas`);
    }
  }
const minhaMoto = new Moto("Honda", "CG 150", 150);

minhaMoto.exibirDetalhes(); 