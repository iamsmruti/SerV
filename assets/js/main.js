let navBtn = document.querySelector('.ham')
let navMenu = document.querySelector('.navMob')

navMenu.classList.remove('menuIn')

let counter = 0;

navBtn.addEventListener('click', () =>{
    console.log('clicked')
    if(counter%2 == 0)
        navMenu.classList.add('menuIn')
    else
        navMenu.classList.remove('menuIn')

    counter++;
})
