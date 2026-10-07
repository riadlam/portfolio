import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import JourneyModal from "../components/JourneyModal";
import JourneyTile from "../components/JourneyTile";
import { useLanguage } from "../i18n/LanguageContext";
import { journeys, type Journey } from "../i18n/translations";

type Region = Journey["region"] | "all";

export default function Journeys() {
  const { t } = useLanguage();
  const j = t.journeysPage;
  const [filter, setFilter] = useState<Region>("all");
  const [selected, setSelected] = useState<Journey | null>(null);

  const filters: { id: Region; label: string }[] = [
    { id: "all", label: j.all },
    { id: "gulf", label: j.regions.gulf },
    { id: "europe", label: j.regions.europe },
    { id: "asia", label: j.regions.asia },
    { id: "africa", label: j.regions.africa },
    { id: "islands", label: j.regions.islands },
  ];

  const filtered = useMemo(
    () =>
      filter === "all"
        ? journeys
        : journeys.filter((item) => item.region === filter),
    [filter]
  );

  return (
    <>
      {/* Page header — chalk, large title */}
      <header className="journeys-header">
        <div className="container">
          <div className="journeys-header__inner">
            <Reveal>
              <h1 className="journeys-header__title">{j.heroTitle}</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="journeys-header__lead">{j.heroLead}</p>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Filters + list */}
      <section className="section section--chalk">
        <div className="container">
          {/* Text underline tabs */}
          <div
            className="journey-tabs"
            role="tablist"
            aria-label={j.heroTitle}
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`tab-btn${filter === f.id ? " tab-btn--active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Editorial numbered list */}
          {filtered.length === 0 ? (
            <p className="journey-empty">{j.empty}</p>
          ) : (
            <div className="journey-list">
              {filtered.map((item, i) => (
                <Reveal key={item.id} delay={0.03 * (i % 8)}>
                  <JourneyTile
                    journey={item}
                    regionLabel={j.regions[item.region]}
                    onSelect={setSelected}
                    index={i}
                  />
                </Reveal>
              ))}
            </div>
          )}

          <p className="journey-note">{j.note}</p>
        </div>
      </section>

      <JourneyModal journey={selected} onClose={() => setSelected(null)} />
    </>
  );
}
