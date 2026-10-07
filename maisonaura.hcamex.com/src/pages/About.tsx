import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const gallery = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=80"
            alt={a.heroAlt}
          />
        </div>
        <div className="container page-hero__content">
          <h1>{a.heroTitle}</h1>
          <p>{a.heroLead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <Reveal>
            <p className="section__eyebrow">{a.storyEyebrow}</p>
            <h2 className="section__title">{a.storyTitle}</h2>
            <div className="about-story__text">
              <p>{a.storyP1}</p>
              <p>{a.storyP2}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-story__visual">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
                alt={a.storyAlt}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.valuesEyebrow}</p>
              <h2 className="section__title">{a.valuesTitle}</h2>
            </div>
          </Reveal>
          <div className="values">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <article className="value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.processEyebrow}</p>
              <h2 className="section__title">{a.processTitle}</h2>
            </div>
          </Reveal>
          <div className="process">
            {a.process.map((step, i) => (
              <Reveal key={step.step} delay={0.08 * i}>
                <article className="process__item">
                  <div className="process__step">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
