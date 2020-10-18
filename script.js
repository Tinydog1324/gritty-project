const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const grittyBorder = document.getElementById('gritty-border');
const gritterForm = document.getElementById('gritter-form');


let rotation = 0;


function toggleGritty() {
    console.log('FIRING')
    const gritty = document.getElementById('toggle-gritty');
    toggleVisibility(gritty);
}

function rotateGritty(event) {
    const gritty = document.getElementById('small-gritty');
    rotate(gritty, event);
}

function addGreet(event) {
    event.preventDefault();
    const greet = gritterForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;
    const greets = document.getElementById('greets').getElementsByTagName('ul')[0];
    const newerGreetLi = greets.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    gritterForm.greet.value = "";
}



function toggleVisibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}


function rotate(element, event) {
    if (event.target.id === 'rotate-left-button') {
        rotation = rotation - 15;
    } else {
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
} 


grittyBorder.onmouseenter = toggleGritty;
grittyBorder.onmouseleave = toggleGritty;
rotateLeftButton.onclick = rotateGritty;
rotateRightButton.onclick = rotateGritty;
gritterForm.onsubmit = addGreet;

