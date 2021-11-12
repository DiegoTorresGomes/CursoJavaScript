var numero = 1;
{
    var numero = 2;
    console.log('detro =', numero);
}
console.log('fora =', numero);
//numero 2 duas vezes, pois não é uma função, ai o var passa a ser escopo global.