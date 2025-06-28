// Scroll fade-in animation
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

// Back to top button and scroll progress bar
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrolled = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) progressBar.style.width = `${scrolled}%`;
  if (backToTop) backToTop.classList.toggle("show", scrollY > 200);
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("theme-icon");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (icon) {
      icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }
  });
}

// Typewriter effect for hero heading
const typewriterText = "We Capture Memories.";
let index = 0;

function typeWriter() {
  const target = document.getElementById("typewriter-text");
  if (target && index < typewriterText.length) {
    target.textContent += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);

// Ripple effect on buttons
document.querySelectorAll(".ripple-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Image modal preview
const images = document.querySelectorAll(".preview-image");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

images.forEach(img => {
  img.addEventListener("click", () => {
    if (modal && modalImg) {
      modal.style.display = "flex";
      modalImg.src = img.src;
    }
  });
});

if (closeModal && modal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
