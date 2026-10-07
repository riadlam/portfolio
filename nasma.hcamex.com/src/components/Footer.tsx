import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-name">{t.brand}</div>
            <p>{t.footer.blurb}</p>
          </div>

          <div className="footer__col">
            <h4>{t.footer.explore}</h4>
            <Link to="/">{t.nav.home}</Link>
            <Link to="/about">{t.nav.about}</Link>
            <Link to="/journeys">{t.nav.journeys}</Link>
            <Link to="/contact">{t.nav.contact}</Link>
          </div>

          <div className="footer__col">
            <h4>{t.footer.atelier}</h4>
            <p>{t.footer.address}</p>
            <p>{t.footer.hours}</p>
          </div>

          <div className="footer__col">
            <h4>{t.footer.connect}</h4>
            <a href="mailto:hello@nasmajourneys.ae">hello@nasmajourneys.ae</a>
            <a href="tel:+97144321000">+971 4 432 1000</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {t.brand}
          </span>
          <span>Dubai, UAE</span>
        </div>
      </div>
    </footer>
  );
}
