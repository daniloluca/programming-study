// Arrays

// Formas de criar arrays.

// Criar um array vazio e adicionar os elementos posteriormente.
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

// Passar os elementos na criação.
var carros = ['Ka', 'Corsa', 'Palio'];

// Utilizar o contrutor new.
// Sem passar parametros na instancia do Array.
var carros = new Array();

// Passando o tamanho inicial do Array via parametro.
var carros = new Array(10);

// Passando como parametro os valores que o array terá inicialmente.
var carros = new Array('Ka', 'Corsa', 'Palio');


// API

// valueOf
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.valueOf(); // ['Ka', 'Corsa', 'Palio']

// toString
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.toString(); //'Ka,Corsa,Palio'

// length
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.length; //3

// push
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.push('Gol'); //4
// Quando um elemento é inserido em um array por meio do push, ele é adicionado
// no final do array e o comando retorna o tamanho do array com o novo valor incluido.

carros.toString(); //'Ka,Corsa,Palio,Gol'

// pop
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.pop(); //'Palio'
// Quando o comando pop é executado, o ultimo elemento do array é removido e
// retornado pelo comando.

carros.toString(); //'Ka,Corsa'

// unshift
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.unshift('Gol'); //4
// Quando um elemento é inserido no um array por meio do unshift, ele é adicionado
// no inicio do array e o comando retorna o tamanho do array com o novo valor incluido.

carros.toString(); //'Gol,Ka,Corsa,Palio'

// shift
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.shift(); //'Ka'
// Quando o comando shift é executado, o primeiro elemento do array é removido e
// retornado pelo comando.

carros.toString(); //'Corsa,Palio'

// indexOf
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

carros.indexOf('Corsa'); //1
// indexOf retorna a posição do elemento passado, no array.

// splice
// Remover elemento(s)
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

var pos = carros.indexOf('Corsa'); //1

carros.splice(pos, 1); //['Corsa']
// No primeiro parametro é passada aposição em que o elemento a ser removido se
// encontra no array, e o segunto é a quantidade de elementos que serão removidos
// depois da posição.
// O comando retorna os elementos removidos.

carros.toString(); //['Ka', 'Palio']

// Substituir elemento(s)
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

var pos = carros.indexOf('Corsa'); //1

carros.splice(pos, 1, 'Sonic'); //['Corsa']
// Remove o elemento(s) com o index passado no primeiro parametro, com a quantidade
// de elementos passada no segundo e adiciona o elemento passado no terceiro
// parametro na posição que foi retirado o(s) elemento(s).
// O comando ainda retorna o(s) elemento(s) retirado(s).

carros.toString(); //['Ka', 'Sonic', 'Palio']

//Adicionar elemento(s)
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

var pos = carros.indexOf('Corsa'); //1

carros.splice(pos, 0, 'Sonic'); //[]
// Quando o segundo parametro for 0, o(s) elemento(s) passado(s) no terceiro
// paremetro é somente adicionado na posição passad no primeiro parametro,
// realocando o array.
// Retorna um array vazio.

carros.toString(); //['Ka', 'Sonic', 'Corsa', 'Palio']

// forEach
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';

// itera os elemento do array e passa no parametro.
carros.forEach(function(element){
	//lógica de iteração
});

// filter
var carros = [];

carros[0] = {marca: 'Ford', modelo: 'Ka'};
carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
carros[2] = {marca: 'Fiat', modelo: 'Palio'};

carros.filter(function(element){
	return element.marca === 'Ford';
});
// [{marca: 'Ford', modelo:'Ka'}]
// A função filter irá iterar todos os elementos e retornar um novo array somente
// com os elementos que estiverem diacordo com a condição escrita no retorno do filter.
// The filter() method creates a new array with all elements that pass the test
// implemented by the provided function.

//every
var carros = [];

carros[0] = {marca: 'Ford', modelo: 'Ka'};
carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
carros[2] = {marca: 'Fiat', modelo: 'Palio'};

carros.every(function(element){
	return element.marca === 'Ford';
});
//false
//A função every retorna um booleano indicando se TODOS os elementos do arrays
//passaram no teste da condição da função, descrita no retorno da mesma.

//some
var carros = [];

carros[0] = {marca: 'Ford', modelo: 'Ka'};
carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
carros[2] = {marca: 'Fiat', modelo: 'Palio'};

carros.some(function(element){
	return element.marca === 'Ford';
});
//true
//A função some retorna um booleano indicando se ALGUM dos elementos do arrays
//passou no teste da condição da função, descrita no retorno da mesma.

//map
var carros = [];

carros[0] = {marca: 'Ford', modelo: 'Ka'};
carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
carros[2] = {marca: 'Fiat', modelo: 'Palio'};

carros.map(function(element){
	return element.marca;
	//return element.marca.length //Retorna a quantidade de caracteres de cada marca.
});
//['Ford', 'Chevrolet', 'Fiat']
//A função map irá retornar um novo array que terá somente os valores passados
//na condição para cada elemento do array.
//No exemplo, será retornado um novo array contendo somente a marca de todos os carros.

//reduce
var carros = [];

carros[0] = {modelo: 'Ka', preco: 2880};
carros[1] = {modelo: 'Corsa', preco: 34750};
carros[2] = {modelo: 'Palio', preco: 32000};

carros.reduce(function(prev, cur){
	return prev + cur.preco;
}, 0);
//95550
// A função reduce funciona como um acomulador.
// O primeiro parametro é o valor atual da iteração dos elementos, o segundo é
// o elemento atual.
// Ela irá iterar todos os elementos e irá armazenar a soma dos valores em prev
// e posteriormente irá retornar estes valores.
// O segundo parametro do reduce, depois da function, é o valor com o qual o primeiro
// parametro da função será inicilizado para iniciar o acumulo.

//concat
var carros = ['Ka', 'Corsa', 'Palio'];
var motos = ['Honda', 'Yamaha'];

var veiculos = carros.concat(motos);
// O concat não altera o valor original do array, ele returna um novo array com
// os valores concatenados, no exemplo o novo array que é retornado é atribuido
// a variavel que contem o array original.

veiculos.toString(); //['Ka', 'Corsa', 'Palio', 'Honda', 'Yamaha']

//slice
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';
carros[3] = 'Gol';

carros.slice(0, 2); // ['Ka', 'Corsa']
carros.slice(1, 3); // ['Corsa', 'Palio']
carros.slice(2); // ['Palio', 'Gol']
// O slice funciona de forma semelhante ao substring de outras linguagens.
// Ele retorna um array com os elementos da posição passada no primeiro parametro
// até os elementos na posição passado no segundo parameto menos um.
// Se for passado somente um parametro, ele irá retornar o array com os elementos
// desde a posição passada até o final do array.

//reverse
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';
carros[3] = 'Gol';

carros.reverse();
// O reverse inverte a ordem do array.
// ALTERA O ARRAY ORIGINAL.

carros.toString(); // ['Gol', 'Palio', 'Corsa', 'Ka']

//sort
var carros = [];

carros[0] = {modelo: 'Ka', preco: 2880};
carros[1] = {modelo: 'Corsa', preco: 34750};
carros[2] = {modelo: 'Palio', preco: 32000};

carros.sort(function(a, b){
	return a.preco - b.preco;
});
// Sem nenhuma função no sorte, ele irá retornar o array ordenado por ordem alfabetica.
// Pode ser passada uma função para o sort para dizer qual é a ordem que o array deve
// ser retornado.
// A função recebe dois parametros, referente aos dois elementos que serão comparados.
// O retorno da função deve retornar um numero positivo, indicando que o primeiro elemento é
// maior que o segundo, um numero negativo, indicando que o segundo elemento é maior, ou
// o numero 0, indicando que os dois são iguais e que não a necessidade de alteração.

carros.valueOf(); // ['Ka', 'Palio', 'Corsa']

//join
var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';
carros[3] = 'Gol';

carros.join(';'); // 'Ka;Corsa;Palio;Gol'
// O join junta os elementos do array e entre eles, adiciona o separador passado
// via parametro.
// A string montada com os elementos separados pelo ; é retornada pelo comando.


// Exemplo de utilização dos conceitos

// Problema
'JavaScript' * 10 //NaN

//Solução
new Array(10).join('JavaScript'); // 'JavaScriptJavaScriptJavaScriptJavaScript
// JavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScript'
