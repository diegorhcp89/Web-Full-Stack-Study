/*

    Buscando e contando dados em Arrays

    Baseando no Array de Livreos por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformat a função acima em uma função que irá receber o nome do autor e
        devolver os libros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da minte milionária",
                author: "T. Hary Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                autohor: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

/*
function booksOfAugustoCury() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
           if(book.author === 'Augustro Cury') {
               books.push(book.title)
           }
        }
    }

    console.log("Livros do autor: ", books)
}

booksOfAugustoCury();
*/

function booksOfAuthor(author) {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
           if(book.author === author) {
               books.push(book.title)
           }
        }
    }

    console.log(`Livros do author ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');