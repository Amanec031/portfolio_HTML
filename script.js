
// Toggle dark mode
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    // Save preference to localStorage
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// Check for saved theme preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

menuToggle.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
    setTimeout(() => {
        mobileNav.style.opacity = '1';
    }, 10);
});

closeMenu.addEventListener('click', () => {
    mobileNav.style.opacity = '0';
    setTimeout(() => {
        mobileNav.style.display = 'none';
    }, 300);
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.opacity = '0';
        setTimeout(() => {
            mobileNav.style.display = 'none';
        }, 300);
    });
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    fader.style.opacity = 0;
    fader.style.transform = 'translateY(20px)';
    appearOnScroll.observe(fader);
});

// Typing effect for name
const typingEffect = document.querySelector('.typing-effect');
const text = typingEffect.textContent;
typingEffect.textContent = '';

let i = 0;
function type() {
    if (i < text.length) {
        typingEffect.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(type, 500);
});
let titles = ["Aman Kumar | Electronics & Software Engineer", "🚀 Aman Kumar | Open to Opportunities"];
let index = 0;
setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}, 2000); // Changes every 2 seconds