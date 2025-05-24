const h1Wrapper = document.querySelector(".intro-heading-wrapper");
// const h1Wrapper = document.querySelector(".intro-heading-wrapper");
const h2 = document.querySelector(".intro h2");
const p = document.querySelector(".intro p");
const mainContent = document.querySelector(".main-content"); // add this line

const text = "Hello, I'm Shailaja Vasu";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 150);
  }
}

typeText();

// After 15 seconds: hide intro (h1 & gif), show h2, p, AND show entire main content
setTimeout(() => {
  h1Wrapper.style.display = 'none';
  h2.style.display = 'block';
  p.style.display = 'block';
  mainContent.style.display = 'block';  // show main content here
  

  // Optional: trigger animation styles manually
  mainContent.style.opacity = '1';
  mainContent.style.transform = 'translateY(0)';
}, 5000);
