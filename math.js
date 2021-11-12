const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2); // PI é uma constante dentro de Math / Math.pow passa dois parametros um é o raio e o 2 é elevando o raio ao quadrado
// essa é uma forma de elevar um número ao quadrado, tendo em vista que o JS não possui um operador que faça isso.
// ou seja o math é um objeto que junto com o pow(que significa power) calcula a potência / sendo assim math.pow(parametro1, elevado a) vai calcular a potenciação.

console.log(area);
console.log(typeof Math);