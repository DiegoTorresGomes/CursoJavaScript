//pessoa -> 123(endereço de memoria) ->{...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa -> 456 -> {...} como a constante pessoa já existe anteriormente e um objeto já foi atribuido, não é possivel atribuir novo objeto de novo valor
//pessoa = {nome : 'Ana'} //irá dar erro

Object.freeze(pessoa) // com este comando o objeto passa a ser contante e ninguem consegue mudar ele

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'}) //criei um objeto constante que não poderá ser alterado
console.log(pessoaConstante)