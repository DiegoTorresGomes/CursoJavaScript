const valores = [7.7, 8.9, 6.3, 9.2]; // no array para separar os elementos, 
console.log(valores[0], valores[3]); // ele vai imprimir somente o valores solicitados nos indices, vai retornar o indice 0 e o indice 3
console.log(valores[4]); // não temos um indice 4, no js não dá erro, oq pode ser um problema, ele imprime um undefined

valores[4] = 10;
console.log(valores); // imprimindo teremos a partir de agora um valor no indice 4
console.log(valores.length) //podemos acessar a quantidade de elementos de um array através do length - ele vai imprimir dizendo a quantidade que existe dentro de um array
// existe uma função de array chamada push, para adicionar novos elementos no array
valores.push({id: 3}, false, null, 'teste') // por js ser fracamente tipada, podemos passar diversos tipos diferentes de valores
console.log(valores);

console.log(valores.pop()); // ele vai tirar ultimo elemento do array e vai retornar este valor neste caso é o 'teste'
delete valores[0]; // ele vai deletar o primeiro elemento do indice do array que neste caso é o 7.7, como sacamos o teste ele não excluiu, só não pertence ao array
console.log(valores);

console.log(typeof valores)//array é um obejto em js