import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import ProductModal from "../components/ProductModal";
import ProductTile from "../components/ProductTile";
import { useLanguage } from "../i18n/LanguageContext";
import { products, type Product } from "../i18n/translations";

type Category = Product["category"] | "all";

export default function Store() {
  const { t } = useLanguage();
  const s = t.store;
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const filters: { id: Category; label: string }[] = [
    { id: "all", label: s.all },
    { id: "seating", label: s.categories.seating },
    { id: "tables", label: s.categories.tables },
    { id: "storage", label: s.categories.storage },
    { id: "lighting", label: s.categories.lighting },
    { id: "bedroom", label: s.categories.bedroom },
  ];

  const filtered = useMemo(
    () =>
      filter === "all" ? products : products.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80"
            alt={s.heroAlt}
          />
        </div>
        <div className="container page-hero__content">
          <h1>{s.heroTitle}</h1>
          <p>{s.heroLead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="store-filters" role="tablist" aria-label={s.heroTitle}>
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`filter-btn${filter === f.id ? " filter-btn--active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="store-empty">{s.empty}</p>
          ) : (
            <div className="store-grid">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={0.04 * (i % 6)}>
                  <ProductTile
                    product={p}
                    categoryLabel={s.categories[p.category]}
                    onSelect={setSelected}
                  />
                </Reveal>
              ))}
            </div>
          )}

          <p className="store-note">{s.note}</p>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
