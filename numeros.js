const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //toFixed permite com que eu coloque o número de casas decimais que eu quero que apareça
console.log(media.toString()); //toString transforma o valor da minha variável para String
console.log(media.toString(2)); //toString transforma o valor da minha variável em binário
console.log(typeof media);
console.log(typeof Number);