import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const gallery = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1000&q=80",
];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Hero — chalk page with offset photo */}
      <section className="about-header">
        <div className="container">
          <div className="about-header__inner">
            <Reveal>
              <div>
                <p className="about-header__eyebrow">{a.storyEyebrow}</p>
                <h1 className="about-header__title">{a.heroTitle}</h1>
                <p className="about-header__lead">{a.heroLead}</p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="about-header__photo-wrap">
                <div className="about-header__photo-slab" aria-hidden />
                <div className="about-header__photo">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                    alt={a.storyAlt}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story — text only, full width */}
      <section className="section section--white">
        <div className="container">
          <div style={{ maxWidth: "68ch" }}>
            <Reveal>
              <p className="section__eyebrow">{a.storyEyebrow}</p>
              <h2 className="section__title">{a.storyTitle}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                style={{
                  color: "var(--muted)",
                  fontWeight: 300,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginTop: "1rem",
                }}
              >
                {a.storyP1}
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontWeight: 300,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginTop: "1rem",
                }}
              >
                {a.storyP2}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — large numbered list */}
      <section className="section section--chalk">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.valuesEyebrow}</p>
              <h2 className="section__title">{a.valuesTitle}</h2>
            </div>
          </Reveal>
          <div className="values-list">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * i}>
                <article className="value-row">
                  <span className="value-row__num">0{i + 1}</span>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — horizontal stepper with coral markers */}
      <section className="section section--forest">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.processEyebrow}</p>
              <h2 className="section__title">{a.processTitle}</h2>
            </div>
          </Reveal>
          <div className="process-stepper">
            {a.process.map((step, i) => (
              <Reveal key={step.step} delay={0.08 * i}>
                <article className="process-step">
                  <div className="process-step__num">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — asymmetric grid */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.galleryEyebrow}</p>
              <h2 className="section__title">{a.galleryTitle}</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="gallery">
              {gallery.map((src, i) => (
                <div className="gallery__item" key={src}>
                  <img src={src} alt={`${a.galleryTitle} ${i + 1}`} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
