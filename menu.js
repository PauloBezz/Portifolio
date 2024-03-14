let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("conteudo-menu")
let over = document.getElementById("over")

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

over.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})