const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})


const contactForm = document.querySelector('.contact-form');
let nam = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        name: nam.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent!');
            nam.value = '';
            email.value = '';
            message.value = '';
        } else {
            alert('Something Went Wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));
});