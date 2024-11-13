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
const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 1; // Start at the first actual image
let divImages = document.querySelectorAll('.carousel .divimg');

// Function to update the carousel position and indicators
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === (currentIndex - 1) % (divImages.length - 2));
    });
}

// Function to handle automatic sliding
function autoSlide() {
    currentIndex++;
    updateCarousel();
}

// Clone handling after transition
carousel.addEventListener('transitionend', () => {
    // Check if at the last cloned image
    if (currentIndex === divImages.length - 1) {
        carousel.style.transition = 'none';
        currentIndex = 1; // Jump back to the first actual image
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }

    // Check if at the first cloned image
    if (currentIndex === 0) {
        carousel.style.transition = 'none';
        currentIndex = divImages.length - 2; // Jump back to the last actual image
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }
});

// Start automatic sliding every 3 seconds
setInterval(autoSlide, 3000);

function addImage() {
    const newImageSrc = 'https://picsum.photos/id/240/700/800'; // Placeholder path for new image

    // Replace the first actual image's div (second child of the carousel)
    divImages[1].querySelector('img').src = newImageSrc;

    // Update indicators if needed
    divImages = document.querySelectorAll('.carousel .divimg');
    updateCarousel();
}
// GLOBAL VARIABLES FOR FORM
var userdata = [];
var modelbtn = document.querySelector(".main3 ,inner-main3-left .donation");
var cancelbtn = document.querySelector(".popup .form-container .cancel-btn");
var submitbtn = document.querySelector(".popup .form-container .submit-btn");
var popup = document.querySelector(".popup");
var foodnameEl = document.querySelector(".popup #food-name");
var quantityEl = document.querySelector(".popup #quantity");
var quantityunitEl = document.querySelector(".popup #quantity-unit");
var expirydateEl = document.querySelector(".popup #expiry-date");
var fromhourEl = document.querySelector(".popup #from-hour");
var fromperiodEl = document.querySelector(".popup #from-period");
var tohourEl = document.querySelector(".popup #to-hour");
var toperiodEl = document.querySelector(".popup #to-period");
var registerform = document.querySelector("#registerform");
var donationcard = document.querySelector(".donation-card");
var photoInput = document.getElementById("upload-image");
// var photoFile = photoInput.files[0];
// var photoURL = URL.createObjectURL(photoFile);

// applying eventlistners

modelbtn.addEventListener("click",function(){
    console.log("CLicked")
    popup.classList.add("show");
    
})
cancelbtn.addEventListener("click",function(){
   
    popup.classList.remove("show");


});
// submitbtn.addEventListener("click",function(){
//     // console.log("SClicked");

// });

// creating object for form 

submitbtn.onclick = function(e){
    e.preventDefault();
    registrationdata();
    registerform.reset('');
    cancelbtn.click();
}
// if(localStorage.getItem("foodData") != null){
//     userdata = JSON.parse(localStorage.getItem("foodData"));
// }

//  function registrationdata(){
//     userdata.push({
//         foodname : foodnameEl.value,
//         quantity : quantityEl.value,
//         quantityunit : quantityunitEl.value,
//         expirydate : expirydateEl.value,
//         fromhour : fromhourEl.value,
//         fromperiod : fromperiodEl.value,
//         tohour : tohourEl.value,
//         toperiod : toperiodEl.value,
//         photourl : photoInput.value,
//     });
//     var foodString = JSON.stringify(userdata);
//     localStorage.setItem("foodData", foodString);
//  }

//  const getdatafromlocal = ()=>{
    
//     userdata.forEach((data) => {
//         var div = document.createElement("div");
//         div.classList.add("donation-card");
//         document.querySelector()
//     })
//  }