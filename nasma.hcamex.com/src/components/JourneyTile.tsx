import { useLanguage } from "../i18n/LanguageContext";
import type { Journey } from "../i18n/translations";

type JourneyTileProps = {
  journey: Journey;
  regionLabel?: string;
  onSelect: (journey: Journey) => void;
  index?: number;
};

export default function JourneyTile({
  journey,
  regionLabel,
  onSelect,
  index = 0,
}: JourneyTileProps) {
  const { lang, t } = useLanguage();
  const j = t.journeysPage;
  const name = lang === "ar" ? journey.nameAr : journey.nameEn;
  const price = lang === "ar" ? journey.priceAr : journey.priceEn;
  const duration = lang === "ar" ? journey.durationAr : journey.durationEn;
  const num = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      className="journey-tile"
      onClick={() => onSelect(journey)}
      aria-label={`${name} — ${j.viewDetails}`}
    >
      <span className="journey-tile__num" aria-hidden>
        {num}
      </span>

      <span className="journey-tile__thumb">
        <img src={journey.image} alt={journey.imageAlt} loading="lazy" />
      </span>

      <span className="journey-tile__body">
        {regionLabel && (
          <span className="journey-tile__region">{regionLabel}</span>
        )}
        <span className="journey-tile__name">{name}</span>
        <span className="journey-tile__meta">{price}</span>
        <span className="journey-tile__duration">{duration}</span>
      </span>

      <span className="journey-tile__arrow" aria-hidden>
        →
      </span>
    </button>
  );
}
