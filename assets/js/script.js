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

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      text: "Azad transformed our home with his excellent painting skills.",
      author: "Iqbal Hassan",
    },
    {
      text: "The best handyman in town! Fast and reliable service.",
      author: "Jane Smith",
    },
    {
      text: "Highly recommend, fast and professional job!",
      author: "Ishanti Yusuf",
    },
    {
      text: "Would use this service again and again, amazing job.",
      author: "Walt Scholes",
    },
    {
      text: "Superb work! I couldn't be happier with the results.",
      author: "Emily Brown",
    },
    {
      text: "Azad fixed everything perfectly and on time. Highly recommended!",
      author: "Michael Carter",
    },
  ];

  const carouselContent = document.getElementById("carouselContent");

  // Dynamically create slides
  testimonials.forEach((testimonial, index) => {
    const isActive = index === 0 ? "active" : ""; // Make the first item active
    const slide = `
      <div class="carousel-item ${isActive}">
        <blockquote class="blockquote text-center">
          <p class="mb-4">"${testimonial.text}"</p>
          <footer class="blockquote-footer">${testimonial.author}</footer>
        </blockquote>
      </div>
    `;
    carouselContent.insertAdjacentHTML("beforeend", slide);
  });
});
