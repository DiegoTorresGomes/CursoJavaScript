// Atribuição por referencia é quando definimos um objeto em uma variável quando vamos buscar este objeto, conseguimos identificar ou alterar ambos os resultados. Exemplo abaixo:
/* const a = {name: 'Teste'}
a
{name: 'Teste'}
const b = a
b.name = 'Opa'
'Opa'
a
{name: 'Opa'} isso roda no console do chrome */
// no exemplo acima, quando alteramos b, também alteramos a, pois a atibuição de um objeto é dada pela referencia e não pelo seu valor

// Quando trabalhamos com tipos primitivos da linguagem, deixamos de identificar por referencia e passamos a identificar por valor d tem seu valor e c tem seu valor, eles são independentes
//exemplo abaixo:

/* 
let c = 3
undefined
let d = c
undefined
d++
3
d
4
c
3 

No exemplo acima, só conseguimos alterar o valor de D e não de C, pois a atribuição foi por valor, por não ser um objeto. */

let valor; // não inicializada
console.log(valor); //undefined

valor = null; // ausencia de valor (significa Null)
console.log(valor);
//console.log(valor.toString()) // o nulo não tem nenhuma referencia para este toString, buscar sempre ter um valor padrão

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // não atribuir undefined nos códigos, deixar o programa definir se é ou não undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; // isso serve para referenciar se um produto realmente está sem preço, é de graça... e ai eu quero diferenciar o preço 0 do que está de graça
console.log(!!produto.preco);
console.log(produto);


