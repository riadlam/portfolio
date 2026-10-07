import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { Journey } from "../i18n/translations";

type JourneyModalProps = {
  journey: Journey | null;
  onClose: () => void;
};

export default function JourneyModal({ journey, onClose }: JourneyModalProps) {
  const { lang, t } = useLanguage();
  const j = t.journeysPage;

  useEffect(() => {
    if (!journey) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [journey, onClose]);

  const name = journey ? (lang === "ar" ? journey.nameAr : journey.nameEn) : "";
  const price = journey ? (lang === "ar" ? journey.priceAr : journey.priceEn) : "";
  const duration = journey ? (lang === "ar" ? journey.durationAr : journey.durationEn) : "";
  const desc = journey ? (lang === "ar" ? journey.descAr : journey.descEn) : "";
  const includes = journey ? (lang === "ar" ? journey.includesAr : journey.includesEn) : "";
  const regionLabel = journey ? j.regions[journey.region] : "";
  const enquireQuery = journey ? encodeURIComponent(name) : "";

  return (
    <AnimatePresence>
      {journey && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journey-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left — image */}
            <div className="modal__media">
              <img src={journey.image} alt={journey.imageAlt} />
            </div>

            {/* Right — forest header bar + chalk body */}
            <div className="modal__right">
              <div className="modal__header-bar">
                <button
                  type="button"
                  className="modal__close"
                  onClick={onClose}
                  aria-label={j.close}
                >
                  ×
                </button>
                <p className="modal__category">{regionLabel}</p>
                <h2 id="journey-title">{name}</h2>
                <p className="modal__price-bar">{price}</p>
              </div>

              <div className="modal__body">
                <p className="modal__desc">{desc}</p>

                <div className="modal__detail">
                  <strong>{j.duration}</strong>
                  {duration}
                </div>

                <div className="modal__detail">
                  <strong>{j.includes}</strong>
                  {includes}
                </div>

                <div className="modal__actions">
                  <Link
                    to={`/contact?journey=${enquireQuery}`}
                    className="btn btn--forest"
                    onClick={onClose}
                  >
                    {j.enquire}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
