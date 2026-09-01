import { useI18n } from "../i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__greeting">{t.hero.greeting}</p>
          <h1 className="hero__name">{t.hero.name}</h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__subtitle">{t.hero.subtitle}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              {t.hero.ctaProjects}
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hero__aside">
          <div className="hero__cards">
            <div className="hero__card hero__card--nyx">
              <span className="hero__card-icon">✦</span>
              <span className="hero__card-label">NYX</span>
              <span className="hero__card-desc">App Store · IA</span>
            </div>
            <div className="hero__card hero__card--helix">
              <span className="hero__card-icon">◎</span>
              <span className="hero__card-label">HostHelix</span>
              <span className="hero__card-desc">Lab ARN/ADN</span>
            </div>
            <div className="hero__card hero__card--saas">
              <span className="hero__card-icon">◈</span>
              <span className="hero__card-label">Empleado Digital</span>
              <span className="hero__card-desc">SaaS · MVP</span>
            </div>
            <div className="hero__card hero__card--enterprise">
              <span className="hero__card-icon">⬡</span>
              <span className="hero__card-label">Telecom</span>
              <span className="hero__card-desc">Pipeline + monitor</span>
            </div>
          </div>

          <div className="hero__stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
    </section>
  );
}
