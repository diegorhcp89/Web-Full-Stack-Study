/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Diego')
name.surName = "Amaral"
let age = new Number(35)
console.log(name.surName, age)

let date = new Date('2020-12-01')
console.log(date._proto_)