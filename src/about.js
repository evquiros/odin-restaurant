import about from './assets/about.jpg'

function displayAbout() {
    const nav = document.querySelector('nav')
    nav.classList.remove('nav-home', 'nav-menu')
    nav.classList.add('nav-about')

    const body = document.querySelector('body')
    body.classList.remove('body-home', 'body-menu')
    body.classList.add('body-about')

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.classList.remove('button-home', 'button-menu')
        button.classList.add('button-about')
    });

    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.classList.remove('content-home', 'content-menu')
    content.classList.add('content-about')

    const intro = document.createElement('div')
    intro.classList.add('intro')

    const h2 = document.createElement('h2')
    h2.innerHTML = 'ABOUT US'

    const p = document.createElement('p')
    p.innerHTML = `We’re as passionate about exceptional dining as you are. Since 1999, we've been dedicated to creating unforgettable experiences, filling tables with friends, family, and incredible food. Welcome to Savor & Spice, where every meal is a celebration of flavor, community, and warmth.`

    const container = document.createElement('div')
    container.classList.add('container')

    const left = document.createElement('div')
    left.classList.add('left')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'The History'

    const left_p = document.createElement('p')
    left_p.innerHTML = `Nestled in the heart of the city, 'Savor & Spice' began as a modest dream shared by two lifelong friends with a passion for culinary art and a dedication to fresh, locally sourced ingredients. Established in 1999, the restaurant quickly gained a loyal following for its unique blend of traditional recipes and innovative dishes, designed to bring people together over delicious, heartwarming meals. With each passing year, Savor & Spice has grown, but it has always stayed true to its roots, keeping quality and community at the center of every dish. Whether you’re a longtime guest or a first-time visitor, we invite you to join us and experience the flavors that have made Savor & Spice a beloved local gem.`

    const right = document.createElement('div')
    right.classList.add('right')

    const img = document.createElement('img')
    img.src = about

    content.appendChild(intro)
    intro.appendChild(h2)
    intro.appendChild(p)

    content.appendChild(container)
    container.appendChild(left)
    left.appendChild(h1)
    left.appendChild(left_p)

    container.appendChild(right)
    right.appendChild(img)
}

export {displayAbout}