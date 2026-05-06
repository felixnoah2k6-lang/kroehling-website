function News() {
  const items = [
    {
      tag: "Sprechzeiten",
      date: "12. Mai 2026",
      title: "Pfingstferien — geänderte Öffnungszeiten",
      body: "In der Woche nach Pfingsten ist die Praxis nur vormittags geöffnet (Mo–Fr 07:30 – 12:00). In dringenden Fällen erreichen Sie den ärztlichen Bereitschaftsdienst unter 116117.",
    },
    {
      tag: "Impfung",
      date: "28. April 2026",
      title: "FSME-Impfung — Zecken-Saison hat begonnen",
      body: "Wer im Garten oder Wald unterwegs ist, sollte den FSME-Schutz prüfen lassen. Bringen Sie Ihren Impfausweis zu jedem regulären Termin mit — wir impfen ohne extra Vereinbarung mit.",
    },
    {
      tag: "Praxis",
      date: "10. März 2026",
      title: "Wir nehmen weiterhin neue Patientinnen und Patienten auf.",
      body: "Trotz wachsender Nachfrage bleiben wir offen für neue Patientinnen und Patienten aus Pielenhofen, Wolfsegg und der Umgebung. Rufen Sie uns einfach an.",
    },
  ];
  return (
    <section className="news" id="aktuelles">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Aktuelles</div>
          <h2>Aus der Praxis.</h2>
        </div>
        <div className="news__list">
          {items.map((n) => (
            <article key={n.title} className="news-item">
              <div className="news-item__meta">
                <span className="tag">{n.tag}</span>
                <time>{n.date}</time>
              </div>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.News = News;
