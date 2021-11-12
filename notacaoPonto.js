console.log(Math.ceil(6.1))// ceil arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2', esta aula é para falar de notação ponto
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome //significa o nome associado ao objeto que for criado a partir desta função
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()