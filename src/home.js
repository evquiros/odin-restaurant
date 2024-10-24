import logo_intro from './assets/logo_intro.png'

function displayHome() {
    const body = document.querySelector('body')
    body.classList.add('body-home')
    
    const nav = document.querySelector('nav')
    nav.classList.add('nav-home')

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.classList.add('button-home')
    });

    const content = document.querySelector('#content')
    content.innerHTML = ''

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const img = document.createElement('img')
    img.src = logo_intro

    const welcome = document.createElement('p')
    welcome.innerHTML = 'WELCOME TO RESTAURANT'

    content.appendChild(logo)
    logo.appendChild(img)
    content.appendChild(welcome)
}

export {displayHome}