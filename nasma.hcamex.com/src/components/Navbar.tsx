import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/journeys", label: t.nav.journeys },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
            <svg
              className="nav__mark"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 22c4-8 8-12 12-12s8 4 12 12M8 26h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="16" cy="8" r="2" fill="currentColor" />
            </svg>
            <span className="nav__name">{t.brand}</span>
          </Link>

          <nav
            id="primary-nav"
            className={`nav__links${open ? " nav__links--open" : ""}`}
            aria-label={t.nav.primary}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav__link${isActive ? " nav__link--active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <LangSwitcher className="lang-switch--menu" layoutId="lang-pill-menu" />

            <Link
              to="/contact"
              className="btn btn--coral nav__cta"
              onClick={() => setOpen(false)}
            >
              {t.nav.plan}
            </Link>
          </nav>

          <div className="nav__actions">
            <LangSwitcher className="lang-switch--bar" layoutId="lang-pill-bar" />

            <button
              className="nav__toggle"
              aria-label={t.nav.menu}
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-backdrop${open ? " nav-backdrop--open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
    </>
  );
}
