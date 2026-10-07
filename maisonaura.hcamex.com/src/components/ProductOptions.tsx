import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

type SizeOption = { en: string; ar: string };

type ProductOptionsProps = {
  colors: string[];
  sizeOptions: SizeOption[];
  selectedColor: string;
  selectedSizeIndex: number;
  onColorChange: (color: string) => void;
  onSizeChange: (index: number) => void;
  layoutKey: string;
  compact?: boolean;
};

export default function ProductOptions({
  colors,
  sizeOptions,
  selectedColor,
  selectedSizeIndex,
  onColorChange,
  onSizeChange,
  layoutKey,
  compact = false,
}: ProductOptionsProps) {
  const { lang, t } = useLanguage();
  const s = t.store;

  return (
    <div className={`product-options${compact ? " product-options--compact" : ""}`}>
      <div className="product-options__group">
        <span className="product-options__label">{s.colors}</span>
        <div className="product-options__swatches" role="listbox" aria-label={s.colors}>
          {colors.map((color) => {
            const active = selectedColor === color;
            return (
              <motion.button
                key={color}
                type="button"
                role="option"
                aria-selected={active}
                aria-label={color}
                className={`product-options__swatch${active ? " product-options__swatch--active" : ""}`}
                style={{ background: color }}
                onClick={(e) => {
                  e.stopPropagation();
                  onColorChange(color);
                }}
                whileTap={{ scale: 0.88 }}
                animate={
                  active
                    ? { scale: 1.18, y: -1 }
                    : { scale: 1, y: 0 }
                }
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
              >
                {active && (
                  <motion.span
                    className="product-options__swatch-ring"
                    layoutId={`color-ring-${layoutKey}`}
                    transition={{ type: "spring", stiffness: 420, damping: 26 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="product-options__group">
        <span className="product-options__label">{s.sizes}</span>
        <div className="product-options__sizes" role="listbox" aria-label={s.sizes}>
          {sizeOptions.map((size, index) => {
            const active = selectedSizeIndex === index;
            const label = lang === "ar" ? size.ar : size.en;
            return (
              <button
                key={`${size.en}-${index}`}
                type="button"
                role="option"
                aria-selected={active}
                className={`product-options__size${active ? " product-options__size--active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSizeChange(index);
                }}
              >
                {active && (
                  <motion.span
                    className="product-options__size-bg"
                    layoutId={`size-bg-${layoutKey}`}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <motion.span
                  className="product-options__size-label"
                  animate={{ scale: active ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                >
                  {label}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
