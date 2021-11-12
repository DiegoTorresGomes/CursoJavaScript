const escola = "Cod3r";

console.log(escola.charAt(4));// ou seja charAt vai retornar a 4º letra que está dentro da string - sempre da esquerda pra direita e o indice sempre é 0.
console.log(escola.charAt(5));// como js é uma linguagem mais tranquila, ela não vai reconhecer isso como um erro, vai simplesmente mostrar que está vazio, ou seja, não achou 
//uma letra no local ao qual eu referenciei.
console.log(escola.charCodeAt(3)); // o charCodeAt vai buscar na tabela UNICODE o que representa o numeral 3 e retornar para nós
console.log(escola.indexOf('r')); // ele vai fazer o inverso, vai me passar em que dígito ele está na palavra ou da frase, neste caso o r é o quarto indice da palavra.
console.log(escola.substring(1)); // ele vai imprimi no console do indice 1 para frente, neste caso o indice 0 é o C e o indice 1 é o 'o', sendo assim ele vai imprimir 'od3r'
console.log(escola.substring(0,3)); // neste caso ele vai incluir o indice zero, porém não vai incluir o indice 3
console.log('Escola '.concat(escola).concat("!")); // ele vai concatenar, ou seja, juntar tudo e imprimir no console, seja uma variável ou uma string solta
console.log(escola.replace(3, 'e')); // ele vai substituir o numeral 3 pela letra 'E'
console.log(escola.replace(/\w/g, 'e')); // onde /\d/ representa uma expressão regular que vai substituir todos os digitos dentro do texto pela letra 'e'. onde g = global e w é a primeira letra
console.log('Ana,Maria,Pedro'.split(',')); // esse .split vai transformar tudo em um array
