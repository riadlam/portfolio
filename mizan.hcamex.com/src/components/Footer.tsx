import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <span className="footer-brand-text">{t.brand}</span>
            <p className="footer-blurb">{t.footer.blurb}</p>
          </div>

          {/* Explore col */}
          <div>
            <p className="footer-col-title">{t.footer.explore}</p>
            <ul className="footer-links">
              <li>
                <Link to="/">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/about">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/practice">{t.nav.practice}</Link>
              </li>
              <li>
                <Link to="/contact">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Chambers col */}
          <div>
            <p className="footer-col-title">{t.footer.chambers}</p>
            <ul className="footer-links">
              <li>
                <Link to="/about">{t.about.storyEyebrow}</Link>
              </li>
              <li>
                <Link to="/about">{t.about.teamEyebrow}</Link>
              </li>
              <li>
                <Link to="/practice">{t.home.practiceEyebrow}</Link>
              </li>
              <li>
                <Link to="/contact">{t.nav.consult}</Link>
              </li>
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <p className="footer-col-title">{t.footer.connect}</p>
            <div className="footer-contact-row">
              <p className="footer-contact-label">{t.contact.visit}</p>
              <p className="footer-contact-value">{t.footer.address}</p>
            </div>
            <div className="footer-contact-row">
              <p className="footer-contact-label">{t.contact.email}</p>
              <p className="footer-contact-value">counsel@mizanchambers.ae</p>
            </div>
            <div className="footer-contact-row">
              <p className="footer-contact-label">{t.footer.hours}</p>
              <p className="footer-contact-value">{t.footer.hours}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} {t.brand}. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            The information on this website is for general informational
            purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
