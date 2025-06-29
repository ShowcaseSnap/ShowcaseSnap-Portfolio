// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('open');
});

// ========== TYPEWRITER HERO TEXT ==========
const typewriterText = "We Capture Brands That Matter.";
let index = 0;

function typeWriter() {
  if (index < typewriterText.length) {
    document.getElementById("typewriter-text").textContent += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", typeWriter);

// ========== FADE-IN ANIMATION ON SCROLL ==========
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ========== SMOOTH SCROLL BACK TO TOP (Optional UI Enhancement) ==========
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
