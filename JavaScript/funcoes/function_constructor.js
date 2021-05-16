/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const diego = new Person("Diego")
const joao = new Person("João")
console.log(diego.walk())
console.log(joao.walk())