// Manipulando Strings e Números

// Transformar String em Número e Número em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos cartered tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word = "Programar é muito bacana!"
console.log(word.toUpperCase()) // Maiúsculas
console.log(word.toLowerCase()) // Minúsculas

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posiçãp dp array.
Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let pharaseWithUnderscore = myArray.join("_")

// Verificar se o texto conttém a palavra Amor
let phrase = "Eu quero morrer!"
console.log(phrase.includes("Amor"))

//Criar Array com construtor
let myArray = new Array('a', 'b', 'c')

// Contar elementos de um Array
console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))