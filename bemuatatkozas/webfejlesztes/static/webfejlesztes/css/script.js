function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  // Disable scroll when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
  } else {
    document.body.style.overflow = "auto";
    document.body.classList.remove("menu-open");
  }
}

// Close menu when clicking on a link and restore scrolling
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      const navLinks = document.querySelector(".nav-links");
      const hamburger = document.querySelector(".hamburger");

      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "auto";
      document.body.classList.remove("menu-open");
    }
  });
});

// Smooth scroll function
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Only prevent default for same-page links
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Close menu on mobile and restore scrolling
          if (window.innerWidth <= 768) {
            const navLinks = document.querySelector(".nav-links");
            const hamburger = document.querySelector(".hamburger");

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
            document.body.style.overflow = "auto";
            document.body.classList.remove("menu-open");
          }
        }
      }
    });
  });
});
