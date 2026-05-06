function Services() {
  const items = [
    { icon: "stethoscope", title: "Hausärztliche Versorgung", body: "Allgemeinmedizin für jedes Alter — von der Vorsorge bis zur chronischen Begleitung." },
    { icon: "syringe", title: "Impfungen", body: "Bitte bringen Sie Ihren Impfausweis und einen ausgefüllten Anamnesebogen mit." },
    { icon: "activity", title: "Sonographie", body: "DEGUM-zertifizierte Ultraschall­diagnostik durch Dr. Gloßner." },
    { icon: "droplet", title: "Blutentnahmen", body: "Auch in Wolfsegg — freitags bitte spätestens bis 10:15 Uhr (Laborabholung)." },
    { icon: "heart-pulse", title: "Notfallmedizin", body: "Schnelle Hilfe vor Ort durch zwei notfallmedizinisch ausgebildete Ärzte." },
    { icon: "file-text", title: "eAU", body: "Elektronische Arbeitsunfähigkeits­bescheinigung — direkt an Ihre Krankenkasse." },
  ];
  return (
    <section className="services" id="leistungen">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Leistungen</div>
          <h2>Was wir für Sie tun.</h2>
          <p className="section-head__lead">
            Hausärztliche Vollversorgung mit moderner Diagnostik. Bei speziellen Fragen
            besprechen wir gemeinsam die nächsten Schritte — auch eine Überweisung, wenn
            sie sinnvoll ist.
          </p>
        </div>

        <div className="services__grid">
          {items.map((it) => (
            <article key={it.title} className="service-tile">
              <div className="service-tile__icon">
                <i data-lucide={it.icon}></i>
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
