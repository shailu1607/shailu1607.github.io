// ── Hamburger menu — works on every page ──────────────────────
document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const sidebar   = document.getElementById("sidebar");
  const overlay   = document.getElementById("overlay");

  if (!hamburger || !sidebar || !overlay) return;

  function openMenu() {
    hamburger.classList.add("open");
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("open");
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    sidebar.classList.contains("open") ? closeMenu() : openMenu();
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // Close when a nav link is tapped on mobile
  document.querySelectorAll(".nav-list a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});

// ── Typing animation (index page only) ────────────────────────
const typedEl = document.getElementById("typed-text");
if (typedEl) {
  const text = "Hello, I'm Shailaja Vasu";
  let i = 0;
  function typeText() {
    if (i < text.length) {
      typedEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, 90);
    }
  }
  typeText();
}