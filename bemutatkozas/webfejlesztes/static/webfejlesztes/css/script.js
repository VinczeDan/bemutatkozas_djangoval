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

// Responsive fix for images
window.addEventListener("resize", function () {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.style.top = Math.floor(img.getBoundingClientRect().top) + "px";
  });
});

// Translations
const translations = {
  hu: {
    rolam: "RÓLAM",
    szolg: "SZOLGÁLTATÁSOK",
    refer: "REFERENCIÁK",
    kapcs: "KAPCSOLAT",
    motto: "Weboldal készítés",
    langBtn: "EN",
    cim_kozepen: "WEBFEJLESZTÉS",
    motto1: "Gyors, modern, egyedi - mint a weboldalad",
    motto2: "A jövőd online kezdődik",
    rolam_leiras:
      "<strong>Szia! Vincze Dániel vagyok</strong>, webfejlesztéssel foglalkozom. Segítek abban, hogy ötletedből <em>modern, letisztult és jól működő weboldal</em> szülessen – legyen az bemutatkozó oldal, kisebb projekt vagy induló vállalkozás webes megjelenése. <br> <br> Nálam minden egy kézben van: a <strong>tervezéstől a fejlesztésig</strong>. Fontos számomra, hogy érthető, átlátható megoldásokat kapj, és addig finomítom a munkát, amíg pontosan olyan nem lesz, amilyet elképzeltél.",
    szolgaltatasok_cim: "Szolgáltatások",
    szolg1_cim: "WEBOLDAL KÉSZÍTÉS",
    szolg1_leiras: "Mindenkinek kell weboldal",
    szolg2_cim: "WEBOLDAL SZERKESZTÉS",
    szolg2_leiras: "Fejlesztés, tartalom feltöltés, szerkesztés is",
    szolg3_cim: "MODERN DESIGN",
    szolg3_leiras: "Legyen látványos és egyedi a weboldalad",
    munkaim_cim: "MUNKÁIM",
    kapcsolat_cim: "KAPCSOLAT",
    helyszin: "Budapest, Magyarország",
  },
  en: {
    rolam: "ABOUT ME",
    szolg: "SERVICES",
    refer: "PORTFOLIO",
    kapcs: "CONTACT",
    motto: "Website Development",
    langBtn: "HU",
    cim_kozepen: "WEB DEVELOPMENT",
    motto1: "Fast, modern, unique - just like your website",
    motto2: "Your future starts online",
    rolam_leiras:
      "<strong>Hi, I'm Dániel Vincze</strong>, a web developer. I help turn your ideas into <em>modern, clean, and fully functional websites</em> – whether it's a personal page, a small project, or the online presence of a startup. <br> <br> With me, everything is handled in one place: from <strong>design to development</strong>. My priority is to provide clear, transparent solutions, and I keep refining the work until it looks exactly the way you envisioned.",
    szolgaltatasok_cim: "Services",
    szolg1_cim: "WEBSITE CREATION",
    szolg1_leiras: "Every business needs a website",
    szolg2_cim: "WEBSITE EDITING",
    szolg2_leiras: "Improvements, content updates, and custom edits",
    szolg3_cim: "MODERN DESIGN",
    szolg3_leiras: "Make your website eye-catching and unique",
    munkaim_cim: "MY WORK",
    kapcsolat_cim: "CONTACT",
    helyszin: "Budapest, Hungary",
  },
};

let currentLang = "hu";

function switchLanguage() {
  currentLang = currentLang === "hu" ? "en" : "hu";
  updateTexts();
}

function updateTexts() {
  const t = translations[currentLang];

  // Navigation
  document.getElementById("rolam-link").textContent = t.rolam;
  document.getElementById("szolgaltatasok-link").textContent = t.szolg;
  document.getElementById("referenciak-link").textContent = t.refer;
  document.getElementById("kapcsolat-link").textContent = t.kapcs;
  document.getElementById("lang-btn").textContent = t.langBtn;

  // Header
  document.getElementById("motto").textContent = t.motto;
  document.getElementById("cim-kozepen").textContent = t.cim_kozepen;
  document.getElementById("motto1").textContent = t.motto1;
  document.getElementById("motto2").textContent = t.motto2;

  // About section (HTML kell, nem textContent!)
  document.getElementById("rolam-leiras").innerHTML = t.rolam_leiras;

  // Services section
  document.getElementById("szolgaltatasok-cim").textContent =
    t.szolgaltatasok_cim;
  document.getElementById("szolg1-cim").textContent = t.szolg1_cim;
  document.getElementById("szolg1-leiras").textContent = t.szolg1_leiras;
  document.getElementById("szolg2-cim").textContent = t.szolg2_cim;
  document.getElementById("szolg2-leiras").textContent = t.szolg2_leiras;
  document.getElementById("szolg3-cim").textContent = t.szolg3_cim;
  document.getElementById("szolg3-leiras").textContent = t.szolg3_leiras;

  // Portfolio section
  document.getElementById("munkaim-cim").textContent = t.munkaim_cim;

  // Contact section
  document.getElementById("kapcsolat-cim").textContent = t.kapcsolat_cim;
  document.getElementById("helyszin").textContent = t.helyszin;
}
