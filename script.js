const max = document.getElementById('max-width')
const logo = document.getElementById('logo')

const home = document.getElementById('nav-items')
const projects = document.getElementById('nav-item')
const about = document.getElementById('nav-ite')
const contact = document.getElementById('nav-it')
const co = document.getElementById('nav-i')

const comment_name = document.getElementById('name')

const btn = document.getElementById('btn')
const first = document.getElementById('firstname')
const last = document.getElementById('last')
const mail = document.getElementById('mail')
const mess = document.getElementById('mess')
 
const start = document.getElementById('start')

const form = document.getElementById('form')

const comment = document.getElementById('comment')

const form_comment = document.getElementById('comment-form')

const send_comment = document.querySelector('.submit-comment')

const input_comment = document.getElementById('input-comment')

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
co.addEventListener('click', function(){
    window.scrollTo(0,4384)
})




form_comment.addEventListener('submit', (ev) => {
    ev.preventDefault()

    if(comment_name.value == ""){
        comment_name.value = "Anonymous"
    }
    

    let newName = document.createElement('p')
    newName.innerText = comment_name.value + " says:"
    newName.classList.add('comment-name')


    // comment.append(newName)

    let newComment = document.createElement('p')
    newComment.innerText = input_comment.value

    newComment.classList.add('comment-p')


    let newDiv = document.createElement('div')
    newDiv.classList.add('comment-sec')
    newDiv.appendChild(newName)
    newDiv.appendChild(newComment)

    comment.appendChild(newDiv)
    // comment.appendChild(deleteIcon)

    input_comment.value = ""
    comment_name.value = ""
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
        co.style.color = "#374151"

        

        home.style.transition = "all 0.5s ease"
        about.style.transition = "all 0.5s ease"
        projects.style.transition = "all 0.5s ease"
        contact.style.transition = "all 0.5s ease"
        co.style.transition = "all 0.5s ease"


        home.style.color = "#374151"

    } else{
        logo.style.color = "#eee"

        home.style.color = "#eee"
        about.style.color = "#eee"
        projects .style.color = "#eee"
        contact.style.color = "#eee"
        co.style.color = "#eee"

    }

}

