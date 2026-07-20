// =============================
// Portfolio Pro v2 JavaScript
// =============================

// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";
    }

});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =============================
// Hero Typing Animation
// =============================

const text = [
    "Frontend Developer",
    "Responsive Website Designer",
    "HTML & CSS Expert",
    "Portfolio Website Creator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    const heading = document.querySelector(".hero-left h2");

    if (heading) {
        heading.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            setTimeout(type, 300);

        }, 1500);

    } else {

        setTimeout(type, 80);

    }

})();

// =============================
// Card Hover Animation
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// =============================
// Reveal on Scroll
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = ".8s";

    observer.observe(sec);

});

// =============================
// Console Message
// =============================

console.log("🔥 Ashish Portfolio Pro Loaded Successfully");
