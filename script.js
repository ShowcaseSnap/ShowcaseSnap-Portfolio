// --- Hamburger Menu Toggle ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// --- Typewriter Effect for Hero Title ---
const text = "We Capture Brands That Matter.";
let i = 0;
function typeWriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.addEventListener("load", typeWriter);

// --- Scroll Reveal Animation ---
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

// --- Optional: Back to Top Button and Scroll Progress Bar ---
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrolled = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (backToTop) {
    backToTop.classList.toggle("show", scrollY > 200);
    document.getElementById("progress-bar").style.width = `${scrolled}%`;
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Optional: Image Modal Preview ---
const images = document.querySelectorAll(".preview-image");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

if (images.length && modal && modalImg && closeModal) {
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
