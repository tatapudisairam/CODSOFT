const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, 
           .work__card,
           .experience,
           .education,
           .contact__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.about__img, .skills__tabs`, {
    origin: 'left'
})

sr.reveal(`.about__data, .skills__content`, {
    origin: 'right'
})


document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".auto__type", {
        strings: [ "a FullStack Developer", "an App Developer"],
        typeSpeed: 100,  
        backSpeed: 50,  
        loop: true
    });
});


const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')
      tabs.forEach(tab => {
        tab.addEventListener('click', ()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
      })

 
let mixerWorks = mixitup('.work__container', {
    selectors:{
        target:'.work__card'
    },
    animation:{
        duration:300
    }
});     


const linkWork = document.querySelectorAll('.work__item')
function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener('click', activeWork))



document.addEventListener('click', (e)=>{
    if(e.target.classList.contains("work__button")){
        tooglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function tooglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener('click', tooglePortfolioPopup)
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
    
}

const inputs = document.querySelectorAll('.input');
function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add('focus');
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value==""){
        parent.classList.remove('focus');
    }
}
inputs.forEach((input)=>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc)
})



const scriptURL = 'https://script.google.com/macros/s/AKfycbyM3cZiSCm6ULkNv0qQWTCNb17_xJ7NyIww-dvN4a9snmz3DrY-IV6kIFM-OrgOI41J/exec'
        const form = document.forms['submiting-to-sai']

        const msg = document.getElementById('msg')
      
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = '<span style="color: green;">Message sent successfully</span>';
                    setTimeout(function(){
                        msg.innerHTML = "";
                    }, 3900);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });
        