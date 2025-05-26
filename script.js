$(document).ready(function () {
    // Navbar toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and load handling
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
        // Scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // EmailJS
    $("#contact-form").submit(function (event) {
        emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form submitted successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form submission failed! Try again");
            });
        event.preventDefault();
    });

    // Read More/Read Less for Writing section
    $('.read-more').click(function (e) {
        e.preventDefault();
        const $content = $(this).closest('.content').find('.essay-content');
        $content.addClass('active');
        $(this).hide();
        $(this).siblings('.read-less').show();
    });
    $('.read-less').click(function (e) {
        e.preventDefault();
        const $content = $(this).closest('.content').find('.essay-content');
        $content.removeClass('active');
        $(this).hide();
        $(this).siblings('.read-more').show();
    });
});

// Favicon toggle
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Saad Sohail";
        $("#favicon").attr("href", "./assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "./assets/images/favhand.png");
    }
});

// Typed.js
var typed = new Typed(".typing-text", {
    strings: ["web development", "AI/ML", "Python coding", "problem solving"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Skills fetch
async function fetchData() {
    try {
        let response = await fetch("skills.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});

// VanillaTilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// ScrollReveal
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// Scroll animations
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .socials .social-icons li', { interval: 600 });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .btn', { delay: 200 });
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });
srtop.reveal('.projects .box-container .box', { interval: 200 });
srtop.reveal('.writing .box-container', { interval: 200 });
srtop.reveal('.hobbies .timeline', { delay: 400 });
srtop.reveal('.hobbies .timeline .container', { delay: 400, interval: 200 });
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });