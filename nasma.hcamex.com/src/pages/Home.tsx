import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import JourneyModal from "../components/JourneyModal";
import SplitHero from "../components/SplitHero";
import { useLanguage } from "../i18n/LanguageContext";
import { journeys, type Journey } from "../i18n/translations";

export default function Home() {
  const { t, lang } = useLanguage();
  const h = t.home;
  const j = t.journeysPage;
  const [selected, setSelected] = useState<Journey | null>(null);

  const featured = journeys.slice(0, 6);

  // Double the journey names for the infinite marquee
  const allNames = journeys.map((jn) =>
    lang === "ar" ? jn.nameAr : jn.nameEn
  );
  const marqueeItems = [...allNames, ...allNames];

  return (
    <>
      {/* 1 — Split hero */}
      <SplitHero slides={[...h.slides]} />

      {/* 2 — Marquee strip */}
      <div className="marquee-band" aria-hidden>
        <div className="marquee-track">
          {marqueeItems.map((name, i) => (
            <span key={i} className="marquee-item">
              {name}
              {i < marqueeItems.length - 1 && (
                <span className="marquee-dot" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* 3 — Manifesto */}
      <section className="manifesto section">
        <div className="container">
          <Reveal>
            <p className="manifesto__quote">{h.craftTitle}</p>
          </Reveal>
          <div className="manifesto__cols">
            {h.craftItems.map((item, i) => (
              <Reveal key={item.title} delay={0.1 * i}>
                <article className="manifesto__col">
                  <div className="manifesto__col-num">
                    0{i + 1}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Featured journeys: alternating image-text rows */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{h.featuredEyebrow}</p>
              <h2 className="section__title">{h.featuredTitle}</h2>
              <p className="section__lead">{h.featuredLead}</p>
            </div>
          </Reveal>

          <div className="featured-list">
            {featured.map((item, i) => {
              const name = lang === "ar" ? item.nameAr : item.nameEn;
              const price = lang === "ar" ? item.priceAr : item.priceEn;
              const duration = lang === "ar" ? item.durationAr : item.durationEn;
              const desc = lang === "ar" ? item.descAr : item.descEn;
              const regionLabel = j.regions[item.region];
              const isReverse = i % 2 !== 0;

              return (
                <Reveal key={item.id} className="featured-list__item">
                  <button
                    type="button"
                    className={`featured-row${isReverse ? " featured-row--reverse" : ""}`}
                    onClick={() => setSelected(item)}
                    aria-label={`${name} — ${j.viewDetails}`}
                  >
                    <div className="featured-row__image">
                      <img src={item.image} alt={item.imageAlt} loading="lazy" />
                    </div>
                    <div className="featured-row__content">
                      <div className="featured-row__num">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="featured-row__region">{regionLabel}</div>
                      <h3 className="featured-row__name">{name}</h3>
                      <div className="featured-row__meta">
                        <span className="featured-row__price">{price}</span>
                        <span className="featured-row__duration">{duration}</span>
                      </div>
                      <p className="featured-row__desc">{desc}</p>
                      <span className="featured-row__cta">
                        {j.viewDetails} →
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="featured-actions">
              <Link to="/journeys" className="btn btn--outline-forest">
                {h.viewAll}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — Regions: full-width stacked bands */}
      <section className="section--chalk">
        <Reveal>
          <div className="container" style={{ paddingBottom: "var(--space-xl)" }}>
            <p className="section__eyebrow">{h.regionsEyebrow}</p>
            <h2 className="section__title">{h.regionsTitle}</h2>
            <p className="section__lead">{h.regionsLead}</p>
          </div>
        </Reveal>

        <div className="regions-stack">
          {h.regions.map((region) => (
            <Reveal key={region.title}>
              <article className="region-band">
                <img src={region.image} alt={region.alt} loading="lazy" />
                <div className="region-band__copy">
                  <h3>{region.title}</h3>
                  <p>{region.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6 — CTA band */}
      <section className="cta-band">
        <div className="container">
          <Reveal>
            <div className="cta-band__inner">
              <div>
                <h2>{h.ctaTitle}</h2>
                <p>{h.ctaText}</p>
              </div>
              <Link to="/contact" className="btn btn--coral">
                {h.ctaButton}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyModal journey={selected} onClose={() => setSelected(null)} />
    </>
  );
}
