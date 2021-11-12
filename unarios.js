let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //num1 vale 2 neste momento e ele vai compara antes de diminuir o num2 e só depois de comparar ele vai diminuir 1
console.log(num1 === num2) //aqui é diferente pq ele ja diminuiu 1 e com isso o num2 vale 1 e o num1 vale 2 aqui nesta linha