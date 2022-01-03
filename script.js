const max = document.getElementById('max-width')
const logo = document.getElementById('logo')

const home = document.getElementById('nav-items')
const projects = document.getElementById('nav-item')
const about = document.getElementById('nav-ite')
const contact = document.getElementById('nav-it')


home.addEventListener('click', function(){
    window.scrollTo(0, 0)
    console.log(window.screenY);
})
projects.addEventListener('click', function(){
    window.scrollTo(0, 600)
})
about.addEventListener('click', function(){
    window.scrollTo(0, 2207)
})
contact.addEventListener('click', function(){
    window.scrollTo(0, 3806)
})



window.onscroll = function(){
    var top = window.scrollY;

    console.log(top)

    if(top >= 540 && top <= 2145 || top >= 3800){
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

