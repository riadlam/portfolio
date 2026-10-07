import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

type NavbarProps = {
  transparent?: boolean;
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/faq", label: t.nav.faq },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const classes = [
    "nav",
    transparent ? "nav--transparent" : "nav--solid",
    scrolled && !open ? "nav--scrolled" : "",
    open ? "nav--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <svg className="nav__mark" viewBox="0 0 32 32" fill="none" aria-hidden>
            <path d="M16 4L28 28H4L16 4Z" stroke="currentColor" strokeWidth="1.75" />
            <circle cx="16" cy="22" r="2" fill="currentColor" />
          </svg>
          <span className="nav__name">{t.brand}</span>
        </Link>

        <div className="nav__actions">
          <div
            className="lang-switch lang-switch--bar"
            role="group"
            aria-label={t.lang.switchTo}
          >
            <button
              type="button"
              className={`lang-switch__btn${lang === "en" ? " lang-switch__btn--active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              {t.lang.en}
            </button>
            <button
              type="button"
              className={`lang-switch__btn${lang === "ar" ? " lang-switch__btn--active" : ""}`}
              onClick={() => setLang("ar")}
              aria-pressed={lang === "ar"}
            >
              {t.lang.ar}
            </button>
          </div>

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

        <nav
          id="primary-nav"
          className={`nav__links ${open ? "nav__links--open" : ""}`}
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

          <div
            className="lang-switch lang-switch--menu"
            role="group"
            aria-label={t.lang.switchTo}
          >
            <button
              type="button"
              className={`lang-switch__btn${lang === "en" ? " lang-switch__btn--active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              {t.lang.en}
            </button>
            <button
              type="button"
              className={`lang-switch__btn${lang === "ar" ? " lang-switch__btn--active" : ""}`}
              onClick={() => setLang("ar")}
              aria-pressed={lang === "ar"}
            >
              {t.lang.ar}
            </button>
          </div>

          <Link
            to="/contact"
            className="btn btn--primary nav__cta"
            onClick={() => setOpen(false)}
          >
            {t.nav.enquire}
          </Link>
        </nav>
      </div>
    </header>
  );
}
