import { useI18n } from "../i18n";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <div className="section__header">
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="section__subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact__links">
          <a href={`mailto:${t.contact.email}`} className="contact__link">
            <span className="contact__link-label">{t.contact.emailLabel}</span>
            <span className="contact__link-value">{t.contact.email}</span>
          </a>
          <a
            href={t.contact.githubUrl}
            className="contact__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__link-label">{t.contact.githubLabel}</span>
            <span className="contact__link-value">{t.contact.github}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
