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

const HERO_IMG =
  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=80";
const TRUST_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80";

function PracticeAccordionItem({
  practice,
  index,
  lang,
  enquireLabel,
}: {
  practice: (typeof practices)[0];
  index: number;
  lang: "en" | "ar";
  enquireLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const name = lang === "ar" ? practice.nameAr : practice.nameEn;
  const detail = lang === "ar" ? practice.detailAr : practice.detailEn;
  const summary = lang === "ar" ? practice.summaryAr : practice.summaryEn;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className={`acc-item${open ? " acc-item--open" : ""}`}>
      <button
        className="acc-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="acc-idx">{num}</span>
        <div className="acc-trigger-main">
          <span className="acc-name">{name}</span>
          <span className="acc-summary">{summary}</span>
        </div>
        <span className={`acc-indicator${open ? " open" : ""}`}>
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
        {open && (
          <motion.div
            className="acc-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="acc-inner">
              <div>
                <p className="acc-detail">{detail}</p>
                <Link
                  to={`/contact?practice=${practice.id}`}
                  className="acc-enquire"
                >
                  {enquireLabel}
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
              </div>
              <div className="acc-image">
                <img src={practice.image} alt={name} loading="lazy" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const h = t.home;

  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <section className="hero">
        <div className="hero-content">
          <Reveal>
            <span className="eyebrow hero-eyebrow">{h.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero-headline">{h.headline}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-support">{h.support}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="hero-actions">
              <Link to="/practice" className="btn-navy">
                {h.ctaPractice}
              </Link>
              <Link to="/contact" className="btn-copper-outline">
                {h.ctaConsult}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="hero-rule" aria-hidden="true" />

        <div className="hero-image-col">
          <motion.img
            className="hero-img"
            src={HERO_IMG}
            alt={h.heroAlt}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </div>
      </section>

      <section className="stats-bar" aria-label="Highlights">
        <div className="stats-bar__inner">
          {h.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="principles">
        <div className="principles-header">
          <Reveal>
            <span className="eyebrow">{h.principleEyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="principles-pretitle">{h.principleTitle}</h2>
          </Reveal>
        </div>

        <div className="principles-bands">
          {h.principles.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.07}>
              <div className="principle-band">
                <span className="principle-num-bg" aria-hidden="true">
                  {p.num}
                </span>
                <div className="principle-left">
                  <span className="principle-num">{p.num}</span>
                  <h3 className="principle-title">{p.title}</h3>
                </div>
                <div className="principle-right">
                  <p className="principle-text">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="practice-preview section">
        <div className="section-inner">
          <div className="practice-preview-header">
            <div className="practice-preview-left">
              <Reveal>
                <span className="eyebrow">{h.practiceEyebrow}</span>
              </Reveal>
              <Reveal delay={0.07}>
                <h2 className="practice-preview-title">{h.practiceTitle}</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="practice-preview-lead">{h.practiceLead}</p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Link to="/practice" className="practice-view-all-link">
                {h.viewAll}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="practice-accordion">
            {practices.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <PracticeAccordionItem
                  practice={p}
                  index={i}
                  lang={lang}
                  enquireLabel={t.practicePage.enquire}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <div className="trust-content">
            <Reveal>
              <span className="eyebrow">{h.trustEyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="trust-title">{h.trustTitle}</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="trust-lead">{h.trustLead}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="trust-points">
                {h.trustPoints.map((pt) => (
                  <li key={pt}>
                    <span className="trust-point-bar" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="trust-image-wrap">
              <img
                className="trust-image"
                src={TRUST_IMG}
                alt={h.trustAlt}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-inner">
          <div className="home-cta-copy">
            <Reveal>
              <h2 className="home-cta-title">{h.ctaTitle}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="home-cta-text">{h.ctaText}</p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <Link to="/contact" className="btn-navy">
              {h.ctaButton}
            </Link>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
}
