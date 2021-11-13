function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

//codigo abaixo é um exemplo de como não fazer
function test2(num) {
    if (num > 7); //não use ponto e vígula na definição de um bloco if
    
    {
         console.log(num)
    }
}

test2(6)
test2(8)