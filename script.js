// Placeholder for future interactions
// Example: smooth scroll, menu modal, animations, etc.

document.querySelector(".cta").addEventListener("click", () => {
  alert("Menu page coming soon!");
});
const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
