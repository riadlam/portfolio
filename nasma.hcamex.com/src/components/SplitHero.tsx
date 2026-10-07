import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { HeroSlide } from "./HeroSlider";

const INTERVAL_MS = 5500;

type SplitHeroProps = {
  slides: HeroSlide[];
};

export default function SplitHero({ slides }: SplitHeroProps) {
  const { t, dir } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(0);

  const count = slides.length;
  const slide = slides[index];

  const go = useCallback(
    (next: number) => {
      const value = ((next % count) + count) % count;
      indexRef.current = value;
      setIndex(value);
    },
    [count]
  );

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (paused || reduce || count <= 1) return;
    const id = window.setInterval(() => {
      go(indexRef.current + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, count, go]);

  return (
    <section className="split-hero" aria-roledescription="carousel" aria-label={t.nav.home}>
      {/* LEFT — forest content panel */}
      <div className="split-hero__content">
        <motion.div
          className="split-hero__brand"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.brand}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${dir}`}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="split-hero__headline">{slide.headline}</p>
            <p className="split-hero__support">{slide.support}</p>
            <div className="split-hero__actions">
              <Link to={slide.primaryTo} className="btn btn--coral">
                {slide.primaryLabel}
              </Link>
              <Link to={slide.secondaryTo} className="btn btn--outline-mint">
                {slide.secondaryLabel}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT — rotating image panel */}
      <div
        className="split-hero__image"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className="split-hero__img"
            initial={reduce ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        {/* Progress dots */}
        <div className="split-hero__dots" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`split-hero__dot${i === index ? " split-hero__dot--active" : ""}`}
              onClick={() => go(i)}
            >
              {i === index && !reduce && (
                <motion.span
                  className="split-hero__dot-progress"
                  key={`progress-${index}-${paused}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? undefined : 1 }}
                  transition={{
                    duration: paused ? 0 : INTERVAL_MS / 1000,
                    ease: "linear",
                  }}
                  style={paused ? { transform: "scaleX(0.35)" } : undefined}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
