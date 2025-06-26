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
  document.getElementById("progress-bar").style.width = `${scrolled}%`;
  backToTop.classList.toggle("show", scrollY > 200);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("theme-icon");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Typewriter effect
const text = "We Capture Memories.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.addEventListener("load", typeWriter);

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
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
