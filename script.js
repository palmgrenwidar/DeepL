document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// ===============================
// HEADER TEXT ANIMATION
// ===============================

const headerTitle = document.querySelector("header h1");

let colors = ["#ffffff", "#60a5fa", "#93c5fd"];
let index = 0;

setInterval(() => {
    headerTitle.style.color = colors[index];

    index++;

    if(index >= colors.length){
        index = 0;
    }

}, 1000);

// ===============================
// SECTION FADE-IN EFFECT
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});

// Startvärden för animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// ===============================
// WELCOME MESSAGE
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {
        alert("Välkommen till min DeepL AI hemsida!");
    }, 1000);

});
