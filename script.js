// Typewriter Effect
const text = "We Capture Brands That Matter.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
window.addEventListener("load", typeWriter);

// Scroll Fade-In Effect
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

// Scroll Progress Bar + Back to Top Button (if elements exist)
const backToTop = document.getElementById("backToTop");
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollY / scrollHeight) * 100;

  if (progressBar) progressBar.style.width = `${scrolled}%`;
  if (backToTop) backToTop.classList.toggle("show", scrollY > 200);
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Dark Mode Toggle (if element exists)
const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("theme-icon");

if (toggle && icon) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
}

// Ripple Effect on Buttons
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

// Image Modal Preview (if modal setup exists)
const images = document.querySelectorAll(".preview-image");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

if (modal && modalImg && closeModal) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
