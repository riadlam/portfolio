import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

type LangSwitcherProps = {
  className?: string;
  layoutId?: string;
};

export default function LangSwitcher({
  className = "",
  layoutId = "lang-pill",
}: LangSwitcherProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`lang-switch ${className}`.trim()}
      role="group"
      aria-label={t.lang.switchTo}
    >
      <button
        type="button"
        className={`lang-switch__btn${lang === "en" ? " lang-switch__btn--active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        {lang === "en" && (
          <motion.span
            className="lang-switch__pill"
            layoutId={layoutId}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />
        )}
        <span className="lang-switch__label">EN</span>
      </button>

      <button
        type="button"
        className={`lang-switch__btn${lang === "ar" ? " lang-switch__btn--active" : ""}`}
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
      >
        {lang === "ar" && (
          <motion.span
            className="lang-switch__pill"
            layoutId={layoutId}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />
        )}
        <span className="lang-switch__label lang-switch__label--ar">عربي</span>
      </button>
    </div>
  );
}
