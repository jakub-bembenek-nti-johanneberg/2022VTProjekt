const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function toggleMeny() {

    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')

}

document.querySelector('.burger').addEventListener('click', toggleMeny)