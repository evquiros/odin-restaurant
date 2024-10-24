function displayAbout() {
    const nav = document.querySelector('nav')
    nav.classList.add('nav-about')

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.classList.add('button-about')
    });

    const content = document.querySelector('#content')
    content.innerHTML = ''

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Hello World'

    content.appendChild(h1)
}

export {displayAbout}