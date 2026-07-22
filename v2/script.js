const locales = window.VNT_LOCALES || {};
const supportedLanguages = ["vi", "en"];
const languageStorageKey = "vnt_language";

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return supportedLanguages.includes(storedLanguage) ? storedLanguage : null;
  } catch {
    return null;
  }
}

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang")?.toLowerCase();
  if (supportedLanguages.includes(queryLanguage)) return queryLanguage;

  const storedLanguage = getStoredLanguage();
  if (storedLanguage) return storedLanguage;

  return navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // The selected language still applies when storage is unavailable
  }
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState({ language }, "", url);
}

function updatePolicyLinks(language) {
  document.querySelectorAll(".app-policy-links a, .policy-group a").forEach((link) => {
    const url = new URL(link.getAttribute("href"), window.location.href);
    url.searchParams.set("lang", language);
    link.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
  });
}

function applyLanguage(language, { persist = true, updateUrl = true } = {}) {
  const nextLanguage = supportedLanguages.includes(language) ? language : "en";
  const translations = locales[nextLanguage];
  if (!translations) return;

  document.documentElement.lang = nextLanguage;
  document.documentElement.dataset.locale = nextLanguage;
  document.title = translations["meta.title"];

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", translations["meta.description"]);

  document.querySelectorAll("[data-i18n-lines]").forEach((element) => {
    const key = element.dataset.i18nLines;
    const translatedLines = translations[key];
    if (!Array.isArray(translatedLines)) return;

    const fragment = document.createDocumentFragment();
    translatedLines.forEach((line, index) => {
      if (index > 0) fragment.append(document.createTextNode(" "));
      const span = document.createElement("span");
      span.className = "editorial-line";
      span.textContent = line;
      fragment.append(span);
    });
    element.replaceChildren(fragment);
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.hasOwn(translations, key)) element.textContent = translations[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (Object.hasOwn(translations, key)) element.setAttribute("aria-label", translations[key]);
  });

  document.querySelectorAll("button[data-language]").forEach((button) => {
    const isActive = button.dataset.language === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updatePolicyLinks(nextLanguage);

  if (persist) persistLanguage(nextLanguage);
  if (updateUrl) updateLanguageUrl(nextLanguage);
}

applyLanguage(getInitialLanguage());

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const wideViewport = window.matchMedia("(min-width: 768px)");
const supportedSectionHashes = new Set(["about", "philosophy", "apps", "build", "contact", "policies"]);

function getHashTarget(hash = window.location.hash) {
  if (!hash?.startsWith("#")) return null;

  let id;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return null;
  }

  return supportedSectionHashes.has(id) ? document.getElementById(id) : null;
}

function scrollToHashTarget(hash = window.location.hash) {
  const target = getHashTarget(hash);
  if (!target) return;

  target.scrollIntoView({
    behavior: motionPreference.matches ? "auto" : "smooth",
    block: "start"
  });
}

function queueHashNavigation(hash = window.location.hash) {
  if (!getHashTarget(hash)) return;
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => scrollToHashTarget(hash));
  });
}

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

function setMenu(isOpen) {
  if (!nav || !navToggle) return;
  nav.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  header?.classList.toggle("is-menu-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
}

navToggle?.addEventListener("click", () => {
  setMenu(navToggle.getAttribute("aria-expanded") !== "true");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenu(false);
});

document.querySelector(".footer-top-link")?.addEventListener("click", (event) => {
  event.preventDefault();
  const url = new URL(window.location.href);
  url.hash = "top";
  const historyMethod = window.location.hash === "#top" ? "replaceState" : "pushState";
  window.history[historyMethod]({ language: document.documentElement.lang }, "", url);
  window.scrollTo({
    top: 0,
    behavior: motionPreference.matches ? "auto" : "smooth"
  });
});

document.querySelectorAll("button[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    const activeHash = window.location.hash;
    applyLanguage(button.dataset.language);
    setMenu(false);
    window.requestAnimationFrame(() => {
      requestNavigationUpdate();
      requestDriftUpdate();
      queueHashNavigation(activeHash);
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) setMenu(false);
});

function restoreInitialHash() {
  queueHashNavigation(window.location.hash);
}

if (document.readyState === "complete") restoreInitialHash();
else window.addEventListener("load", restoreInitialHash, { once: true });

window.addEventListener("hashchange", () => queueHashNavigation(window.location.hash));

function startEntranceMotion() {
  document.documentElement.classList.add("hero-ready");

  const revealItems = document.querySelectorAll(".reveal");
  if (motionPreference.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5%" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

window.requestAnimationFrame(() => window.requestAnimationFrame(startEntranceMotion));

const navLinks = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
const sectionLinks = navLinks
  .map((link) => {
    const id = link.getAttribute("href")?.slice(1);
    const section = id ? document.getElementById(id) : null;
    return section ? { id, link, section } : null;
  })
  .filter(Boolean);

let navigationFrame = 0;

function updateActiveNavigation() {
  navigationFrame = 0;
  if (!sectionLinks.length) return;

  const marker = window.scrollY + (header?.offsetHeight || 0) + Math.min(window.innerHeight * 0.22, 170);
  const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3;
  let activeId = null;

  sectionLinks.forEach(({ id, section }) => {
    if (section.offsetTop <= marker) activeId = id;
  });

  if (atPageEnd) activeId = sectionLinks.at(-1)?.id || activeId;

  sectionLinks.forEach(({ id, link }) => {
    const isActive = id === activeId;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function requestNavigationUpdate() {
  if (navigationFrame) return;
  navigationFrame = window.requestAnimationFrame(updateActiveNavigation);
}

updateActiveNavigation();
window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
window.addEventListener("resize", requestNavigationUpdate);

const driftItems = Array.from(document.querySelectorAll("[data-drift]"));
let driftFrame = 0;

function renderDrift() {
  driftFrame = 0;
  const canMove = !motionPreference.matches && wideViewport.matches;

  driftItems.forEach((item) => {
    if (!canMove) {
      item.style.setProperty("--drift-y", "0px");
      return;
    }

    const bounds = item.getBoundingClientRect();
    const centerOffset = (bounds.top + bounds.height / 2 - window.innerHeight / 2) / window.innerHeight;
    const progress = Math.max(-1, Math.min(1, centerOffset));
    const strength = Number(item.dataset.drift || 0.12);
    item.style.setProperty("--drift-y", `${(-progress * strength * 42).toFixed(2)}px`);
  });
}

function requestDriftUpdate() {
  if (driftFrame) return;
  driftFrame = window.requestAnimationFrame(renderDrift);
}

renderDrift();
window.addEventListener("scroll", requestDriftUpdate, { passive: true });
window.addEventListener("resize", requestDriftUpdate);
motionPreference.addEventListener("change", requestDriftUpdate);
wideViewport.addEventListener("change", requestDriftUpdate);
