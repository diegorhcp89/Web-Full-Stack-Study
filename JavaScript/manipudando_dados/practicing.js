// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weigth)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (interger)
    * stars: Number (float)
    * isSbuscribed: Boolean
*/

let name = "Diego"
let age = 35
let starts = 4.8
let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinde mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atencão, subustitua <name><age> e <weigth> pelos valored de casa propriedade do objeto
*/

let student = {
    name: "Diego",
    age: 35,
    weigth: 74.8,
    isSubscribed: true,
}

console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weigth} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, 
    ou seja, somente o Array vazio
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
    (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

let students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const simone = {
    name: "Simone",
    age: 35,
    weight: 54.8,
    isSubscribed: true,
}

students[1] = simone
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
    Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/
undefined