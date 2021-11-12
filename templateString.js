const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'
const template =`
    Olá
    ${nome}!` // esse é o acento craseado para criar um template para concatenar textos que precisam ser escritos em varias linhas, para ser possível quebrar estas linhas.
    console.log(concatenacao, template);
// expressoes... é possível colocar expressões também, facilitando grandes expressoes
console.log(`1 + 1 = ${1 + 1 }`); // neste caso ele só soma o que está dentro do sifrão e chaves

const up = texto => texto.toUpperCase() // é uma fução que vai converter algo para maiusculo, neste caso texto é o parametro
console.log(`Eii... ${up('cuidado ai')}!`); // tudo que está em UP foi passado para maiusculo
