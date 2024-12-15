document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Call Azad - Your trusted handyman services!");
});
document.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      el.classList.add("show");
    }
  });
});
// Highlight the active section in the navbar
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
