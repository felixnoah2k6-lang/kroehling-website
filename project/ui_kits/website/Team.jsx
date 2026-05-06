function Team() {
  const doctors = [
    {
      name: "Dr. med. Bernhard Schönhärl",
      role: "Facharzt für Allgemeinmedizin",
      tags: ["Notfallmedizin", "Praxisgründer"],
      img: "../../assets/dr-schoenhaerl.png",
      bio: "Gründete die Praxis 1998. Hausarzt mit Leib und Seele und seit über 25 Jahren erste Anlaufstelle für viele Familien im Naabtal.",
    },
    {
      name: "Philipp Kroehling",
      role: "Facharzt für Allgemeinmedizin",
      tags: ["Partner"],
      img: "../../assets/dr-kroehling.png",
      bio: "Partner der Gemeinschaftspraxis. Schwerpunkt Familien­medizin und Vorsorge — vom Säugling bis zu den Großeltern.",
    },
    {
      name: "Dr. med. Sebastian Gloßner",
      role: "Facharzt für Allgemeinmedizin",
      tags: ["Notfallmedizin", "DEGUM Sonographie"],
      img: "../../assets/dr-glossner.png",
      bio: "Seit 2019 Partner. DEGUM-zertifizierte Sonographie und langjährige Erfahrung in der Notfallmedizin.",
    },
  ];

  const mfas = [
    { name: "Christa Schönhärl", img: "../../assets/team/christa-schoenhaerl.png" },
    { name: "Nicole Rank", img: "../../assets/team/nicole-rank.png" },
    { name: "Lisa Schwarz", img: "../../assets/team/lisa-schwarz.png" },
    { name: "Kathrin Reisinger", img: "../../assets/team/kathrin-reisinger.png" },
    { name: "Lena Maußhammer", img: "../../assets/team/lena-mausshammer.png" },
    { name: "Marianne Schmied", img: "../../assets/team/marianne-schmied.png" },
    { name: "Pia Korb", img: "../../assets/team/pia-korb.png" },
    { name: "Lisa Schönhärl", img: "../../assets/team/lisa-schoenhaerl.png" },
    { name: "Josefa Winkler", img: "../../assets/team/josefa-winkler.png" },
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Praxis-Team</div>
          <h2>Drei Ärzte, ein Team — und viele bekannte Gesichter.</h2>
        </div>

        <div className="team__doctors">
          {doctors.map((d) => (
            <article key={d.name} className="doctor-card">
              <div className="doctor-card__photo" style={{ backgroundImage: `url(${d.img})` }} />
              <div className="doctor-card__body">
                <h3 className="doctor-card__name">{d.name}</h3>
                <div className="doctor-card__role">{d.role}</div>
                <div className="doctor-card__tags">
                  {d.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="doctor-card__bio">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="team__mfa">
          <div className="team__mfa-head">
            <div className="eyebrow">Medizinische Fachangestellte</div>
            <h3>Unsere MFAs</h3>
            <p>Sie sind Ihre erste Stimme am Telefon und erste Hand in der Praxis. Caroline Bleicher fehlt auf den Bildern — sie gehört aber dazu.</p>
          </div>
          <ul className="mfa-grid">
            {mfas.map((m) => (
              <li key={m.name} className="mfa-grid__item">
                <div className="mfa-grid__photo" style={{ backgroundImage: `url(${m.img})` }} />
                <div className="mfa-grid__name">{m.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

window.Team = Team;
