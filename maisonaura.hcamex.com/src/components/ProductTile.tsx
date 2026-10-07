import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Product } from "../i18n/translations";
import ProductOptions from "./ProductOptions";

type ProductTileProps = {
  product: Product;
  categoryLabel?: string;
  onSelect: (product: Product) => void;
};

export default function ProductTile({
  product,
  categoryLabel,
  onSelect,
}: ProductTileProps) {
  const { lang, t } = useLanguage();
  const s = t.store;
  const name = lang === "ar" ? product.nameAr : product.nameEn;
  const price = lang === "ar" ? product.priceAr : product.priceEn;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const selectedSize = product.sizeOptions[selectedSizeIndex];
  const selectedSizeLabel =
    lang === "ar" ? selectedSize?.ar : selectedSize?.en;

  return (
    <article className="product-tile">
      <button
        type="button"
        className="product-tile__hit"
        onClick={() => onSelect(product)}
        aria-label={`${name} — ${s.viewDetails}`}
      >
        <div className="product-tile__media">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            style={{
              filter: `sepia(0.18) saturate(1.05) hue-rotate(${hueFromColor(selectedColor)}deg)`,
            }}
          />
          <div className="product-tile__overlay" aria-hidden>
            <span className="product-tile__view">{s.viewDetails}</span>
          </div>
          <span
            className="product-tile__color-glow"
            style={{ background: selectedColor }}
            aria-hidden
          />
        </div>
      </button>

      <div className="product-tile__body">
        {categoryLabel && (
          <span className="product-tile__category">{categoryLabel}</span>
        )}
        <button
          type="button"
          className="product-tile__title-btn"
          onClick={() => onSelect(product)}
        >
          <span className="product-tile__name">{name}</span>
          <span className="product-tile__meta">{price}</span>
        </button>

        <ProductOptions
          colors={product.colors}
          sizeOptions={product.sizeOptions}
          selectedColor={selectedColor}
          selectedSizeIndex={selectedSizeIndex}
          onColorChange={setSelectedColor}
          onSizeChange={setSelectedSizeIndex}
          layoutKey={`tile-${product.id}`}
          compact
        />

        <p className="product-tile__selection" aria-live="polite">
          <span
            className="product-tile__selection-swatch"
            style={{ background: selectedColor }}
          />
          {selectedSizeLabel}
        </p>
      </div>
    </article>
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
