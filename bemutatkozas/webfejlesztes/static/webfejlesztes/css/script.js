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

// Nyelvi adatok és váltó logika
const translations = {
  hu: {
    rolam: "Rólam",
    szolg: "Szolgáltatások",
    refer: "Referenciák",
    kapcs: "Kapcsolat",
    langBtn: "EN",
    motto: "EGYEDI WEBOLDALAK A SIKERHEZ",
    cim_kozepen: "DIGITÁLIS JELENLÉT FELSŐFOKON",
    motto1:
      "Professzionális webfejlesztés, modern design és egyedi megoldások.",
    motto2: "Segítek vállalkozásodnak kitűnni a digitális térben.",
    hero_cta: "Kérj ajánlatot",
    rolam_leiras: "Vincze Dániel vagyok, egyéni webfejlesztő...",
    szolgaltatasok_cim: "SZOLGÁLTATÁSOK",
    szolg1_cim: "Weboldal Készítés",
    szolg1_leiras: "Modern, reszponzív...",
    szolg2_cim: "Weboldal Szerkesztés",
    szolg2_leiras: "Meglévő weboldalak...",
    szolg3_cim: "Modern Design",
    szolg3_leiras: "Egyedi grafikai megjelenés...",
    munkaim_cim: "MUNKÁIM",
    kapcsolat_cim: "KAPCSOLAT",
  },
  en: {
    rolam: "About",
    szolg: "Services",
    refer: "References",
    kapcs: "Contact",
    langBtn: "HU",
    motto: "CUSTOM WEBSITES FOR SUCCESS",
    cim_kozepen: "DIGITAL PRESENCE AT THE HIGHEST LEVEL",
    motto1:
      "Professional web development, modern design, and custom solutions.",
    motto2: "Helping your business stand out in the digital space.",
    hero_cta: "Get a Quote",
    rolam_leiras: "I am Dániel Vincze, a freelance web developer...",
    szolgaltatasok_cim: "SERVICES",
    szolg1_cim: "Website Creation",
    szolg1_leiras: "Modern, responsive...",
    szolg2_cim: "Website Editing",
    szolg2_leiras: "Updating existing websites...",
    szolg3_cim: "Modern Design",
    szolg3_leiras: "Unique visual identity...",
    munkaim_cim: "MY WORKS",
    kapcsolat_cim: "CONTACT",
  },
};

let currentLang = "hu";

function toggleLanguage() {
  currentLang = currentLang === "hu" ? "en" : "hu";
  const t = translations[currentLang];

  // Navigáció
  document.getElementById("rolam-link").textContent = t.rolam;
  document.getElementById("szolgaltatasok-link").textContent = t.szolg;
  document.getElementById("referenciak-link").textContent = t.refer;
  document.getElementById("kapcsolat-link").textContent = t.kapcs;
  document.getElementById("lang-btn").textContent = t.langBtn;

  // Header / Hero
  document.getElementById("motto").textContent = t.motto;
  document.getElementById("cim-kozepen").textContent = t.cim_kozepen;
  document.getElementById("motto1").textContent = t.motto1;
  document.getElementById("motto2").textContent = t.motto2;
  document.getElementById("hero-cta").textContent = t.hero_cta;

  // About
  document.getElementById("rolam-leiras").innerHTML = t.rolam_leiras;

  // Services
  document.getElementById("szolgaltatasok-cim").textContent =
    t.szolgaltatasok_cim;
  document.getElementById("szolg1_cim").textContent = t.szolg1_cim;
  document.getElementById("szolg1_leiras").textContent = t.szolg1_leiras;
  document.getElementById("szolg2_cim").textContent = t.szolg2_cim;
  document.getElementById("szolg2_leiras").textContent = t.szolg2_leiras;
  document.getElementById("szolg3_cim").textContent = t.szolg3_cim;
  document.getElementById("szolg3_leiras").textContent = t.szolg3_leiras;

  // Portfolio
  document.getElementById("munkaim_cim").textContent = t.munkaim_cim;

  // Contact
  document.getElementById("kapcsolat_cim").textContent = t.kapcsolat_cim;
}

document.getElementById("lang-btn").addEventListener("click", toggleLanguage);
