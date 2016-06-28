// Expressoes Regulares

// As expressoes regulares são estruturas formadas por um sequência de
// caracteres que especificam um padão formal

// Instancia
// Forma Literal
var regExp = /<expressão regular>/;
// Quando criada de forma literal é necessario utilizar / / no lugar de ""
// para a criação da expressão regular.

// Contrutor
var regExp = new RegExp("<expressão regular>");

// RegExp API
// exec
// Executa a RegExp, retornando os detalhes
// [ '9999-9999', index: 0, input: '9999-9999' ]

// test
// Testa a RegExp, retornando true ou false

// Exemplos
// exec e test
var regExp = /9999-9999/;
var telefone = '9999-9999';

console.log(regExp.exec(telefone)); // [ '9999-9999', index: 0, input: '9999-9999' ]
// Retorna os detalhes, como qual foi o index do regex que ele encontrou o input.
console.log(regExp.test(telefone)); // true
// Retorna somente se o input foi encontrado no regex ou não.

// Escape \
var regExp = /\(48\) 9999-9999/;
// Alguns caracteres como () são caracteres especiais que tem um significado
// dentro de um regex, como "caracteres reservados", então é necessario "escapar"
// estes caracteres especiais utilizando \ para que eles se tornem literais
// na expressão regular.
var telefone = '(48) 9999-9999';

console.log(regExp.test(telefone)); // true

// Inicio e Fim ^ $
var regExp = /^\(48\) 9999-9999$/;
var telefone = 'O telefone é (48) 9999-9999, tratar com João';

console.log(regExp.exec(telefone)); // null
console.log(regExp.test(telefone)); // false

telefone = '(48) 9999-9999';

console.log(regExp.exec(telefone)); // [ '9999-9999', index: 0, input: '9999-9999' ]
console.log(regExp.test(telefone)); // true

// Grupos de caracteres
// [abc] - Aceita qualquer caractere dentro do grupo, neste caso a, b e c
// [^abc] - Não aceita qualquer caractere dentro do grupo, neste caso a, b ou c
// [0-9] - Aceita qualquer caractere entre 0 e 9
// [^0-9] - Não aceita qualquer caractere entre 0 e 9
// O ^ dentro de um grupo indica negação daquele grupo, ou seja, não irá
// aceitar os valores do grupo.
// O - dentro do grupo indica o range, ou seja, de qual a qual caractere
// eu vou aceitar, ou negar, no regex. Isso serve para não ter que adicionar
// todos os numeros de 0 a 9 ou todos os caracteres de A a B por exemplo.

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone)); // true

// Quantificadores
// Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres.
// {n}   - Quantifica um número específico
// {n,}  - Quantifica um número mínimo
// {n,m} - Quantifica um número mínimo e um número máximo
// ? 	 - Zero ou um (faz o caracter ter carater opcional)
// * 	 - Zero ou mais
// + 	 - Um ou mais

// Para definir somente maximo deve ser adicionado {0,m} ao regex.

// Exemplo {n}
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;

var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone)); // true

// Exemplo {n,m}
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

var telefone1 = "(80) 9876-1234";
console.log(regExp.test(telefone1)); // true
var telefone2 = "(80) 99876-1234";
console.log(regExp.test(telefone2)); // true

// Exemplo ?
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

var telefone1 = "(80) 9876-1234";
console.log(regExp.test(telefone1)); // true
var telefone2 = "(80) 98761234";
console.log(regExp.test(telefone2)); // true

// Exemplo +
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;

var telefone = "<table>\
					<tr>\
						<td>(80) 999778899</td>\
						<td>(90) 99897-8877</td>\
						<td>(70) 98767-9999</td>\
					</tr>\
				</table>";
regExp.test(telefone); // true

// Exemplo *
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)*<\/tr><\/table>/;

var telefone = "<table>\
					<tr>\
					</tr>\
				</table>";
regExp.test(telefone); // true

// Metacaracteres
// . - Representa qualquer caractere
// \w - Representa o confjunto [a-zA-Z0-9_]
// \W - Representa o conjunto [^a-zA-Z0-9_]
// \d - Representa o conjunto [0-9]
// \D - Representa o conjunto [^0-9]
// \s - Representa um espaço em branco
// \S - Representa um não espaço em branco
// \n - Representa uma quebra de linha
// \t - Representa um tab
// ...

// Exemplo
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

var telefone = "<table>\
					<tr>\
						<td>(80) 999778899</td>\
						<td>(90) 99897-8877</td>\
						<td>(70) 98767-9999</td>\
					</tr>\
				</table>";
regExp.test(telefone); // true

// String API
// match - Executa uma busca na String e retorna um array contendo
// os dados encontrados, ou null.
// split - Divide a String com base em uma outra String fixa ou
// expressão regular.
// replace - Substitui partes da String com base em uma outra
// String fixa ou expressão regular.

// Modificadores
// i - Case-insensitive matching
// g - Global matching
// m - Multiline matching

// Exemplo match
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
// Se o g não fosse adicionado no final o match não iria
// pegar todos os telefones, somente o primeiro.

// Na forma de contrutor seria:
var regExp = new RegExp('\(\d{2}\)\s\d{4,5}-?\d{4}', g);
// O modificador é o segundo parametro do contrutor.

var telefone = "<table>\
					<tr>\
						<td>(80) 999778899</td>\
						<td>(90) 99897-8877</td>\
						<td>(70) 98767-9999</td>\
					</tr>\
				</table>";
telefone.match(regExp); // [ '(80) 999778899',  '(90) 99897-8877', '(70) 98767-9999' ]
// Se não houvesse o modificador g, o retorno seria '(80) 999778899'

// Exemplo replace
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;

var telefone = "<table>\
					<tr>\
						<td>(80) 999778899</td>\
						<td>(90) 99897-8877</td>\
						<td>(70) 98767-9999</td>\
					</tr>\
				</table>";
telefone.replace(regExp, 'telefone'); // "<table><tr><td>telefone</td><td>telefone</td><td>telefone</td></tr></table>"

// Referencias

// Expressões Regulares
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
