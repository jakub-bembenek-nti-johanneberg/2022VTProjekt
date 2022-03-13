const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')
const cart = document.querySelector('.cart')

function toggleMeny() {

    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')
    cart.classList.toggle('cartUnactive')
}

document.querySelector('.burger').addEventListener('click', toggleMeny)

