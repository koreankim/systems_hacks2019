const FILES = [
    "",
    'https://i.imgur.com/Z9T53LC.png',
    'https://i.imgur.com/QDAWkLj.png',
    'https://i.imgur.com/StGJeI7.png',
    'https://i.imgur.com/kh5mIz3.png',
    'https://i.imgur.com/oevyWoB.png',
];

let divs = document.querySelectorAll("div");

let index = Math.floor((Math.random() * FILES.length));
let file = FILES[index];

document.body.style.backgroundImage = "url('" + file + "')";

/* Marquee */
let tags = document.querySelectorAll('h3');

for (let i = 0; i < tags.length; i++) {
    tags[i].outerHTML = tags[i].outerHTML.replace(/h3/g, 'marquee');
}

/* End of Marquee */