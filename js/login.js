
const a = document.querySelector('.overlay');
const b =  document.querySelector('.login-form');
function showModal(){
    a.classList.add('show-overlay');
    b.classList.add('show-form');
}

function closeModal(){
    a.classList.remove('show-overlay');
    b.classList.remove('show-form');
}

const c = document.querySelector("span");

c.addEventListener('click' , closeModal);




