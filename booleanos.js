let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); // o sinal de exclamação representa uma negação e quando se tem dois ele cancela o primeiro e passa a valer o que foi dito no inicio


let exemplo = false;
console.log(!!exemplo); // ou seja, se alguma coisa é falsa e eu coloco a negação duas vezes, ela se mantem falsa

console.log('Os Verdadeiros...'); // daqui para baixo, teremos somente os valores que darão verdadeiro em JS.
console.log(!!-1);
console.log(!!' '); //mesmo que tenha texto dentro do espaço vazio ele retorna verdadeiro
console.log(!!'texto');
console.log(!![]);//array também é verdadeiro em js
console.log(!!{}); // um obejto também é verdadeiro
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // o valor da atribuição é verdadeira, não é se deu certo ou não


console.log('Os Falsos....');
console.log(!!0); //o zero sempre é falso
console.log(!!''); // a string vazia, sem espaço, ela volta como falso. Podemos usar quando formos passar uma string ela vai dizer se é verdadeiro ou falso.
console.log(!!null);
console.log(!!NaN);// se não for um número volta falso
console.log(!!undefined);
console.log(!!(isAtivo = false)); // ele vai ver o falso e só isso já basta para dizer que é falso

console.log('pra finalizar...');
console.log((''|| null || 0 || 'epa'|| "122")); // ele vai retornar o único ou o primeiro que achou verdadeiro
console.log(!!(''|| null || 0 || 'epa'|| "122")); // o 'ou' serve muito para dar um dado/valor padrão para uma determinada variável

let nome = '';
console.log(nome || 'Desconhecido'); // neste caso, mesmo sendo uma operação logica em string ele vai retornar caso encontre um nome
// como o nome não existe (não está preenchido), o valor é falso, então ele retorna o desconhecido
