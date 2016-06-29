//Operadores

//Coersão de tipos
0 == '' // true
0 == '0' // true
false == undefined // false
false === null // false
null == undefined // true
1 == true // true
0 == false // true
0 == '\n' // true

// Exemplos

// Valores iguais, mas tipos diferentes
10 == '10' // true
// Se x é Number e y é String, a comparação será feita da seguinte forma:
// x == ToNumber(y). Como o resultado de ToNumber('10') é 10, o retorno é true

// undefined e null
null == undefined // true
// Se x é null e y é undefined, o retorno é true.

// Comparação com construtor
10 == new Number(10) // true
// Se x é Number e y é Object, a comparação será feita da seguinte forma:
// x == ToPrimitive(y), que utiliza a operação valueOf, ou toString se não
// existir valueOf, do objeto para compará-lo com o um Number. O retorno da
// operação valueOf nesse caso 10, sendo assim o retorno é true.

// Exemplo
var x = new Number(10);
x.valueOf(); // 10
10 == x // true

var x = {};
10 == x // false

x.valueOf = function(){
	return 10;
};
10 == x // true

// valueOf > toString
var x = new Number(10);
x.toString = function(){
	return 100;
};
10 == x // true
100 == x // false
delete x.valueOf;
100 == x // true
10 == x // false
// Caso não exista valueOf, é utilizado o toString para a comparação do objeto,
// porem se existir valueOf, o toString não é utilizado.

// Comparação de objetos
var x = {};
var y = {};
x == y // false
x === y // false
var z = x;
x == z // true
x === z // true
// x e y são objetos diferentes, resultados de instancias diferentes.
// x e z são objetos iguais, são resultados da mesma instancia, final x foi
// atribuido a z, por tanto sáo a mesma referencia.

// Se for nessario comparar objetos de instancias diferentes, mas que tem os
// valores exatamente iguais, será necessário criar um comparador proprio.

// Operadores Logicos
// Os operadores logicos || e && entram em "curto-circuito", ou seja, se voce
// tem varias condições em um if, e a primeira delas é true, no caso do ||,
// ou false, no caso do &&, as demais condições são ignoradas e o bloco do if é
// executado.

// No JavaScript, quando utilizados os operadores logicos, são retornados os
// proprios operandos, que tem uma interpretação booleana pelo tipo.
// Exemplo
0 || 2 // 2
// No exemplo, é veviricado o valor de 0, como a representação booleana de 0
// no JavaScript é false, é passado para o segundo termo, que é 2. A representação
// booleana de 2 é true, então como dito que o JavaScript retorna o proprio operando
// em uma condição, é retornado o proprio 2.
1 || 2 // 1
// Como 1 é true na representação booleana, ele é retornado e o 2 não é avaliado.
1 && 2 // 2
// 1 é true, então passo para o segunto termo, 2 é true, então o 2 é retornado.
0 && 2 // 0
// 0 é false, então ele ja é retornado.

// Quando avaliados em situações booleanas, os tipos assumem valores truthy ou
// falsy por meio da operação abstrata ToBoolean

// O que é false?
!!0 // false
!!NaN // false
!!'' // false
!!false // false
!!null // false
!!undefined // false

// Todo o resto é true.
!!10 // true
!!'10' // true
!!{} // true
!![] // true
// ...

// Uso
// Sem validação
var generateSerial = function(max){
	return Math.floor(Math.random() * max);
};
generateSerial(1000); // 897
generateSerial(100); // 90
generateSerial(10); // 7
generateSerial(); // NaN

// Opções
// 1
var generateSerial = function(max){
	if(max === undefined || max === null || max === 0){
		max = 1000;
	}
	return Math.floor(Math.random() * max);
};
// 2
var generateSerial = function(max){
	if(!max){
		max = 1000;
	}
	return Math.floor(Math.random() * max);
};
// 3
var generateSerial = function(max){
	max = max || 1000;
	return Math.floor(Math.random() * max);
};

// result
generateSerial(1000); // 897
generateSerial(100); // 90
generateSerial(10); // 7
generateSerial(); // 578

// Operadores | e &
// |
1 | 2 // 3
// 0001 = 1
// 0010 = 2
// 0011 = 3
// Explicação: 1 OU 0 é 1

// &
1 & 2 // 0
// 0001 = 1
// 0010 = 2
// 0000 = 0
// Explicação: 1 E 0 é 0

// As operações com | e & são operações bit a bit.
// Existem ainda outros operadores para realizar operações bit a bit como
// negação ~, ou exclusivo ^ e deslocamento de bits >>, << e >>>

// Operadores Especiais
// Operador typeof
typeof 10; // 'number'
typeof "Danilo de Lucas"; // 'string'
typeof true; // 'boolean'
typeof undefined // 'undefined'
typeof null; // 'object'
typeof {}; // 'object'
typeof /abc/; // 'object'
typeof []; // 'object'
typeof new Date(); // 'object'
typeof function(){} // 'function'
// O operador typeof retorna o tipo do operando

// Operador new
var Pessoa = function(nome, idade){
	this.nome = nome;
	this.idade = idade;
};
var pedro = new Pessoa('Pedro', 20);
// O operador new constroi um objeto com base em uma função construtora.

// Operador instanceof
pedro instanceof Pessoa; // true
pedro instanceof Date; // false
// O operador instanceof verifica se o objeto possui a função construtora em
// sua cadeia de protótipos

// Operador in
'nome' in pedro; // true
'peso' in pedro; // false
// O operador in verifica se a propriedade faz parte do objeto

// Operador delete
delete pedro.idade;
'idade' in pedro; // false
// O operador delete apaga a propriedade de um objeto

// Operadores de comparação
// <, >, <= e >=
10 > 9 // true
1.1 < 1.2 // true
'a' < 'b' // true
'ana' > 'maria' // false

// Operadores aritméticos
// +, -, *, / e %
// Alguns operadores aritméticos são utilizados como sobrecarga, como:
// + é utilizado para concatenação de string
'Ana' + ' Maria' // 'Ana Maria'

// Operadores de atribuição
// +=, -=, *=, /= e %=

// Operadores de incremento e decremento ++ e --
var x = 0;
x++ // 0
x // 1
++x // 2
x // 2
x-- // 2
x // 1
--x // 0
x // 0
// Os operadores de incremento e decremento funcionam de forma diferente se
// aplicados antes ou depois do termo.
// Quando o ++ ou o -- estão antes do termo, o valor é retornado ja com o valor
// modificado. Quando estão depois, o valor é retornado sem modificação e depois
// é modificado.

// Operador ternário
// (expressão) ? true: false
var idade = 22;
(idade >= 18) ? 'Maior de idade' : 'Menor de idade'; // 'Maior de idade'
// Não é recomendado aninhar ifs ternarios, pois pode deixar o codigo muito complexo
// e dificil de entender.
