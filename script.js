/*==================================================
                PORTFOLIO SCRIPT.JS
==================================================*/

// ============================
// PRELOADER
// ============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

    preloader.style.transition = "0.6s";

});

// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menu-btn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ============================
// DARK / LIGHT MODE
// ============================

const themeBtn = document.getElementById("theme-btn");

const body = document.body;

themeBtn.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// ============================
// TYPING EFFECT
// ============================

const words = [

    "AI & Data Science Student",

    "Python Developer",

    "Web Developer",

    "Machine Learning Enthusiast",

    "Embedded Systems Learner"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ============================
// ACTIVE NAVIGATION
// ============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ============================
// SCROLL REVEAL
// ============================

const reveals = document.querySelectorAll(

    ".project-card,.certificate-card,.timeline-item,.about-image,.about-content,.skill"

);

function revealElements() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("fade-up");

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

// ============================
// BACK TO TOP BUTTON
// ============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ============================
// PROGRESS BAR ANIMATION
// ============================

const bars = document.querySelectorAll(".bar");

function animateBars() {

    bars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

window.addEventListener("load", animateBars);

// ============================
// CONTACT FORM
// ============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}

// ============================
// CONSOLE MESSAGE
// ============================

console.log(

"%cPortfolio Developed by Eman Harish",

"color:#00d9ff;font-size:18px;font-weight:bold;"

);

console.log(

"%cArtificial Intelligence & Data Science Portfolio",

"color:white;font-size:14px;"

);

/*==================================================
                END OF SCRIPT.JS
==================================================*/
