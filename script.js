document.addEventListener("DOMContentLoaded", () => {
  /* =====================
     Mobile Navigation
  ===================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  /* =====================
     Fade-in on Scroll
  ===================== */
  const fades = document.querySelectorAll(".fade");

  if (fades.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // prevents jumpiness
          }
        });
      },
      { threshold: 0.15 }
    );

    fades.forEach((el) => observer.observe(el));
  }

  /* =====================
     Language Switch
  ===================== */
  const buttons = document.querySelectorAll(".lang-switch button");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const lang = btn.dataset.lang;

        document
          .querySelectorAll(".lang-ja")
          .forEach((el) => el.classList.toggle("hidden", lang !== "ja"));

        document
          .querySelectorAll(".lang-en")
          .forEach((el) => el.classList.toggle("hidden", lang !== "en"));
      });
    });
  }
});
