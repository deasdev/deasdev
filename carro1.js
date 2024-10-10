class Carro {
   constructor(marca, modelo, ano) {
       this.marca = marca;
       this.modelo = modelo;
       this.ano = ano;
   }

   exibirDetalhes() {
       return `Carro: ${this.marca} ${this.modelo}, ano: ${this.ano}`;
   }
}


let meuCarro = new Carro("Volkswagen", "Fusca", 1978);


console.log(meuCarro.exibirDetalhes());

