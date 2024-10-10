class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        if (typeof novoNome !== 'string') {
            throw new Error('O nome deve ser uma string');
        }
        this._nome = novoNome;
    }
}

const meuCachorro = new Cachorro('Rex');

console.log(meuCachorro.nome); 

meuCachorro.nome = 'Thor';

console.log(meuCachorro.nome); 

try {
    meuCachorro.nome = 123;
} catch (error) {
    console.error(error.message); 
}