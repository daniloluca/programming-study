//Closures

// significado = fechamento, encerramento, encarceramento

// Exemplo:
var helloWorld = function(){
	var message = 'Hello World!';
	return function(){
		return message;
	};
};

console.log(helloWorld); //[Function]
console.log(helloWorld()); //[Function]
console.log(helloWorld()()); //Hello World!

// Apesar da função retornada por helloWorld() ser uma inner function que se retornada e executada externamente
// logicamente não teria acesso a variavel message, ela mantem as referencias externas que ela faz,
// tornando assim possivel que a variavel message seja acessada mesmo não estando no escopo da função.

// As Closures são muito importantes, pois permite a utilização de callbacks.
// Os callbacks mantes os recursos externos acessados por eles para executar quando forem chamados, criando closures.

// São as Closures que nos permitem, por exemplo, passar uma função por parametro e continuar acessando os recursos
// externos a ela quando ela for executada em outro escopo.
