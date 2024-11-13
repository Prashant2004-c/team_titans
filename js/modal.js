let modelbtn = document.querySelector(".modal");
let cancelbtn = document.querySelector(".popup .form-container .cancel-btn");
let submitbtn = document.querySelector(".popup .form-container .submit-btn");
let popup = document.querySelector(".popup");
modelbtn.addEventListener("click",function(){
    popup.classList.add("show");
    
})
cancelbtn.addEventListener("click",function(){
   
    popup.classList.remove("show");


});
submitbtn.addEventListener("click",function(){
    // console.log("SClicked");

});