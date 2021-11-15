const valor = 'Global'

function minhaFuncao() {
    console.log(valor) //vai achar a função no escopo global, pois é onde ela foi definida
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()