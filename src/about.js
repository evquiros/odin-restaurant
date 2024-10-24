function displayAbout() {
    const content = document.querySelector('#content')
    content.innerHTML = ''

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Hello World'

    content.appendChild(h1)
}

export {displayAbout}