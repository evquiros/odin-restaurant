import about from './assets/about.jpg'

function displayMenu() {
    const nav = document.querySelector('nav');
    nav.classList.remove('nav-home', 'nav-about');
    nav.classList.add('nav-menu');

    const body = document.querySelector('body');
    body.classList.remove('body-home', 'body-about');
    body.classList.add('body-menu');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('button-home', 'button-about');
        button.classList.add('button-menu');
    });

    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.classList.remove('content-home', 'content-about');
    content.classList.add('content-menu');

    const menu_intro = document.createElement('div');
    menu_intro.classList.add('menu-intro');

    const title = document.createElement('p');
    title.classList.add('title')
    title.textContent = 'STEAKS';

    const img = document.createElement('img');
    img.src = about;
    menu_intro.appendChild(title);
    menu_intro.appendChild(img);

    const products = document.createElement('div');
    products.classList.add('products');

    const productList = [
        {
            name: 'Filet',
            details: '7 oz. Center Cut, 10 oz. Double cut',
            price: '$14.49'
        },
        {
            name: 'Bone in filet',
            details: '10 oz Greg Norman Ranch, Australia',
            price: '$20.50'
        },
        {
            name: 'New York Strip',
            details: '9 oz. Center Cut, 12 oz. Double cut',
            price: '$9.99'
        },
        {
            name: 'Porterhouse',
            details: '7 oz. Center Cut, 10 oz. Double cut',
            price: '$7.99'
        },
        {
            name: 'Delmonico',
            details: '10 oz Greg Norman Ranch, Australia',
            price: '$17.99'
        },
        {
            name: 'Ribeye',
            details: '12 oz. Hand-Cut',
            price: '$18.99'
        }
    ];

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const item = document.createElement('p');
        item.textContent = product.name;

        const priceDetailDiv = document.createElement('div');
        priceDetailDiv.classList.add('price-detail');

        const detail = document.createElement('p');
        detail.textContent = product.details;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = product.price;

        priceDetailDiv.appendChild(detail);
        priceDetailDiv.appendChild(price);
        productDiv.appendChild(item);
        productDiv.appendChild(priceDetailDiv);

        products.appendChild(productDiv);
    });

    content.appendChild(menu_intro);
    content.appendChild(products);
}

export { displayMenu };
