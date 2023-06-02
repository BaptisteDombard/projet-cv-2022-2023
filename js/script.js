// burger menu
function toggleMenu(){
    const links = document.querySelector('.header__nav-position');
    const burger = document.querySelector('.header__nav-burgercontainer');
    burger.addEventListener('click',()=>{
        links.classList.toggle('toggled')
    })
}
toggleMenu();

//overview icon
const masked = document.querySelectorAll('.overview__logoitem:nth-child(n+9)');
const overview = document.querySelector('.overview__btn');

masked.forEach(function (logoitem){
    logoitem.classList.add('masked');
    overview.addEventListener('click', ()=>{
        logoitem.classList.toggle('masked');
    })
})
