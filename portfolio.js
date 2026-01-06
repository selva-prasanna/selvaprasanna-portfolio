
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
};

// todo reveal animation 

var sliderCounter = 0;
var sliderContent = [
    "Frontend Developer",
    "Fullstack Developer",
    "Backend Developer",
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
}

slide();
setInterval(slide, 2000);

// ?email.js

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let params = {
        from_name: document.getElementById('full_name').value,
        email_id: document.getElementById('email_id').value,
        phn_num: document.getElementById('phn_num').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_di6q7gd", "template_2vy69ig", params)
        .then(() => {
            alert('Your message has been sent successfully!');
            document.getElementById('full_name').value = "";
            document.getElementById('email_id').value = "";
            document.getElementById('phn_num').value = "";
            document.getElementById('message').value = "";
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});
