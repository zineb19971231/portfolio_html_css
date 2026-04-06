// ===== MENU HAMBURGER =====
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = 'translateY(0px)';
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = 'translateY(-500px)';
}

// ===== TYPEWRITER =====
const texts = [
    'PROFESSIONAL WEB DEVELOPER',
    'FULL STACK DEVELOPER',
];

let speed = 150;
const textElement = document.querySelector('.typewriter-txt');
let txtindex = 0;
let characterindex = 0;

function typeWriter() {
    if (characterindex < texts[txtindex].length) {
        textElement.innerHTML += texts[txtindex].charAt(characterindex);
        characterindex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 80);
    } else {
        txtindex = (txtindex + 1) % texts.length;
        characterindex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// ===== NAV ACTIVE AU SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.name .links a');

function activateLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateLink);
activateLink();

// ===== ANIMATION BARRES SKILLS =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth + '%';
            });
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) skillObserver.observe(skillsSection);