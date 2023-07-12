// OPERADORES DE COMPARAÇÃO DE TIPOS DE VARIÁVEIS - DAY 10/07/2023

// Declaração de variáveis definidas como números e strings.
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';


// Na estrutura condicional abaixo é feita uma comparação referente aos VALORES das variáveis numeroUm e stringUm, onde o resultado será 'true'/'verdadeiro', pois mesmo que o tipo delas seja diferente (número e string) os seus valores são iguais (1).
if (numeroUm == stringUm) {
    console.log('As variáveis possuem o mesmo valor, porém tipos diferentes!');
} else {
    console.log('As variáveis não possuem o mesmo valor!');
}


// Na estrutura condicional abaixo é feita uma comparação referente aos VALORES e TIPOS das variáveis numeroTrinta e stringTring, resultando como 'false'/'falso', pois as variáveis possuem tipos diferentes (número e string) e somente os seus valores são iguais (30).
if (numeroTrinta === stringTrinta) {
    console.log('As variáveis possuem o mesmo valor e o mesmo tipo!');
} else {
    console.log('As variáveis não possuem o mesmo tipo!');
}


// Na estrutura condicional abaixo é feita uma comparação referente aos VALORES das variáveis numeroDez e stringDez, onde o resultado será 'true'/'verdadeiro', pois mesmo que o tipo delas seja diferente (número e string) os seus valores são iguais (10).
if (numeroDez == stringDez) {
    console.log('As variáveis possuem o mesmo valor, porém tipos diferentes!');
} else {
    console.log('As variáveis não possuem o mesmo valor!')
}


// OBSERVAÇÕES FINAIS:
// O operador == efetua uma comparação se os valores declarados são IGUAIS. Já o operador === efetua uma compação se os valores declarados são IDÊNTICOS, conferindo se os VALORES e os TIPOS são exatamente similares.