function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="container contact__inner">
        <div className="contact__copy">
          <div className="eyebrow eyebrow--on-dark">Kontakt &amp; Anfahrt</div>
          <h2>Am liebsten am Telefon.</h2>
          <p>
            Für Termine, Rückrufe und Fragen rufen Sie uns gerne an. Aus
            Datenschutzgründen können wir <strong>keine Patientenanfragen
            per E-Mail</strong> beantworten.
          </p>
          <div className="contact__lines">
            <div className="contact__line">
              <i data-lucide="phone"></i>
              <div>
                <div className="contact__line-label">Telefon</div>
                <a href="tel:+4994098629 0">09409 / 86290</a>
              </div>
            </div>
            <div className="contact__line">
              <i data-lucide="printer"></i>
              <div>
                <div className="contact__line-label">Fax</div>
                <span>09409 / 862920</span>
              </div>
            </div>
            <div className="contact__line">
              <i data-lucide="map-pin"></i>
              <div>
                <div className="contact__line-label">Adresse</div>
                <span>Etterzhausener Str. 20 · 93188 Pielenhofen</span>
              </div>
            </div>
            <div className="contact__line">
              <i data-lucide="accessibility"></i>
              <div>
                <div className="contact__line-label">Barrierefreiheit</div>
                <span>Eingang, WC und Parkplätze rollstuhl­gerecht.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__map">
          <div className="contact__map-frame">
            <img src="../../assets/pielenhofen-landscape.png" alt="Pielenhofen im Naabtal" />
            <div className="contact__map-pin">
              <i data-lucide="map-pin"></i>
              <div>
                <strong>Pielenhofen</strong>
                <span>Etterzhausener Str. 20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
