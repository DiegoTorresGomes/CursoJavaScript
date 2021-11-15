//Factory simples - Factory é uma função que no final ela retorna um objeto, sempre retorna um objeto
function criarPessoa (){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//o exemplo assima substitui o abaixo para evitar estas repetições
/*
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 45
} */