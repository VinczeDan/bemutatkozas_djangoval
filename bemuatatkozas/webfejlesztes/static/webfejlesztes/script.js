function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  // Disable scroll when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Close menu when clicking on a link
document.querySelectorAll(".nav-links li").forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
// Hamburger menü toggle funkció

// Smooth scroll funkció
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Sima görgetés a cél elemgz
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Menü bezárása mobilnézetben
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.remove("active");
      }
    });
  });
});
