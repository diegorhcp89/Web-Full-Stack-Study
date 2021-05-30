// Adicionando elementos
const div = document.creatElemt('div');
div.innerText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)