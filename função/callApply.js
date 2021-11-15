function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// a diferença de passar com call e com apply são os parametros
console.log(getPreco.call(carro, 0.17, '$')) //no call eu passo diretamente nos parametros do call cada um dos parametros que serão utilizados
//o primeiro parametro sempre é o contexto, neste casso a variável idicada no inicio
console.log(getPreco.apply(carro, [0.17, '$'])) //ele espera que os parametros estejam dentro de um array