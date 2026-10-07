import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { Product } from "../i18n/translations";
import ProductOptions from "./ProductOptions";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { lang, t } = useLanguage();
  const s = t.store;
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  useEffect(() => {
    if (!product) return;
    setSelectedColor(product.colors[0]);
    setSelectedSizeIndex(0);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  const selectedSize = product?.sizeOptions[selectedSizeIndex];
  const sizeLabel =
    lang === "ar" ? selectedSize?.ar : selectedSize?.en;
  const name = product
    ? lang === "ar"
      ? product.nameAr
      : product.nameEn
    : "";

  const enquireQuery = product
    ? encodeURIComponent(
        `${name} · ${sizeLabel ?? ""} · ${selectedColor}`
      )
    : "";

  return (
    <AnimatePresence>
      {product && (
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
            aria-labelledby="product-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal__close"
              onClick={onClose}
              aria-label={s.close}
            >
              ×
            </button>
            <div className="modal__media">
              <motion.img
                key={selectedColor}
                src={product.image}
                alt={product.imageAlt}
                initial={{ opacity: 0.55, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  filter: `sepia(0.2) saturate(1.08) hue-rotate(${hueFromColor(selectedColor)}deg)`,
                }}
              />
              <motion.div
                className="modal__color-wash"
                key={`wash-${selectedColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.22 }}
                style={{ background: selectedColor }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="modal__body">
              <p className="modal__category">
                {s.categories[product.category]}
              </p>
              <h2 id="product-title">{name}</h2>
              <p className="modal__price">
                {lang === "ar" ? product.priceAr : product.priceEn}
              </p>
              <p className="modal__desc">
                {lang === "ar" ? product.descAr : product.descEn}
              </p>
              <div className="modal__materials">
                <strong>{s.materials}</strong>
                {lang === "ar" ? product.materialsAr : product.materialsEn}
              </div>

              <ProductOptions
                colors={product.colors}
                sizeOptions={product.sizeOptions}
                selectedColor={selectedColor}
                selectedSizeIndex={selectedSizeIndex}
                onColorChange={setSelectedColor}
                onSizeChange={setSelectedSizeIndex}
                layoutKey={`modal-${product.id}`}
              />

              <motion.p
                className="modal__selection"
                key={`${selectedColor}-${selectedSizeIndex}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="product-tile__selection-swatch"
                  style={{ background: selectedColor }}
                />
                {sizeLabel}
              </motion.p>

              <div className="modal__actions">
                <Link
                  to={`/contact?piece=${enquireQuery}`}
                  className="btn btn--ink"
                  onClick={onClose}
                >
                  {s.enquire}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function hueFromColor(hex: string) {
  const cleaned = hex.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const num = Number.parseInt(full, 16);
  if (Number.isNaN(num)) return 0;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return Math.round(((r * 0.3 + g * 0.5 + b * 0.2) / 255) * 40 - 20);
}
