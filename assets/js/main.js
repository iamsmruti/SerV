let navBtn = document.querySelector('.ham')
let navMenu = document.querySelector('.navMob')
let ham = document.querySelector('.ham i')

navMenu.classList.remove('menuIn')

let counter = 0;

navBtn.addEventListener('click', () =>{
    if(counter%2 == 0){
        navMenu.classList.add('menuIn')
        ham.classList.add('fa-times')
    } else {
        navMenu.classList.remove('menuIn')
        ham.classList.remove('fa-times')
    }
    counter++;
})

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".lds-roller").style.visibility = "visible";
    } else {
        document.querySelector(".lds-roller").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};