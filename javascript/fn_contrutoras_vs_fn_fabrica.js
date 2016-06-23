// Funções Contrutoras vs. Funções Fábrica

// Funções Fábrica:
var criarPessoa = function(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 30));

// Função Contrutora:
var Pessoa = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Maria", 30));

// Call
var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 30);
console.log(maria);
