import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { practices } from "../i18n/translations";
import Reveal from "../components/Reveal";

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const detailVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function Practice() {
  const { t, lang } = useLanguage();
  const pp = t.practicePage;
  const [activeId, setActiveId] = useState(practices[0].id);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const active = practices.find((p) => p.id === activeId) ?? practices[0];

  const getName = (p: (typeof practices)[0]) =>
    lang === "ar" ? p.nameAr : p.nameEn;
  const getSummary = (p: (typeof practices)[0]) =>
    lang === "ar" ? p.summaryAr : p.summaryEn;
  const getDetail = (p: (typeof practices)[0]) =>
    lang === "ar" ? p.detailAr : p.detailEn;

  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <Reveal>
            <span className="eyebrow">{t.nav.practice}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero-title">{pp.heroTitle}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="page-hero-lead">{pp.heroLead}</p>
          </Reveal>
        </div>
      </div>

      {/* Desktop: sticky index + detail panel */}
      <div className="practice-page-inner">
        <div className="practice-layout">
          {/* Index */}
          <nav className="practice-index" aria-label={pp.heroTitle}>
            {practices.map((p) => (
              <button
                key={p.id}
                className={`practice-index-btn${activeId === p.id ? " active" : ""}`}
                onClick={() => setActiveId(p.id)}
              >
                {getName(p)}
              </button>
            ))}
          </nav>

          {/* Detail panel */}
          <div className="practice-detail-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                variants={detailVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img
                  className="practice-detail-img"
                  src={active.image}
                  alt={getName(active)}
                  loading="eager"
                />
                <h2 className="practice-detail-title">{getName(active)}</h2>
                <p className="practice-detail-summary">{getSummary(active)}</p>
                <p className="practice-detail-text">{getDetail(active)}</p>
                <Link
                  to={`/contact?practice=${active.id}`}
                  className="practice-enquire-btn"
                >
                  {pp.enquire}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile: stacked accordion */}
      <div className="practice-mobile">
        {practices.map((p, i) => {
          const isOpen = mobileOpen === p.id;
          return (
            <Reveal key={p.id} delay={i * 0.05}>
              <div className="practice-mob-item">
                <button
                  className="practice-mob-trigger"
                  onClick={() => setMobileOpen(isOpen ? null : p.id)}
                  aria-expanded={isOpen}
                >
                  <span className="practice-mob-name">{getName(p)}</span>
                  <span className={`practice-mob-icon${isOpen ? " open" : ""}`}>
                    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <line
                        x1="6"
                        y1="1"
                        x2="6"
                        y2="11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="6"
                        x2="11"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="practice-mob-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.38,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <div className="practice-mob-inner">
                        <img
                          className="practice-mob-img"
                          src={p.image}
                          alt={getName(p)}
                          loading="lazy"
                        />
                        <p className="practice-mob-summary">{getSummary(p)}</p>
                        <p className="practice-mob-detail">{getDetail(p)}</p>
                        <Link
                          to={`/contact?practice=${p.id}`}
                          className="practice-mob-enquire"
                        >
                          {pp.enquire}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </motion.div>
  );
}
