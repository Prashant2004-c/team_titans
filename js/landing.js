let menubtn = document.querySelector("nav ul #menubtn");
let closebtn = document.querySelector(".sidebar #sidebar-logo i");
let sidebar = document.querySelector("nav .sidebar");
let prevnav = document.querySelector("nav .prenav");
menubtn.addEventListener("click",function(){
    sidebar.style.display = "inline";
    // prevnav.style.display = "none";
    // prevnav.parentElement.style.backgroundColor = "white";
    // prevnav.parentElement.style.borderBottom = "none";
    // console.log("clickd");
});
closebtn.addEventListener("click",function(){
    sidebar.style.display = "none";
    // prevnav.style.display = "inline";
    // prevnav.parentElement.style.backgroundColor = "lightseagreen";
    // prevnav.parentElement.style.borderBottom = "1px solid #cbc9c9";
    
});
let joinbtn = document.querySelector(".main-down-register");
joinbtn.addEventListener("click",() =>{
    window.open("registration.html","_blank");
});

let loginbtn = document.querySelector(".login-btn");
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

// trash code

