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

window.addEventListener("resize", function () {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.style.top = Math.floor(img.getBoundingClientRect().top) + "px";
  });
});
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic quisquam vitae, ut doloremque dolores dignissimos pariatur quo exercitationem reprehenderit, ex, architecto voluptatum soluta? Suscipit ipsa commodi aliquid architecto in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint mollitia ipsum aliquid voluptatum itaque exercitationem quasi ex nesciunt aut recusandae quas, cum, enim qui sunt ducimus illum odio error molestiae. Cum rerum velit iste voluptas dolore cupiditate, amet, similique deleniti autem asperiores repellat ad! Saepe, harum labore autem commodi odio qui",
    szolgaltatasok_cim: "Szolgáltatások",
    szolg1_cim: "WEBOLDAL KÉSZÍTÉS",
    szolg1_leiras: "mindenkinek kell weboldal",
    szolg2_cim: "WEBOLDAL SZERKESZTES",
    szolg2_leiras: "fejlesztes, tartalom feltoltes, szerkesztés is",
    szolg3_cim: "Modern design",
    szolg3_leiras: "legyen látványos és egyedi a weboldalad",
    munkaim_cim: "MUNKÁIM",
    kapcsolat_cim: "Kapcsolat",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eveniet vitae, dolores doloremque pariatur quos reprehenderit architecto voluptatum soluta. I strive to create impactful, tailor-made websites that stand out online. Whether it's coding, design, or content strategy – I bring your digital vision to life with precision and creativity.",
    szolgaltatasok_cim: "Services",
    szolg1_cim: "WEBSITE CREATION",
    szolg1_leiras: "Every business needs a website",
    szolg2_cim: "WEBSITE EDITING",
    szolg2_leiras: "Improvements, content updates, and custom edits",
    szolg3_cim: "Modern Design",
    szolg3_leiras: "Make your website eye-catching and unique",
    munkaim_cim: "MY WORK",
    kapcsolat_cim: "Contact",
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

  // About section
  document.getElementById("rolam-leiras").textContent = t.rolam_leiras;

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

