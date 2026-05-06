/* Shared header / footer / mobile sheet for all pages.
   Each page sets <body data-page="praxis"> to mark the active nav link. */
(function () {
  const NAV = [
    ["startseite", "index.html", "Startseite"],
    ["praxis", "praxis.html", "Praxis-Team"],
    ["leistungen", "leistungen.html", "Leistungen"],
    ["standorte", "standorte.html", "Standorte"],
    ["aktuelles", "aktuelles.html", "Aktuelles"],
    ["kontakt", "kontakt.html", "Kontakt"],
  ];

  const active = document.body.dataset.page || "";

  const navHtml = NAV.map(
    ([id, href, label]) =>
      `<a href="${href}" class="${id === active ? "is-active" : ""}">${label}</a>`
  ).join("");

  const headerHtml = `
    <header class="site-header" role="banner">
      <div class="site-header__inner container">
        <a href="index.html" class="site-header__brand" aria-label="Startseite">
          <img src="assets/logo.png" alt="Schönhärl Kroehling Gloßner" />
        </a>
        <nav class="site-header__nav" aria-label="Hauptnavigation">${navHtml}</nav>
        <a href="tel:+4994098629 0" class="btn btn--primary site-header__cta">
          <i data-lucide="phone"></i>
          <span>09409 / 86290</span>
        </a>
        <a href="tel:+4994098629 0" class="site-header__cta-mobile" aria-label="Anrufen">
          <i data-lucide="phone"></i><span>Anrufen</span>
        </a>
        <button class="menu-toggle" aria-label="Menü öffnen" id="menu-open">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </header>

    <aside class="mobile-sheet" id="mobile-sheet" aria-hidden="true">
      <div class="mobile-sheet__head">
        <img src="assets/logo.png" alt="" />
        <button class="menu-toggle" aria-label="Menü schließen" id="menu-close">
          <i data-lucide="x"></i>
        </button>
      </div>
      <nav class="mobile-sheet__nav" aria-label="Mobile Navigation">${
        NAV.map(([, href, label]) => `<a href="${href}">${label}</a>`).join("")
      }</nav>
      <a href="tel:+4994098629 0" class="mobile-sheet__cta">
        Telefonisch erreichbar
        <strong>09409 / 86290</strong>
      </a>
    </aside>
  `;

  const phoneStripHtml = `
    <section class="phone-strip">
      <div class="container phone-strip__inner">
        <div>
          <div class="eyebrow eyebrow--on-dark">Termin vereinbaren</div>
          <h2>Am liebsten am Telefon.</h2>
          <p>
            Online-Terminbuchung bieten wir bewusst nicht an — am Telefon können
            wir Ihr Anliegen besser einschätzen und Sie schneller weiterleiten.
          </p>
        </div>
        <a href="tel:+4994098629 0" class="phone-strip__big">
          <i data-lucide="phone-call"></i>
          <div>
            <div class="phone-strip__big-num">09409 / 86290</div>
            <div class="phone-strip__sub">Mo – Do 07:30 – 18:00 · Fr 07:30 – 12:00</div>
          </div>
        </a>
      </div>
    </section>
  `;

  const footerHtml = `
    <footer class="site-footer" role="contentinfo">
      <div class="container site-footer__inner">
        <div class="site-footer__brand">
          <img src="assets/logo.png" alt="Schönhärl Kroehling Gloßner" />
          <p>Gemeinschaftspraxis im Naabtal — Pielenhofen &amp; Wolfsegg. Ihre Hausarztpraxis seit 1998.</p>
        </div>
        <nav class="site-footer__col" aria-label="Praxis">
          <div class="site-footer__head">Praxis</div>
          <a href="praxis.html">Team</a>
          <a href="leistungen.html">Leistungen</a>
          <a href="aktuelles.html">Aktuelles</a>
          <a href="kontakt.html">Kontakt</a>
        </nav>
        <nav class="site-footer__col" aria-label="Standorte">
          <div class="site-footer__head">Standorte</div>
          <a href="standorte.html#pielenhofen">Pielenhofen</a>
          <a href="standorte.html#wolfsegg">Wolfsegg</a>
          <a href="kontakt.html">Anfahrt</a>
        </nav>
        <div class="site-footer__col site-footer__col--wide">
          <div class="site-footer__head">Kontakt</div>
          <p class="site-footer__legal">
            Tel. 09409 / 86290 · Fax 09409 / 862920<br/>
            <em>E-Mail nur für Impressum-Anfragen, keine Patientenanfragen.</em>
          </p>
          <div class="site-footer__legal-links">
            <a href="impressum.html">Impressum</a>
            <a href="datenschutz.html">Datenschutz</a>
            <a href="kontakt.html">Barrierefreiheit</a>
          </div>
        </div>
      </div>
      <div class="container site-footer__bottom">
        <span>© 2026 Gemeinschaftspraxis Schönhärl · Kroehling · Gloßner</span>
        <span>Made with care in the Naabtal</span>
      </div>
    </footer>
  `;

  const headerSlot = document.querySelector("[data-slot='header']");
  if (headerSlot) headerSlot.outerHTML = headerHtml;

  const phoneSlot = document.querySelector("[data-slot='phone-strip']");
  if (phoneSlot) phoneSlot.outerHTML = phoneStripHtml;

  const footerSlot = document.querySelector("[data-slot='footer']");
  if (footerSlot) footerSlot.outerHTML = footerHtml;

  // Mobile sheet wiring
  document.addEventListener("click", (e) => {
    if (e.target.closest("#menu-open")) {
      document.getElementById("mobile-sheet").classList.add("is-open");
    } else if (e.target.closest("#menu-close")) {
      document.getElementById("mobile-sheet").classList.remove("is-open");
    } else if (e.target.closest(".mobile-sheet__nav a, .mobile-sheet__cta")) {
      document.getElementById("mobile-sheet").classList.remove("is-open");
    }
  });

  // Lucide
  if (window.lucide) window.lucide.createIcons();

  // Scroll reveal — add .reveal class to key sections, trigger on viewport entry
  function initReveal() {
    const targets = document.querySelectorAll(
      ".info-card, .doctor-card, .news-item, .service-row, " +
      ".team-doctor, .mfa-grid__item, .location-block__inner > *, " +
      ".services-team-band__photo, .services-team-band__copy, " +
      ".philosophy__inner, .section-head, .contact-card, .contact-map"
    );
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      const delay = Math.min(i % 4, 3);
      if (delay > 0) el.classList.add("reveal-delay-" + delay);
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
  }

  initReveal();
})();
