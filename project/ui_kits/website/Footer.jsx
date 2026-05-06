function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src="../../assets/logo.png" alt="Schönhärl Kroehling Gloßner" />
          <p>Gemeinschaftspraxis im Naabtal. Pielenhofen &amp; Wolfsegg.</p>
        </div>
        <nav className="site-footer__col">
          <div className="site-footer__head">Praxis</div>
          <a href="#praxis">Über uns</a>
          <a href="#team">Team</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#aktuelles">Aktuelles</a>
        </nav>
        <nav className="site-footer__col">
          <div className="site-footer__head">Standorte</div>
          <a href="#standorte">Pielenhofen</a>
          <a href="#standorte">Wolfsegg</a>
          <a href="#kontakt">Anfahrt</a>
        </nav>
        <div className="site-footer__col site-footer__col--wide">
          <div className="site-footer__head">Impressum</div>
          <p className="site-footer__legal">
            Tel. 09409 / 86290 · Fax 09409 / 862920<br/>
            E-Mail (nur Impressum, <em>keine Patientenanfragen</em>):<br/>
            <a href="mailto:praxis-pielenhofen@web.de">praxis-pielenhofen@web.de</a>
          </p>
          <div className="site-footer__legal-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">Barrierefreiheit</a>
          </div>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 Gemeinschaftspraxis Schönhärl · Kroehling · Gloßner</span>
        <span>Made with care in the Naabtal</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
