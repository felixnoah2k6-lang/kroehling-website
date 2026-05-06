/* global React */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Praxis", "#praxis"],
    ["Team", "#team"],
    ["Leistungen", "#leistungen"],
    ["Standorte", "#standorte"],
    ["Aktuelles", "#aktuelles"],
    ["Kontakt", "#kontakt"],
  ];
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a href="#top" className="site-header__brand" aria-label="Startseite">
          <img src="../../assets/logo.png" alt="Schönhärl Kroehling Gloßner" />
        </a>
        <nav className="site-header__nav" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a href="tel:+4994098629 0" className="btn btn--primary site-header__cta">
          <i data-lucide="phone"></i>
          <span>09409 / 86290</span>
        </a>
      </div>
    </header>
  );
}

window.Header = Header;
