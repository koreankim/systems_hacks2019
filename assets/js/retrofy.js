const FILES = [
    'https://i.imgur.com/Z9T53LC.png',
    'https://i.imgur.com/QDAWkLj.png'
];

let divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
    let index = (Math.random() % FILES.length);
    let file = FILES[index];
    divs[i].style.backgroundImage = "url('"+ file + "')"; 
}