import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "../components/Reveal";

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* ── Page hero ─────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <Reveal>
            <span className="eyebrow">{t.nav.about}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero-title">{a.heroTitle}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="page-hero-lead">{a.heroLead}</p>
          </Reveal>
        </div>
      </div>

      {/* ── Story ─────────────────────────────────── */}
      <section className="section">
        <div className="section-inner">
          <div className="about-story">
            <div>
              <Reveal>
                <span className="eyebrow">{a.storyEyebrow}</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="story-title">{a.storyTitle}</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="story-para">{a.storyP1}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <blockquote className="pull-quote">
                  {a.storyP2}
                </blockquote>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="story-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                  alt={a.storyAlt}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────── */}
      <section className="about-values section">
        <div className="section-inner">
          <Reveal>
            <span className="eyebrow">{a.valuesEyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="values-title">{a.valuesTitle}</h2>
          </Reveal>
          <div className="values-grid">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="value-item">
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-text">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────── */}
      <section className="about-team section">
        <div className="section-inner">
          <Reveal>
            <span className="eyebrow">{a.teamEyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="team-title">{a.teamTitle}</h2>
          </Reveal>
          <div className="team-grid">
            {a.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="team-card">
                  <p className="team-card-role">{member.role}</p>
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-bio">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
