const max = document.getElementById('max-width')
const logo = document.getElementById('logo')

const home = document.getElementById('nav-items')
const projects = document.getElementById('nav-item')
const about = document.getElementById('nav-ite')
const contact = document.getElementById('nav-it')

const btn = document.getElementById('btn')
const first = document.getElementById('firstname')
const last = document.getElementById('last')
const mail = document.getElementById('mail')
const mess = document.getElementById('mess')
 
const start = document.getElementById('start')

const form = document.getElementById('form')


home.addEventListener('click', function(){
    window.scrollTo(0, 0)
})
projects.addEventListener('click', function(){
    window.scrollTo(0, 600)
})
about.addEventListener('click', function(){
    window.scrollTo(0, 2207)
})
contact.addEventListener('click', function(){
    window.scrollTo(0, 3507)
})




window.onscroll = function(){
    var top = window.scrollY;

    console.log(top)

    if(top >= 540 && top <= 2145 || top >= 3430){
        console.log(top)
        logo.style.color = "#374151"
        logo.style.transition = "all 0.5s ease"

        home.style.color = "#374151"
        about.style.color = "#374151"
        projects .style.color = "#374151"
        contact.style.color = "#374151"

        

        home.style.transition = "all 0.5s ease"
        about.style.transition = "all 0.5s ease"
        projects.style.transition = "all 0.5s ease"
        contact.style.transition = "all 0.5s ease"


        home.style.color = "#374151"

    } else{
        logo.style.color = "#eee"

        home.style.color = "#eee"
        about.style.color = "#eee"
        projects .style.color = "#eee"
        contact.style.color = "#eee"

    }

}

