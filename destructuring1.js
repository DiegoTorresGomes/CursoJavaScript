//operador de desestruturação - ele tira da estrutura (um objeto), é uma forma de tirar os elementos de um array ou objeto a partir da forma de extrair
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero:1000
    }
}

const{nome, idade} = pessoa //aqui estamos extraindo do objeto e tornando elas variáveis 'nome' e 'idade' do obejto 'Pessoa'
console.log(nome, idade)

const {nome: n, idade: i } = pessoa //aqui estamos extraindo nome e idade e transformando as variáis em n para nome e i para idade do objeto pessoa.

console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //aqui estamos pedindo para extrair uma sobrenome que não existe (não foi nem tocada) e bemHumorada que atribuimos verdadeiro
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)