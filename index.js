// Typing animation
const text = "Hello, I'm Shailaja Vasu";
let index = 0;
const el = document.getElementById("typed-text");

function typeText() {
  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 90);
  }
}
typeText();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  hamburger.classList.toggle("open");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
  document.body.style.overflow = sidebar.classList.contains("open") ? "hidden" : "";
}

hamburger?.addEventListener("click", toggleMenu);
overlay?.addEventListener("click", toggleMenu);

// Close sidebar on nav link click (mobile)
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) toggleMenu();
  });
});