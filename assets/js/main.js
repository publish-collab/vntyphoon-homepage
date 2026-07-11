/* ==========================================================================
   VN Typhoon ??UI interactions
   - language switcher init
   - sticky header shadow
   - mobile menu
   - portfolio filtering
   - reveal-on-scroll
   - contact form (Formspree-ready, with graceful fallback)
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Language ---- */
  const I18N = window.VNT_I18N;
  if (I18N) {
    I18N.initLanguageMenu();
    I18N.applyLanguage(I18N.detectInitialLang());

    const langSwitch = document.getElementById("langSwitch");
    const langBtn = document.getElementById("langBtn");
    langBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = langSwitch.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (!langSwitch.contains(e.target)) {
        langSwitch.classList.remove("open");
        langBtn?.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") langSwitch.classList.remove("open");
    });
  }

  /* ---- Sticky header shadow ---- */
  const header = document.getElementById("header");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  menuBtn?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    })
  );

  /* ---- Portfolio filtering ---- */
  const filters = document.getElementById("filters");
  const grid = document.getElementById("workGrid");
  filters?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filters.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.getAttribute("data-filter");
    grid?.querySelectorAll(".work").forEach((card) => {
      const show = cat === "all" || card.getAttribute("data-cat") === cat;
      card.classList.toggle("hide", !show);
    });
  });

  /* ---- Reveal-on-scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Contact form ---- */
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", async (e) => {
    const action = form.getAttribute("action") || "";
    // If a real Formspree endpoint is configured, submit via fetch (AJAX).
    if (action.includes("formspree.io") && !action.includes("your-id")) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "??;
      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          form.reset();
          btn.textContent = "??;
          setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 2500);
        } else {
          throw new Error("Network");
        }
      } catch (err) {
        btn.textContent = original;
        btn.disabled = false;
        // Fallback: open the user's mail client with the message pre-filled.
        mailtoFallback(form);
      }
      return;
    }
    // No endpoint configured yet ??fall back to mailto so the form still works.
    e.preventDefault();
    mailtoFallback(form);
  });

  function mailtoFallback(form) {
    const name = form.name?.value || "";
    const email = form.email?.value || "";
    const company = form.company?.value || "";
    const message = form.message?.value || "";
    const subject = encodeURIComponent(`Project inquiry ??${name || "VN Typhoon"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:contact@vntyphoon.com?subject=${subject}&body=${body}`;
  }
})();

