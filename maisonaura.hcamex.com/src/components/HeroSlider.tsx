import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export type HeroSlide = {
  image: string;
  alt: string;
  headline: string;
  support: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryTo: string;
};

const INTERVAL_MS = 5000;

type HeroSliderProps = {
  slides: HeroSlide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
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

  const prev = useCallback(() => go(indexRef.current - 1), [go]);
  const next = useCallback(() => go(indexRef.current + 1), [go]);

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
    <section
      className="home-hero"
      aria-label={t.nav.home}
      aria-roledescription="carousel"
    >
      <div className="home-hero__media">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className="home-hero__slide-img"
            initial={reduce ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>

      <div className="home-hero__content">
        <motion.h1
          className="home-hero__brand"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.brand}
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${dir}`}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="home-hero__headline">{slide.headline}</p>
            <p className="home-hero__support">{slide.support}</p>
            <div className="home-hero__actions">
              <Link to={slide.primaryTo} className="btn btn--primary">
                {slide.primaryLabel}
              </Link>
              <Link to={slide.secondaryTo} className="btn btn--ghost">
                {slide.secondaryLabel}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="home-hero__controls"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="home-hero__dots" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`home-hero__dot${i === index ? " home-hero__dot--active" : ""}`}
              onClick={() => go(i)}
            >
              {i === index && !reduce && (
                <motion.span
                  className="home-hero__dot-progress"
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

        <div className="home-hero__arrows">
          <button
            type="button"
            className="home-hero__arrow"
            onClick={dir === "rtl" ? next : prev}
            aria-label="Previous slide"
          >
            {dir === "rtl" ? "→" : "←"}
          </button>
          <button
            type="button"
            className="home-hero__arrow"
            onClick={dir === "rtl" ? prev : next}
            aria-label="Next slide"
          >
            {dir === "rtl" ? "←" : "→"}
          </button>
        </div>
      </div>
    </section>
  );
}
