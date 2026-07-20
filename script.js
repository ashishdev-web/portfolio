// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =============================
// Navbar Background
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background="rgba(5,8,22,.95)";
        header.style.boxShadow="0 10px 25px rgba(0,0,0,.4)";

    }else{

        header.style.background="rgba(0,0,0,.25)";
        header.style.boxShadow="none";

    }

});

// =============================
// Typing Animation
// =============================

const words=[
"Frontend Developer",
"Website Designer",
"HTML & CSS Expert",
"Responsive Web Designer"
];

let wordIndex=0;
let charIndex=0;
let typing=true;

const typingElement=document.querySelector(".typing");

function typeEffect(){

if(!typingElement) return;

let currentWord=words[wordIndex];

if(typing){

typingElement.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

typing=false;

setTimeout(typeEffect,1500);

return;

}

}else{

typingElement.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

typing=true;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,typing?120:60);

}

typeEffect();

// =============================
// Reveal Animation
// =============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});

// =============================
// Active Menu
// =============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// =============================
// Card Hover
// =============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(56,189,248,.25),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.06)";

});

});

console.log("Portfolio Loaded Successfully");
