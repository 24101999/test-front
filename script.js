const siteMobile = document.querySelector('.nav-low-sites')
const siteMobileButton = document.querySelector('.site-mobile-modal-titulo')
const siteLowNav = document.querySelector('.nav-low-sites-sites')
const span = document.getElementById('span')
const spanSiteMoblie = document.getElementById('span-site-mobile')
const spanMobile = document.getElementById('span-mobile')
const modalMobile = document.querySelector('.mobile-modal')
const header = document.querySelector('header')
const btmodal = document.querySelector(".button-modal")
const modalSiteMoblie = document.querySelector(".modal-site-mobile-modal")
const infoNav = document.querySelector(".info-nav-low-sites-sites")
const input = document.querySelectorAll('.input')
const button = document.querySelector('.button-input')

button.addEventListener('click',(bt)=>{
    input.forEach((inp)=>{
    if(inp.value == ''){
    inp.placeholder = 'campo vazio'
    inp.classList.add('active')
    bt.preventDefault()
    }
    else{
        inp.classList.remove('active')
    }
    })
})


siteLowNav.addEventListener('click',()=>{
infoNav.classList.toggle("active")
span.classList.toggle("active")
})

siteMobileButton.addEventListener('click',()=>{
    spanSiteMoblie.classList.toggle('active')
modalSiteMoblie.classList.toggle('active')
})

spanMobile.addEventListener('click',()=>{
    modalMobile.classList.toggle('active')
    header.classList.toggle('active')
})

btmodal.addEventListener('click',()=>{
    modalMobile.classList.remove('active')
    header.classList.remove('active')
})
// spanSiteMoblie.addEventListener('click',()=>{
//     spanSiteMoblie.classList.toggle('active')
// modalSiteMoblie.classList.toggle('active')
// })
