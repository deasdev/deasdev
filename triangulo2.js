class Retangulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura; 
    }
  }
const meuRetangulo = new Retangulo(5, 10);
const area = meuRetangulo.calcularArea();
console.log("A área do retângulo é:", area); 