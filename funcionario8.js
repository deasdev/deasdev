class Funcionario {
    static contadorFuncionarios = 0;
  
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
      Funcionario.contadorFuncionarios++;
    }
  
    static get quantidadeFuncionarios() {
      return Funcionario.contadorFuncionarios;
    }
  }
  const funcionario1 = new Funcionario("João", 2000);
  const funcionario2 = new Funcionario("Maria", 3000);
  const funcionario3 = new Funcionario("Pedro", 2500);
    
  console.log("Total de funcionários:", Funcionario.quantidadeFuncionarios);