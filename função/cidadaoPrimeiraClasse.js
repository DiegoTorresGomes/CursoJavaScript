//Função em js é First-class Object (citizens)
//higher-order function

//cria de forma literal
function fun1() { } //usando a palavra function e o nome da função que neste caso é o fun1
//podemos passar dentro dos parenteses uma lista de paramentros e dentro do corpo da função (dentro das chaves) o bloco que é obrigatório
//o retorno de uma funcção js é opcional e caso não retorne nada a função retorna Undefined
//se chamar o return vai retornar eu o que eu passei para o return

//armazenar em uma variável
const fun2 = function (){ }
// no caso acima eu criei uma função anonima atribui a uma constante

//podemos armazenar uma função dentro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar atributos de um objeto
const obj = {}
obj.falar = function() {return 'OPA'}
console.log(obj.falar())

//Passar função como parametros para outra função
function run(fun){
    fun()
}
run(function () {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3) (4)