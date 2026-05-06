function Locations() {
  return (
    <section className="locations" id="standorte">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Standorte</div>
          <h2>Zwei Häuser im Naabtal.</h2>
        </div>

        <div className="locations__grid">
          <article className="location-card location-card--main">
            <div className="location-card__photo" style={{ backgroundImage: "url(../../assets/interior-1.png)" }}>
              <span className="location-card__pill">Hauptstandort</span>
            </div>
            <div className="location-card__body">
              <h3>Praxis Pielenhofen</h3>
              <div className="location-card__address">
                Etterzhausener Str. 20<br/>93188 Pielenhofen
              </div>
              <table className="hours-card__table hours-card__table--inline">
                <tbody>
                  <tr><td>Mo – Do</td><td>07:30 – 12:00 · 15:00 – 18:00</td></tr>
                  <tr><td>Fr</td><td>07:30 – 12:00</td></tr>
                  <tr className="muted"><td>Sa · So</td><td>geschlossen</td></tr>
                </tbody>
              </table>
              <div className="location-card__feats">
                <span><i data-lucide="accessibility"></i> Barrierefrei</span>
                <span><i data-lucide="circle-parking"></i> Parkplätze</span>
                <span><i data-lucide="check"></i> Behinderten-WC</span>
              </div>
              <div className="location-card__ctas">
                <a className="btn btn--primary" href="tel:+4994098629 0"><i data-lucide="phone"></i> 09409 / 86290</a>
                <a className="btn btn--secondary" href="#"><i data-lucide="map-pin"></i> Route planen</a>
              </div>
            </div>
          </article>

          <article className="location-card">
            <div className="location-card__photo" style={{ backgroundImage: "url(../../assets/pielenhofen-landscape.png)" }}>
              <span className="location-card__pill location-card__pill--alt">Filialpraxis</span>
            </div>
            <div className="location-card__body">
              <h3>Praxis Wolfsegg</h3>
              <div className="location-card__address">
                Wolfsegg<br/>(Beratung &amp; Blutabnahmen)
              </div>
              <p className="location-card__note">
                <i data-lucide="info"></i>
                <span><strong>Hinweis Freitag:</strong> Blutentnahmen bitte spätestens bis <strong>10:15 Uhr</strong> — danach holt das Labor ab.</span>
              </p>
              <div className="location-card__feats">
                <span><i data-lucide="accessibility"></i> Barrierefrei</span>
                <span><i data-lucide="droplet"></i> Blutabnahmen</span>
              </div>
              <div className="location-card__ctas">
                <a className="btn btn--primary" href="tel:+4994098629 0"><i data-lucide="phone"></i> 09409 / 86290</a>
                <a className="btn btn--secondary" href="#"><i data-lucide="map-pin"></i> Route planen</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

window.Locations = Locations;
