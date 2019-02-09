const FILES = [
    "",
    'https://i.imgur.com/Z9T53LC.png',
    'https://i.imgur.com/QDAWkLj.png'
];

let divs = document.querySelectorAll("div");

let index = Math.floor((Math.random() * FILES.length));
let file = FILES[index + 1];

// for (let i = 0; i < divs.length; i++) {    
//     divs[i].style.backgroundImage = "url('"+ file + "')"; 
// }

document.body.style.backgroundImage = "url('"+ file + "')"; 