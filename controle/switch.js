const imprimirResultado = function (nota) {
    switch (Math.floor (nota)) {
        case 10: //podemos ter multiplas sentenças entre um case e outro
        case 9:
            console.log ('Quadro de Honra') // colocando o case, ele olha estas linhas de case e imprime o que foi colocado neste console.log
            break //se não colocar o break ele executa todos os abaixo sem parar
        case 8: case 7:
            console.log ('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //não é obrigado colocar o default no final, mas temos que ter o cuidado de colocar o break
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)