import { useI18n } from "../i18n";

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.skills.title}</h2>
          <p className="section__subtitle">{t.skills.subtitle}</p>
        </div>

        <div className="skills__grid">
          {t.skills.categories.map((cat) => (
            <div key={cat.name} className="skill-card">
              <h3 className="skill-card__title">{cat.name}</h3>
              <ul className="skill-card__list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
