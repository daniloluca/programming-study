//Encapsulamento

// As formas apresentadas são utilizadas para tentar evitar a utilização do escopo
// Global diretamente, para não causar poluição no conteudo dos objetos.

//Objeto

//Problema sem Encapsulamento
var counter = 0;
var add = function(){
	return ++counter;
}
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3

var itens = [];
var add = function(item){
	itens.push(item);
	return itens;
};
console.log(add('A')); //['A']
console.log(add('B')); //['A', 'B']
console.log(add('C')); //['A', 'B', 'C']

console.log(add()); //['A', 'B', 'C', undefined]

// Quando a variavel add é re-instanciada para ser utilizada para o objeto itens
// ela é sobrescrita, tornando impossivel de ser realizada a operação anterior.

//Problema com Encapsulamento
var counter = {
	value: 0,
	add: function(){
		return ++this.value;
	}
};
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3

var itens = {
	value: [],
	add: function(item){
		this.value.push(item);
		return this.value;
	}
};
console.log(itens.add('A')); //['A']
console.log(itens.add('B')); //['A', 'B']
console.log(itens.add('C')); //['A', 'B', 'C']

console.log(counter.add()); //4

// Quando é feito o encapsulamento via objetos, é possivel acessar as informações
// de forma individual e sem sebrescrever nada.

// O problema de fazer encapsulamento por meio de objetos é que os objetos ficam
// sujeitos a alterações diretas em propriedades internas, pois o javascript não
// possui modificadores de visibilidade, tais como private, public, etc.
// Isso pode acarretar problemas na consistencia dos dados nos objetos, por exemplo:

var counter = {
	value: 0,
	add: function(){
		return ++this.value;
	}
};
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3
counter.value = undefined;
console.log(counter.add()); //NaN

// O ultimo comando retorna NaN pois a propriedade value do componente counter foi
// alterada diretamente para undefined.


// Função

// Utilização de factory para encapsulamento
var createCounter = function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		}
	};
};
var counter = createCounter();
counter.value; //undefined
counter.add(); //1
counter.add(); //2
counter.add(); //3

// Esta forma é utilizada para que seja possivel definir o que sera publico, ou seja,
// o que podera ser acessado pelo objeto que instanciar a função createCounter.
// Por meio deste metodo não é possivel fazer o acesso a variavel value, pois
// ela não esta sendo retornada pela função createCounter, tornando-a invisivel
// para o escopo.
// A função add() é uma closure que consegue acessar a variavel value, que é
// uma referencia exterana da função add.
// o return é utilizado para expor a parte publica.

// O mesmo conceito anterior, porem com o uso do construtor new
var Counter = function(){
	var value = 0;
	this.add = function(){
		return ++value;
	};
};
var counter = new Counter();
counter.value; //undefined
counter.add(); //1
counter.add(); //2
counter.add(); //3

// A pricipal diferença entre as duas formas (factory, constructor), é que na factory
// quando voce quer que alguma coisa seja publica, deve ser adicionado no return
// da função create (no exemplo, createCounter()). Ja com o constructor, é necessario adicionar tudo que for
// public no objeto this, que é referente ao abjeto que estará recebendo o new Object().
// no caso do exemplo, o this será referente ao objeto counter.
// o new é utilizado para expor a parte publica.


// Immediately-Invoked Function Expression (função imediatamente invocada, ou expressão invocada automaticamente) - aplicação de Module Pattern
var counter = (function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		},
		reset: function(){
			value = 0;
		}
	};
})();
console.log(counter.value); //undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3
counter.reset();
console.log(counter.add()); //1

// É uma aplicação, ou evolução, do metodo com factory, porem executa a função imediatamente,
// assim a função retornada é automaticamente atribuida ao objeto.
// Quando este modulo é importado para aplicação ele é automaticamente invocado.

// Mesmo conceito do anterior, porem utilizando o Reveling Module Pattern
var counter = (function(){
	var _value = 0;
	var _add = function(){
		return ++_value;
	};
	var _reset = function(){
		_value = 0;
	}
	return { // As funções foram colodas no escopo privado, e as variaveis que as contem adicionadas aos retornos
		add: _add,
		reset: _reset
	};
})();
console.log(counter.value); //undefined
console.log(counter.add()); //1
console.log(counter.add()); //2
console.log(counter.add()); //3
counter.reset();
console.log(counter.add()); //1

// Esta forma traz uma legibilidade maior.


// Referencias

//Learning JavaScript Design Patterns
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/
	// Module Pattern
	// Reveling Module Pattern
