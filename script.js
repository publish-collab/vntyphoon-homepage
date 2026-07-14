const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionEnabled = !motionPreference.matches;

if (motionEnabled) {
  document.documentElement.classList.add("motion-enabled");
}

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

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const hash = event.target.getAttribute("href");
    if (!hash?.startsWith("#")) return;

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: motionPreference.matches ? "auto" : "smooth",
      block: "start"
    });

    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }

    scheduleSectionReplay(target);
  });
}

const sectionLinks = navLinks
  ? Array.from(navLinks.querySelectorAll('a[href^="#"]'))
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        const section = id ? document.getElementById(id) : null;
        return section ? { id, link, section } : null;
      })
      .filter(Boolean)
  : [];

let activeNavFrame = 0;

function updateActiveNavigation() {
  activeNavFrame = 0;
  if (!sectionLinks.length) return;

  const marker = window.scrollY + (header?.offsetHeight || 0) + Math.min(window.innerHeight * 0.24, 180);
  const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let activeId = null;

  sectionLinks.forEach(({ id, section }) => {
    if (section.offsetTop <= marker) activeId = id;
  });

  if (isAtPageEnd) activeId = sectionLinks.at(-1)?.id || activeId;

  sectionLinks.forEach(({ id, link }) => {
    const isActive = id === activeId;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function requestActiveNavigationUpdate() {
  if (activeNavFrame) return;
  activeNavFrame = window.requestAnimationFrame(updateActiveNavigation);
}

updateActiveNavigation();
window.addEventListener("scroll", requestActiveNavigationUpdate, { passive: true });
window.addEventListener("resize", requestActiveNavigationUpdate);

let sectionReplayCleanup = null;

function replaySectionReveal(section) {
  if (!motionEnabled) return;

  const headerHeight = header?.offsetHeight || 0;
  const revealTargets = Array.from(section.querySelectorAll(".reveal")).filter((item) => {
    const bounds = item.getBoundingClientRect();
    return bounds.bottom > headerHeight && bounds.top < window.innerHeight;
  });

  if (!revealTargets.length) return;

  revealTargets.forEach((item) => {
    item.classList.add("is-restarting");
    item.classList.remove("is-visible");
  });
  void section.offsetWidth;

  window.requestAnimationFrame(() => {
    revealTargets.forEach((item) => {
      item.classList.remove("is-restarting");
      item.classList.add("is-visible");
    });
  });
}

function scheduleSectionReplay(section) {
  sectionReplayCleanup?.();
  sectionReplayCleanup = null;

  if (!motionEnabled) return;

  let isComplete = false;
  let settleTimer = 0;
  let fallbackTimer = 0;

  const cleanup = () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("scrollend", finish);
    window.clearTimeout(settleTimer);
    window.clearTimeout(fallbackTimer);
    if (sectionReplayCleanup === cleanup) sectionReplayCleanup = null;
  };

  const finish = () => {
    if (isComplete) return;
    isComplete = true;
    cleanup();
    replaySectionReveal(section);
  };

  const handleScroll = () => {
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(finish, 140);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("scrollend", finish, { once: true });
  settleTimer = window.setTimeout(finish, 180);
  fallbackTimer = window.setTimeout(finish, 1800);
  sectionReplayCleanup = cleanup;
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

function startEntranceAnimations() {
  document.documentElement.classList.add("hero-ready");

  if (!motionEnabled || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.14;
        entry.target.classList.toggle("is-visible", isVisible);
      });
    },
    { threshold: [0, 0.14], rootMargin: "0px 0px -6%" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

if (!motionEnabled) {
  document.documentElement.classList.add("hero-ready");
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(startEntranceAnimations);
  });
}

