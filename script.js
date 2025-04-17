let box = document.createElement('h1');
let name = prompt("Введите своё имя");

box.innerText = name.toUpperCase();
document.body.appendChild(box);

document.body.style.backgroundColor = 'blue';
box.style.color = 'yellow';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.alignContent = 'center';