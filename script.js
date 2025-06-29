// === Hamburger Menu Toggle ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// === Typewriter Effect in Hero ===
const text = "We Capture Brands That Matter.";
const typewriterTarget = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", typeWriter);

// === Fade-In Scroll Animation ===
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observerInstance.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach(el => observer.observe(el));

// === Back to Top Button (optional UI) ===
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
