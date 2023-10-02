
// let menu = document.querySelectorAll("li");
// let options = document.querySelectorAll(".options");
// let activePage = document.querySelectorAll(".online");

// function active(element){ 
//     if(activePage[i]=options[i]){
//         li.classList.add("active");
//     }
// }
// console.log(window.location.href);


let popUp = document.getElementById("popup");
let input = document.getElementById("input");

function openPopUp(){
        popUp.style.display = "block";
    }


let form = document.getElementById("contactForm");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    openPopUp()
})

function closePopUp(){
    popUp.style.display = "none";
}