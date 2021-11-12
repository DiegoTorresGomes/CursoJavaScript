function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({})) //objeto vazio, sem necessidade de passar uma busca específica
//console.log(rand())//sem passar objeto ele gera problema, pois ele não tem oq tirar da função