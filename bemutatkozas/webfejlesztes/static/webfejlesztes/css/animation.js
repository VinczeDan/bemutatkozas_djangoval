// animation.js - WEB FIZZ animációs rendszer
document.addEventListener("DOMContentLoaded", function () {
  // GSAP és ScrollTrigger betöltése CDN-ről
  const loadGSAP = () => {
    const gsapScript = document.createElement("script");
    gsapScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js";
    gsapScript.onload = () => {
      const scrollTriggerScript = document.createElement("script");
      scrollTriggerScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js";
      scrollTriggerScript.onload = initAnimations;
      document.head.appendChild(scrollTriggerScript);
    };
    document.head.appendChild(gsapScript);
  };

  // Ha nincs már betöltve
  if (typeof gsap === "undefined") {
    loadGSAP();
  } else {
    initAnimations();
  }

  function initAnimations() {
    // Regisztráljuk a ScrollTrigger plugint
    gsap.registerPlugin(ScrollTrigger);

    // ----------------------------
    // 1. Hero section animációk
    // ----------------------------
    const heroTimeline = gsap.timeline();

    heroTimeline
      .from(".hero-banner", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .from(
        ".cim",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .from(
        ".motto1",
        {
          x: -30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.6"
      )
      .from(
        ".motto2",
        {
          x: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.6"
      );

    // ----------------------------
    // 2. Rólam szekció animációk
    // ----------------------------
    gsap.from(".rolam", {
      scrollTrigger: {
        trigger: ".rolam",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".rolam img", {
      scrollTrigger: {
        trigger: ".rolam",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });

    // ----------------------------
    // 3. Szolgáltatások animációk
    // ----------------------------
    // Szolgáltatások cím animációja
    gsap.from(".szolgaltatas_cim", {
      scrollTrigger: {
        trigger: ".szolgaltatasok",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
    });

    // Szolgáltatás csempék animációja
    const szolgaltatasok = gsap.utils.toArray(".szolgaltatas-csempek > div");

    szolgaltatasok.forEach((szolgaltatas, index) => {
      gsap.from(szolgaltatas, {
        scrollTrigger: {
          trigger: ".szolgaltatas-csempek",
          start: "top 70%",
          toggleActions: "play none none none",
        },
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
      });

      // Hover animáció a csempékre
      szolgaltatas.addEventListener("mouseenter", () => {
        gsap.to(szolgaltatas, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      });

      szolgaltatas.addEventListener("mouseleave", () => {
        gsap.to(szolgaltatas, {
          scale: 1,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          duration: 0.3,
        });
      });
    });

    // ----------------------------
    // 4. Munkák szekció animációk
    // ----------------------------
    // Munka csempék animációja
    const munkak = gsap.utils.toArray(".munka-csempe");

    munkak.forEach((munka, index) => {
      gsap.from(munka, {
        scrollTrigger: {
          trigger: munka,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power2.out",
      });

      // Kép animáció hover-re
      const kep = munka.querySelector("img");
      gsap.set(kep, { transformOrigin: "center center" });

      munka.addEventListener("mouseenter", () => {
        gsap.to(kep, {
          scale: 1.05,
          duration: 0.3,
        });
        gsap.to(munka.querySelector(".munka-cim")),
          {
            color: "#ffffff",
            duration: 0.3,
          };
      });

      munka.addEventListener("mouseleave", () => {
        gsap.to(kep, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(munka.querySelector(".munka-cim")),
          {
            color: "",
            duration: 0.3,
          };
      });
    });

    // ----------------------------
    // 5. Kapcsolat szekció animációk
    // ----------------------------
    gsap.from(".kapcsolat h2", {
      scrollTrigger: {
        trigger: ".kapcsolat",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
    });

    gsap.from(".contact-info", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // ----------------------------
    // 6. Általános oldal animációk
    // ----------------------------
    // Fejléc animáció
    gsap.from("header", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // SVG hullámok animációja
    const wavePaths = document.querySelectorAll(
      ".flipped-shape path, .elementor-shape-top path"
    );

    wavePaths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        scrollTrigger: {
          trigger: path.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        strokeDashoffset: 0,
        duration: 3,
        ease: "none",
      });
    });

    // ----------------------------
    // 7. Speciális effektek
    // ----------------------------
    // Logo hover animáció
    const logo = document.querySelector(".logo-es-motto");

    logo.addEventListener("mouseenter", () => {
      gsap.to(".logo-es-motto h1", {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to("#motto", {
        y: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to(".logo-es-motto h1", {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to("#motto", {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // Gomb animációk
    const gombok = document.querySelectorAll('button, a[href^="#"]');

    gombok.forEach((gomb) => {
      gomb.addEventListener("mouseenter", () => {
        gsap.to(gomb, {
          scale: 1.05,
          duration: 0.2,
        });
      });

      gomb.addEventListener("mouseleave", () => {
        gsap.to(gomb, {
          scale: 1,
          duration: 0.2,
        });
      });
    });
  }
});
