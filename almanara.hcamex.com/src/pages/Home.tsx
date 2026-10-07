import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const heroImg =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80";
const approachImg =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80";
const campusImg =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      <section className="home-hero" aria-label={t.nav.home}>
        <div className="home-hero__media">
          <motion.img
            src={heroImg}
            alt={h.heroAlt}
            initial={reduce ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="home-hero__content">
          <motion.h1
            className="home-hero__brand"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.brand}
          </motion.h1>

          <motion.p
            className="home-hero__headline"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {h.headline}
          </motion.p>

          <motion.p
            className="home-hero__support"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {h.support}
          </motion.p>

          <motion.div
            className="home-hero__actions"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="btn btn--primary">
              {h.ctaEnquire}
            </Link>
            <Link to="/about" className="btn btn--ghost">
              {h.ctaStory}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container approach">
          <Reveal>
            <div className="approach__visual">
              <img src={approachImg} alt={h.approachAlt} />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="section__eyebrow">{h.approachEyebrow}</p>
              <h2 className="section__title">{h.approachTitle}</h2>
              <p className="section__lead">{h.approachLead}</p>
            </Reveal>

            <div className="approach__list">
              {h.pillars.map((item, i) => (
                <Reveal key={item.num} delay={0.08 * i}>
                  <div className="approach__item">
                    <span className="approach__num">{item.num}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{h.pathwaysEyebrow}</p>
              <h2 className="section__title">{h.pathwaysTitle}</h2>
              <p className="section__lead">{h.pathwaysLead}</p>
            </div>
          </Reveal>

          <div className="pathways">
            {h.pathways.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * i}>
                <article className="pathway">
                  <h3>{p.title}</h3>
                  <p className="pathway__ages">{p.ages}</p>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="campus-strip" aria-label={h.campusLabel}>
        <Reveal className="campus-strip__media">
          <img src={campusImg} alt={h.campusAlt} />
        </Reveal>
        <div className="campus-strip__copy">
          <Reveal>
            <p className="section__eyebrow">{h.campusEyebrow}</p>
            <h2 className="section__title">{h.campusTitle}</h2>
            <p className="section__lead">{h.campusLead}</p>
            <div style={{ marginTop: "1.75rem" }}>
              <Link to="/about" className="btn btn--outline">
                {h.campusCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>{h.ctaTitle}</h2>
            <p>{h.ctaText}</p>
            <Link to="/contact" className="btn btn--ink">
              {h.ctaButton}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
