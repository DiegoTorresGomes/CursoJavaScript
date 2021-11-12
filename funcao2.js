//Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));


//retorno implicito - o exemplo abaixo vai fazer exatamente a mesma coisa que o exemplo de cima, porém de uma forma mais reduzia, 
//sem a palavra return e com isso só é possível fazer em uma linha de código
//o exemplo abaixo é muito usado para calculos de uma única linha
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

//nesta aula vimos que é possível pegar uma função e atribuir em uma variável