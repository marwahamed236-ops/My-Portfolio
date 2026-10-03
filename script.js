/* ================================
   LOADER
================================ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 800);

});


/* ================================
   NAVBAR
================================ */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================================
   TYPING EFFECT
================================ */

const typingElement = document.getElementById("typing");

const words = [
    "Front-End Developer",
    "Computer Science Student",
    "Creative Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}

typeEffect();


/* ================================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================================
   ACTIVE NAV LINK
================================ */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================================
   SCROLL PROGRESS
================================ */

const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${progress}%`;

});


/* ================================
   BACK TO TOP
================================ */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================================
   MAGNETIC BUTTONS
================================ */

const magneticButtons =
    document.querySelectorAll(".magnetic");


magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ================================
   CARD TILT
================================ */

const cards =
    document.querySelectorAll(".info-card, .project-card");


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 18;

        const rotateY =
            (centerX - x) / 18;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-7px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================================
   CURRENT YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ================= PROJECT PREVIEW ================= */

const projects = {

    project1: {
        title: "Project One",
        type: "Personal Project",
        description:
            "A responsive web project focused on creating a clean, modern and user-friendly experience.",

        images: [
            "assests/Pro1/pro11.png",
            "assests/Pro1/pro12.png",
            "assests/Pro1/pro13.png",
            "assests/Pro1/pro14.png",
            "assests/Pro1/pro15.png",
            "assests/Pro1/pro16.png"
        ]
    },


    project2: {
        title: "Project Two",
        type: "Academic Project",
        description:
            "A front-end project demonstrating responsive layouts and interactive components.",

        images: [
            "assests/Pro2/pro21.png",
            "assests/Pro2/pro22.png",
            "assests/Pro2/pro23.png",
            "assests/Pro2/pro24.png",
            "assests/Pro2/pro25.png",
            "assests/Pro2/pro26.png",
            "assests/Pro2/pro27.png"
        ]
    },


    project3: {
        title: "Project Three",
        type: "Personal Project",
        description:
            "A creative web experience designed with a focus on usability and visual details.",

        images: [
            "assests/Pro3/pro31.png",
            "assests/Pro3/pro32.png",
            "assests/Pro3/pro33.png",
            "assests/Pro3/pro34.png"
        ]
    },

    project4: {
        title: "Project Four",
        type: "Team Project",
        description:
            "A creative web space exploration platform designed with a focus on usability and visual details.",

        images: [
            "assests/pro4/pro41.png",
            "assests/pro4/pro42.png",
            "assests/pro4/pro43.png",
            "assests/pro4/pro44.png",
            "assests/pro4/pro45.png",
            "assests/pro4/pro46.png",
            "assests/pro4/pro47.png",
            "assests/pro4/pro48.png",           
            "assests/pro4/pro49.png",
            "assests/pro4/pro410.png",
            "assests/pro4/pro411.png",
            "assests/pro4/pro412.png",
            "assests/pro4/pro413.png",
            "assests/pro4/pro414.png",
            "assests/pro4/pro415.png",
            "assests/pro4/pro416.png",
        ]
    }


};


/* ================= OPEN PROJECT ================= */

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) return;

    const modal = document.getElementById("projectModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalType =
        document.getElementById("modalType");

    const modalDescription =
        document.getElementById("modalDescription");

    const projectImages =
        document.getElementById("projectImages");


    modalTitle.textContent = project.title;

    modalType.textContent = project.type;

    modalDescription.textContent =
        project.description;


    /* Clear old images */

    projectImages.innerHTML = "";


    /* Add project images */

    project.images.forEach((image, index) => {

        const img = document.createElement("img");

        img.src = image;

        img.alt =
            `${project.title} screenshot ${index + 1}`;

        img.loading = "lazy";

        projectImages.appendChild(img);

    });


    /* Show modal */

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* ================= CLOSE PROJECT ================= */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();

    }

});