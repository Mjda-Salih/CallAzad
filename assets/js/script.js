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
