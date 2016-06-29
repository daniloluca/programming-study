// Date
// Não é possivel instanciar uma data de forma literal no JavaScript.

// 1 Contrutor vazio
var hoje = new Date();
// new Date(), sem parametro, retorna a data de hoje, porem esta data é manipulavel,
// pois é pegada do browser, que por sua vez a pega do sistema operacional.
hoje.getTime(); //1429446304392

// 2 Tempo em milisegundos como parametro
var natal = new Date(1419465600000);
// Pode ser passado um parametro para o contrutor Date() para que a data seja
// adicionada de maneira fixa. No exemplo é criada a data do natal de 2014.
console.log(natal); //Wed Dec 2014 22:00:00 GMT-0200 (BRST)

// 3 String de data comum como parametro
new Date('2014/12/25');
// Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)
new Date('12/25/2014');
// Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)
new Date('25/12/2014');
// Invalid Date

Date.parse('2014/12/25'); //1419472800000

// 4 String RFC 2822 como parametro
new Date('Thu Dec 25 2014'); // Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)
new Date('Thu Dec 25 2014 10:30:00'); // Thu Dec 25 2014 10:30:00 GMT-0200 (BRST)

// 5 String ISO 8601 como parametro
new Date('2014-12-25'); // Wed Dec 24 2014 22:00:00 GMT-0200 (BRST)
new Date('2014-12-25T10:30:00'); // Thu Dec 25 2014 08:30:00 GMT-0200 (BRST)
new Date('2014-12-25T10:30:00Z'); // Thu Dec 25 2014 08:30:00 GMT-0200 (BRST)
new Date('2014-12-25T10:00:00-02:00'); // Thu Dec 25 2014 10:30:00 GMT-0200 (BRST)

// 6 Passando valores da data como parametro no contrutor.
new Date(2014, 11, 25); // Thu Dec 25 2014 00:00:00 GMT-0200 (BRST)
new Date(2014, 11, 25, 10, 30, 00); // Thu Dec 25 2014 10:30:00 GMT-0200 (BRST)

// API Date
var natal = new Date(2014, 11, 25);

// getYear
natal.getYear(); // 114
// Como o JavaScript é uma linguagem da decada de 90, como era muito comum dizer que
// o ano atual era 91, 92, etc, com a virada de 2000 ele continuou a incrementar o valor
// da mesma forma, por isso 114 no exemplo.

// getFullYear
natal .getFullYear(); // 2014
// Melhor alternativa a getYear, pois retorna o ano completo.

// getMonth
natal.getMonth(); // 11
// Começa em 0, por isso o exemplo retornou 11 e não 12

// getDay
natal.getDay(); // 4
// getDay retorna o dia da semana.
// Tambem começa em 0, por isso a quinta feira esta representada como 4 no exemplo.

// getDate
natal.getDate(); // 25
// Retorna o dia do mes.


// Referencia

// Date Mozilla Developer
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
