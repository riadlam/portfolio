import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProductModal from "../components/ProductModal";
import ProductTile from "../components/ProductTile";
import HeroSlider from "../components/HeroSlider";
import { useLanguage } from "../i18n/LanguageContext";
import { products } from "../i18n/translations";
import type { Product } from "../i18n/translations";

const craftImg =
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const [selected, setSelected] = useState<Product | null>(null);
  const featured = products.slice(0, 6);

  return (
    <>
      <HeroSlider slides={[...h.slides]} />

      <section className="section section--stone">
        <div className="container craft">
          <Reveal>
            <div className="craft__visual">
              <img src={craftImg} alt={h.craftAlt} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="section__eyebrow">{h.craftEyebrow}</p>
              <h2 className="section__title">{h.craftTitle}</h2>
              <p className="section__lead">{h.craftLead}</p>
            </Reveal>
            <div className="craft__list">
              {h.craftItems.map((item, i) => (
                <Reveal key={item.title} delay={0.08 * i}>
                  <article className="craft__item">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{h.featuredEyebrow}</p>
              <h2 className="section__title">{h.featuredTitle}</h2>
              <p className="section__lead">{h.featuredLead}</p>
            </div>
          </Reveal>
          <div className="featured-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={0.06 * i}>
                <ProductTile product={p} onSelect={setSelected} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="featured-actions">
              <Link to="/store" className="btn btn--outline">
                {h.viewAll}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{h.spacesEyebrow}</p>
              <h2 className="section__title">{h.spacesTitle}</h2>
              <p className="section__lead">{h.spacesLead}</p>
            </div>
          </Reveal>
          <div className="spaces">
            {h.spaces.map((space, i) => (
              <Reveal key={space.title} delay={0.1 * i}>
                <article className="space-card">
                  <img src={space.image} alt={space.alt} />
                  <div className="space-card__copy">
                    <h3>{space.title}</h3>
                    <p>{space.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
