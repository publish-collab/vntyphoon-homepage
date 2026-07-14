const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
}

const policyCard = document.querySelector("[data-policy-card]");
const policyToggle = document.querySelector("[data-policy-toggle]");
const policyPanel = document.querySelector("[data-policy-panel]");
const policyLabel = document.querySelector("[data-policy-label]");

if (policyCard && policyToggle && policyPanel && policyLabel) {
  function setPolicyPanel(isOpen) {
    policyCard.classList.toggle("is-policy-open", isOpen);
    policyToggle.setAttribute("aria-expanded", String(isOpen));
    policyPanel.hidden = !isOpen;
    policyLabel.textContent = isOpen ? "Ẩn chính sách" : "Xem chính sách";
  }

  function togglePolicyPanel() {
    setPolicyPanel(policyToggle.getAttribute("aria-expanded") !== "true");
  }

  policyToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    togglePolicyPanel();
  });

  policyCard.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a, button")) return;
    togglePolicyPanel();
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

