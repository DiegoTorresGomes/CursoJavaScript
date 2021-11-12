const prod1 = {};// oq define um objeto em js é o seu par de chaves
// em js podemos criar um objeto e definir como este obejto é, quais são os atributos dele dinamicamente
prod1.nome = 'Celular ultra Mega' // esse 'nome' veio de onde ? esse 'nome' foi criado dinamicamente dentro de objeto
// o que é um objeto ? objeto em js é uma colação de chaves e valor - temos o nome do atributo (ou seja o identificador) e passamos um valor pra ele que pode ser um texto, um numero...
//pode ser um boolean, uma funcão
//o objeto pode ter um outro objeto dentro dele, podemos ter um objeto produto e dentro objeto produto outro objeto chamado categorias
prod1.preco = 4998.90;// dentro de um objeto só podemos ter um identificador unico
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo', 
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
// acima um exemplo de objetos dentro de objetos
console.log(prod2);