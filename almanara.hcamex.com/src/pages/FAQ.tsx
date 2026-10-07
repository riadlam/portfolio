import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2000&q=80"
            alt={f.heroAlt}
          />
        </div>
        <div className="container page-hero__content">
          <h1>{f.heroTitle}</h1>
          <p>{f.heroLead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <Reveal>
            <p className="section__eyebrow">{f.eyebrow}</p>
            <h2 className="section__title">{f.title}</h2>
            <p className="section__lead">{f.lead}</p>
            <div style={{ marginTop: "1.75rem" }}>
              <Link to="/contact" className="btn btn--ink">
                {f.cta}
              </Link>
            </div>
          </Reveal>

          <div className="faq-list">
            {f.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.q} delay={0.04 * index}>
                  <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                    <button
                      type="button"
                      className="faq-item__trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-item__icon" aria-hidden />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-item__panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
