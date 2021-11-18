const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c } //essa notação permite mudar o nome do atributo, de a, b ou c
const obj2 = { a, b, c } //para os valores de a, b e c só receberem os valores das constantes A, B e C, não preciso escrever como o de cima
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2 () {
        //...
    }
}

console.log(obj5)