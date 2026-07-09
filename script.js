// ==========================================
// Navigation Smooth Scroll
// ==========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



// ==========================================
// RSVP Popup
// ==========================================

const form = document.getElementById("rsvpForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    popup.style.display = "flex";

    form.reset();

});

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});

window.addEventListener("click", function (e) {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});



// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(

    ".hero-card, .card, form, footer, h2"

);

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();



// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (pageYOffset >= top) {

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



// ==========================================
// Navbar Background
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});



// ==========================================
// Ripple Button Effect
// ==========================================

const buttons = document.querySelectorAll("button, .btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";

        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});



// ==========================================
// Scroll Progress Bar
// ==========================================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.left = "0";
progress.style.top = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "#C7A56A";
progress.style.zIndex = "99999";
progress.style.transition = "width .2s";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progressWidth =

        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});



// ==========================================
// Hero Fade
// ==========================================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-card");

    hero.animate(

        [

            {

                opacity: 0,

                transform: "translateY(50px)"

            },

            {

                opacity: 1,

                transform: "translateY(0)"

            }

        ],

        {

            duration: 1200,

            easing: "ease-out"

        }

    );

});



// ==========================================
// Decorative Floating Dots
// ==========================================

for (let i = 0; i < 20; i++) {

    const dot = document.createElement("div");

    dot.style.position = "fixed";

    dot.style.width = "4px";

    dot.style.height = "4px";

    dot.style.borderRadius = "50%";

    dot.style.background = "rgba(199,165,106,.35)";

    dot.style.left = Math.random() * 100 + "vw";

    dot.style.top = Math.random() * 100 + "vh";

    dot.style.pointerEvents = "none";

    dot.style.zIndex = "-1";

    document.body.appendChild(dot);

}
/* ================= RSVP Guest List ================= */




// ==========================================
// Console Message
// ==========================================

console.log(
"%cMay Allah bless this beautiful union 🤍",
"color:#2F5D50;font-size:18px;font-weight:bold;"
);