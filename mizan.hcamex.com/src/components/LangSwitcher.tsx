import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";

interface LangSwitcherProps {
  dark?: boolean;
}

export default function LangSwitcher({ dark = false }: LangSwitcherProps) {
  const { lang, setLang, t } = useLanguage();

  const langs: Lang[] = ["en", "ar"];

  return (
    <div
      className="lang-switcher"
      style={{ color: dark ? "var(--ivory)" : "var(--navy)" }}
      aria-label={t.lang.switchTo}
    >
      {langs.map((l) => (
        <button
          type="button"
          key={l}
          onClick={() => setLang(l)}
          className={`lang-btn${lang === l ? " active" : ""}`}
          aria-pressed={lang === l}
        >
          {t.lang[l]}
          {lang === l && (
            <motion.span
              className="lang-underline"
              layoutId={dark ? "lang-underline-menu" : "lang-underline-nav"}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
