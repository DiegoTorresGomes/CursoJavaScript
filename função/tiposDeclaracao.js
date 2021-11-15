// function declaration - a vantagem deste tipo de função é que eu posso chamar antes da declaração
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression que a função nomeada
const mult = function mult(x, y) {
    return x * y
}

console.log(soma(5, 10))
console.log(sub(5, 10))
console.log(mult(5, 10))