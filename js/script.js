//menu scroll size
function scrollMenuSize(){
    const header = document.querySelector('.header');
    const nav = document.querySelector('.header__nav');
    const logo = document.querySelector('.header__nav-logocontainer');
    const onboarding = document.querySelector('.onboarding');

    window.addEventListener('scroll',()=>{
        if (window.scrollY!==0){
            logo.classList.add('small');
            header.classList.add('smallmenu');
            onboarding.classList.add('smaller');
            nav.classList.add('nopadding');
        } else if (window.scrollY===0){
            logo.classList.remove('small');
            header.classList.remove('smallmenu');
            onboarding.classList.remove('smaller');
            nav.classList.remove('nopadding');
        }
        console.log(window.scrollY);
    })
}
scrollMenuSize();

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
