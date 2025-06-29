// Mobile Hamburger Menu Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Typewriter Effect for Hero Heading
const typeText = "We Capture Brands That Matter.";
let i = 0;
function typeWriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;
  if (i < typeText.length) {
    target.textContent += typeText.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.addEventListener("load", typeWriter);

// Fade-in Scroll Animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Scroll Progress Bar
const progressBar = document.createElement("div");
progressBar.id = "progress-bar";
document.body.appendChild(progressBar);
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollY / height) * 100;
  progressBar.style.width = `${scrolled}%`;
});

// Ripple Button Effect
document.querySelectorAll(".ripple-btn").forEach(button => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Image Modal Preview
const modal = document.createElement("div");
modal.id = "image-modal";
modal.innerHTML = `
  <span id="close-modal" style="position:absolute;top:10px;right:20px;font-size:2em;cursor:pointer;color:white;">&times;</span>
  <img id="modal-img" style="max-width:90%;max-height:90%;">
`;
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.8)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "9999";
document.body.appendChild(modal);

document.querySelectorAll(".portfolio-grid img").forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    document.getElementById("modal-img").src = img.src;
    modal.style.display = "flex";
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  modal.style.display = "none";
});
