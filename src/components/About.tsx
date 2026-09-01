import { useI18n } from "../i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <div className="section__header">
          <h2 className="section__title">{t.about.title}</h2>
        </div>
        <div className="about__text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
