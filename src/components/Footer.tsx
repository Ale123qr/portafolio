import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {t.hero.name}. {t.footer.rights}
        </p>
        <p className="footer__built">{t.footer.built}</p>
      </div>
    </footer>
  );
}
