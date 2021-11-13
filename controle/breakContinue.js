//o break causa um desvio de fluxo (que é sair de um ponto e pular algumas linhas para um outro ponto)
//o break não influencia em um bloco do tipo if, ele influencia no switch (causando a saída logo), ele tbm influencia dentro de um laço for e dentro de um laço while
//o continue influiencia dentro de um laço for e dentro de um laço while

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break //o break não age em cima de um bloco if, o break vai agir em cima de um bloco mais proximo dele do tipo for, do tipo while ou do tipo switch
    }
    console.log (`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) continue // ele vai interromper a repetição atual e vai direto pra a proxima repetição
    console.log(`${y} = ${nums[y]}`) // neste código ele encontrou o indice 5 pulou e foi para a próxima
}

//a extrutura abaixo não é para usar e sempre trabalhar melhor as estruturas
/*externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par  = ${a}, ${b}`)
    }
}*/
