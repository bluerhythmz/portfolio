let startBtn = document.getElementById('start');
let intro = document.querySelector('.intro');
let logo = document.getElementById('logo');
let mainPage = document.querySelector('.primary')
let aboutBtn = document.getElementById('about-btn')
let about = document.querySelector('.about-container')
let projectBtn = document.getElementById('project-btn')
let projects = document.querySelector('.project-container')
let contactBtn = document.getElementById('contact-btn')
let contact = document.querySelector('.contact-container')
let projectaIcons = document.querySelector('.project-a-icon')
let projectaIcons2 = document.querySelector('.project-a-icon2')
let projectA = document.querySelector('.project-a')

startBtn.addEventListener('click', function() {
    intro.style.opacity = "0";
    intro.style.zIndex = "-1";
    logo.style.bottom = "600px"
    mainPage.style.display = "block"
    mainPage.style.opacity = "1"
})

projectBtn.addEventListener('click', () => {
    projects.classList.add('active')
    about.classList.add('hide')
    about.classList.remove('active')
    contact.classList.add('hide')
    contact.classList.remove('active')
})

aboutBtn.addEventListener('click', () => {
    projects.classList.add('hide')
    about.classList.add('active')
    projects.classList.remove('active')
    contact.classList.add('hide')
    contact.classList.remove('active')
})

contactBtn.addEventListener('click', () => {
    projects.classList.add('hide')
    about.classList.add('hide')
    projects.classList.remove('active')
    about.classList.remove('active')
    contact.classList.add('active')
})

projectA.addEventListener('mouseover', () => {
    projectA.classList.add('background-dim')
    projectaIcons.classList.add('icon-show')
    projectaIcons.classList.remove('icon-hide')
    projectaIcons2.classList.add('icon-show')
    projectaIcons2.classList.remove('icon-hide')
})

projectA.addEventListener('mouseleave', () => {
    projectA.classList.remove('background-dim')
    projectaIcons.classList.add('icon-hide')
    projectaIcons.classList.remove('icon-show')
    projectaIcons2.classList.add('icon-hide')
    projectaIcons2.classList.remove('icon-show')
})