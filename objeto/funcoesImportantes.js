const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //todas as chaves
console.log(Object.values(pessoa)) //todos os valores dentro das chaves
console.log(Object.entries(pessoa)) //pegando uma lista tanto das chaves quando dos valores. Vai me dar um array com todos os elementos. posso percorrer este array com forEach ou map

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, 
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/20117' 
console.log(pessoa.dataNascimento) //não vai puxar este
console.log(Object.keys(pessoa))

//object.assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // o objeto a sera sobrescrito
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)