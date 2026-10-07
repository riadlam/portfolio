import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import LangSwitcher from "./LangSwitcher";

const curtainVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)" },
};

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/practice", label: t.nav.practice },
    { to: "/contact", label: t.nav.contact },
  ];

  const close = () => setOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="nav-brand" onClick={close}>
            {t.brand}
          </Link>

          <nav className="nav-links" aria-label={t.nav.primary}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <LangSwitcher />
            <Link to="/contact" className="nav-cta">
              {t.nav.consult}
            </Link>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={t.nav.menu}
              aria-expanded={open}
            >
              <span className={`burger-icon${open ? " open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Top-curtain mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            variants={curtainVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.06 * i + 0.12,
                    duration: 0.32,
                    ease: "easeOut",
                  }}
                >
                  <Link to={to} className="mobile-link" onClick={close}>
                    {label}
                  </Link>
                </motion.div>
              ))}

              <div className="mobile-menu-foot">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.38 }}
                >
                  <LangSwitcher dark />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.44 }}
                >
                  <Link to="/contact" className="mobile-cta" onClick={close}>
                    {t.nav.consult}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
