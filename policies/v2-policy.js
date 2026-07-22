(function () {
  "use strict";

  const locales = window.VNT_POLICY_LOCALES || {};
  const supportedLanguages = ["vi", "en"];
  const languageStorageKey = "vnt_language";
  const header = document.querySelector("[data-policy-shell-header]");
  const footer = document.querySelector("[data-policy-shell-footer]");

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

  function renderShell() {
    if (header) {
      header.innerHTML = `
        <div class="policy-shell policy-header-inner">
          <a class="policy-brand" href="../v2/#top" data-v2-home-link data-policy-i18n-aria-label="brand.home">
            <span class="policy-brand-mark" aria-hidden="true">
              <img src="../assets/logo/vntyphoon-wing-v-transparent.png" width="1098" height="653" alt="" />
            </span>
            <span class="policy-brand-name">VNTYPHOON COMPANY LIMITED</span>
          </a>

          <button class="policy-nav-toggle" type="button" aria-expanded="false" aria-controls="policy-navigation" data-policy-nav-toggle>
            <span data-policy-i18n="nav.menu"></span>
            <span class="policy-nav-toggle-lines" aria-hidden="true"><i></i><i></i></span>
          </button>

          <nav class="policy-navigation" id="policy-navigation" data-policy-nav data-policy-i18n-aria-label="nav.primary">
            <a class="policy-back-link" href="../v2/#apps" data-v2-apps-link>
              <span aria-hidden="true">←</span>
              <span data-policy-i18n="nav.back"></span>
            </a>
            <div class="policy-language-selector" role="group" data-policy-i18n-aria-label="language.selector">
              <span class="policy-language-label" data-policy-i18n="language.label"></span>
              <button type="button" data-policy-language="vi" aria-pressed="false" data-policy-i18n-aria-label="language.vi">VI</button>
              <span aria-hidden="true">/</span>
              <button type="button" data-policy-language="en" aria-pressed="false" data-policy-i18n-aria-label="language.en">EN</button>
            </div>
          </nav>
        </div>`;
    }

    if (footer) {
      footer.innerHTML = `
        <div class="policy-shell policy-footer-grid">
          <div class="policy-footer-brand">
            <img src="../assets/logo/vntyphoon-wing-v-transparent.png" width="1098" height="653" alt="" />
            <div>
              <strong>VNTYPHOON COMPANY LIMITED</strong>
              <a href="mailto:contact@vntyphoon.com">contact@vntyphoon.com</a>
              <p data-policy-i18n="footer.description"></p>
            </div>
          </div>
          <div class="policy-footer-group">
            <p data-policy-i18n="footer.timtim"></p>
            <a href="../timtim-privacy/" data-policy-route data-policy-i18n="policy.privacy"></a>
            <a href="../timtim-terms/" data-policy-route data-policy-i18n="policy.terms"></a>
            <a href="../timtim-account-deletion/" data-policy-route data-policy-i18n="policy.deletion"></a>
          </div>
          <div class="policy-footer-group">
            <p data-policy-i18n="footer.tarot"></p>
            <a href="../tarot-queen-privacy/" data-policy-route data-policy-i18n="policy.privacy"></a>
            <a href="../tarot-queen-terms/" data-policy-route data-policy-i18n="policy.terms"></a>
            <a href="../tarot-queen-account-deletion/" data-policy-route data-policy-i18n="policy.deletion"></a>
          </div>
        </div>
        <div class="policy-shell policy-footer-bottom">
          <span>© 2026 VNTYPHOON COMPANY LIMITED.</span>
          <a href="../v2/#apps" data-v2-apps-link data-policy-i18n="footer.back"></a>
        </div>`;
    }

    const languageNotice = document.querySelector("[data-policy-language-notice]");
    if (languageNotice) {
      languageNotice.id = "policy-language-notice";
      languageNotice.innerHTML = `
        <div class="policy-language-notice-copy">
          <dl class="policy-language-context">
            <div>
              <dt data-policy-i18n="availability.interfaceLabel"></dt>
              <dd data-policy-i18n="availability.interfaceValue"></dd>
            </div>
            <div>
              <dt data-policy-i18n="availability.documentLabel"></dt>
              <dd data-policy-i18n="availability.documentValue"></dd>
            </div>
          </dl>
          <p data-policy-i18n="availability.body"></p>
        </div>
        <button class="policy-language-notice-action" type="button" data-view-vietnamese-document data-policy-i18n="availability.action"></button>`;
    }
  }

  function structureDocumentTitle() {
    const heading = document.querySelector(".policy-card h1");
    const eyebrow = document.querySelector(".policy-card .policy-eyebrow");
    const languageNotice = document.querySelector("[data-policy-language-notice]");
    if (!heading) return;

    if (eyebrow) eyebrow.dataset.policyI18n = "document.eyebrow";

    const sourceTitle = heading.textContent.trim();
    const separatorIndex = sourceTitle.lastIndexOf(" - ");
    if (separatorIndex < 0) return;

    const primaryTitle = sourceTitle.slice(0, separatorIndex);
    const appName = sourceTitle.slice(separatorIndex + 3);
    const primarySpan = document.createElement("span");
    const appSpan = document.createElement("span");

    primarySpan.className = "policy-document-title-primary";
    primarySpan.textContent = primaryTitle;
    appSpan.className = "policy-document-app-name";
    appSpan.textContent = appName;

    heading.classList.add("policy-document-title");
    heading.setAttribute("aria-label", sourceTitle);
    heading.setAttribute("tabindex", "-1");
    heading.replaceChildren(primarySpan, appSpan);

    if (languageNotice) heading.insertAdjacentElement("afterend", languageNotice);
  }

  function v2Url(language, hash) {
    const url = new URL("../v2/", window.location.href);
    url.searchParams.set("lang", language);
    url.hash = hash;
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function setMenu(isOpen) {
    const nav = document.querySelector("[data-policy-nav]");
    const toggle = document.querySelector("[data-policy-nav-toggle]");
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    header?.classList.toggle("is-menu-open", isOpen);
  }

  function updateUrl(language) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({ language }, "", url);
  }

  function applyLanguage(language, { persist = true, updateUrl: shouldUpdateUrl = true } = {}) {
    const nextLanguage = supportedLanguages.includes(language) ? language : "en";
    const translations = locales[nextLanguage];
    if (!translations) return;

    document.documentElement.lang = nextLanguage;
    document.documentElement.dataset.locale = nextLanguage;

    document.querySelectorAll("[data-policy-i18n]").forEach((element) => {
      const key = element.dataset.policyI18n;
      if (Object.hasOwn(translations, key)) element.textContent = translations[key];
    });

    document.querySelectorAll("[data-policy-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.policyI18nAriaLabel;
      if (Object.hasOwn(translations, key)) element.setAttribute("aria-label", translations[key]);
    });

    document.querySelectorAll("button[data-policy-language]").forEach((button) => {
      const isActive = button.dataset.policyLanguage === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-v2-home-link]").forEach((link) => {
      link.setAttribute("href", v2Url(nextLanguage, "top"));
    });
    document.querySelectorAll("[data-v2-apps-link]").forEach((link) => {
      link.setAttribute("href", v2Url(nextLanguage, "apps"));
    });
    document.querySelectorAll("[data-policy-route]").forEach((link) => {
      const url = new URL(link.getAttribute("href"), window.location.href);
      url.searchParams.set("lang", nextLanguage);
      link.setAttribute("href", `${url.pathname}${url.search}`);
    });

    const languageNotice = document.querySelector("[data-policy-language-notice]");
    const article = document.querySelector(".policy-card");
    if (languageNotice) {
      const isUnavailable = nextLanguage === "en";
      languageNotice.hidden = !isUnavailable;
      if (isUnavailable) article?.setAttribute("aria-describedby", languageNotice.id);
      else article?.removeAttribute("aria-describedby");
    }

    if (persist) persistLanguage(nextLanguage);
    if (shouldUpdateUrl) updateUrl(nextLanguage);
  }

  renderShell();
  structureDocumentTitle();
  applyLanguage(getInitialLanguage());

  const nav = document.querySelector("[data-policy-nav]");
  const navToggle = document.querySelector("[data-policy-nav-toggle]");

  navToggle?.addEventListener("click", () => {
    setMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });

  nav?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement || event.target.closest("a")) setMenu(false);
  });

  document.querySelectorAll("button[data-policy-language]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.policyLanguage);
      setMenu(false);
    });
  });

  document.querySelector("[data-view-vietnamese-document]")?.addEventListener("click", () => {
    applyLanguage("vi");
    document.querySelector(".policy-document-title")?.focus({ preventScroll: true });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setMenu(false);
  });

  function updateHeader() {
    header?.classList.toggle("is-scrolled", window.scrollY > 10);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
