import { useI18n } from "../i18n";

const NAV_IDS = ["home", "about", "projects", "skills", "contact"] as const;

export function Header() {
  const { locale, t, setLocale } = useI18n();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#home" className="header__logo">
          <span className="header__logo-mark">AM</span>
          <span className="header__logo-text">Portfolio</span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`} className="header__link">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-switch__btn ${locale === "es" ? "is-active" : ""}`}
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
            <button
              type="button"
              className={`lang-switch__btn ${locale === "en" ? "is-active" : ""}`}
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
