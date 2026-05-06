function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="eyebrow">Gemeinschaftspraxis · seit 1998</div>
          <h1 className="display hero__title">
            Ihre Landarztpraxis<br/>im <em>Naabtal.</em>
          </h1>
          <p className="lead hero__lead">
            Wir behandeln Menschen, keine Symptome — und nehmen uns Zeit dafür.
            Hausärztliche Vollversorgung in Pielenhofen und Wolfsegg.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary btn--lg" href="tel:+499409862 90">
              <i data-lucide="phone"></i>
              Jetzt anrufen · 09409 / 86290
            </a>
            <a className="btn btn--ghost btn--lg" href="#standorte">
              <i data-lucide="map-pin"></i>
              Anfahrt &amp; Öffnungszeiten
            </a>
          </div>
          <div className="hero__status">
            <span className="status-dot" aria-hidden="true"></span>
            Heute geöffnet · 07:30 – 12:00 &nbsp;·&nbsp; 15:00 – 18:00
          </div>
        </div>

        <aside className="hero__panel">
          <img className="hero__photo" src="../../assets/team-group.png" alt="Das Team der Gemeinschaftspraxis" />
          <div className="hero__hours-card">
            <div className="hours-card__title">
              <i data-lucide="clock"></i>
              <span>Sprechzeiten Pielenhofen</span>
            </div>
            <table className="hours-card__table">
              <tbody>
                <tr><td>Mo – Do</td><td>07:30 – 12:00 · 15:00 – 18:00</td></tr>
                <tr><td>Fr</td><td>07:30 – 12:00</td></tr>
                <tr className="muted"><td>Sa · So</td><td>geschlossen</td></tr>
              </tbody>
            </table>
            <div className="hours-card__foot">
              Termine bitte ausschließlich telefonisch.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

window.Hero = Hero;
