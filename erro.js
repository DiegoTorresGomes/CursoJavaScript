function tratarErroELancar(erro) { //throw singnifica lançar
   // throw new Error('...');
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    }finally {
        console.log('final')
    }
    
}

const obj = { name: 'Roberto'}
imprimirNomeGritado (obj)