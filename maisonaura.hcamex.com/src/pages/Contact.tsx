import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { lang, t } = useLanguage();
  const c = t.contact;
  const [params] = useSearchParams();
  const piece = params.get("piece");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const defaultMessage = piece
    ? lang === "ar"
      ? `أود الاستفسار عن: ${piece}`
      : `I would like to enquire about: ${piece}`
    : "";

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt={c.heroAlt}
          />
        </div>
        <div className="container page-hero__content">
          <h1>{c.heroTitle}</h1>
          <p>{c.heroLead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <p className="section__eyebrow">{c.eyebrow}</p>
            <h2 className="section__title">{c.title}</h2>
            <p className="section__lead" style={{ marginBottom: "2rem" }}>
              {c.lead}
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <h3>{c.visit}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{c.address}</p>
              </div>
              <div className="contact-detail">
                <h3>{c.email}</h3>
                <a href="mailto:hello@maisonaura.ae">hello@maisonaura.ae</a>
              </div>
              <div className="contact-detail">
                <h3>{c.phone}</h3>
                <a href="tel:+97144321000">+971 4 432 1000</a>
              </div>
              <div className="contact-detail">
                <h3>{c.hours}</h3>
                <p>{c.hoursValue}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit} key={`${piece}-${t.brand}`}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="firstName">{c.firstName}</label>
                  <input id="firstName" name="firstName" required autoComplete="given-name" />
                </div>
                <div className="field">
                  <label htmlFor="lastName">{c.lastName}</label>
                  <input id="lastName" name="lastName" required autoComplete="family-name" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">{c.emailLabel}</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="field">
                <label htmlFor="phone">{c.phoneLabel}</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="field">
                <label htmlFor="interest">{c.interest}</label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue={piece ? "piece" : "visit"}
                >
                  <option value="visit">{c.options.visit}</option>
                  <option value="piece">{c.options.piece}</option>
                  <option value="bespoke">{c.options.bespoke}</option>
                  <option value="interiors">{c.options.interiors}</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">{c.message}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  defaultValue={defaultMessage}
                />
              </div>

              {sent ? (
                <p className="form-success" role="status">
                  {c.success}
                </p>
              ) : (
                <button type="submit" className="btn btn--ink">
                  {c.send}
                </button>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <div className="map-band" aria-label={c.mapTitle}>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
          alt={c.mapAlt}
        />
        <div className="map-band__label">
          <strong>{c.mapTitle}</strong>
          {c.mapCity}
        </div>
      </div>
    </>
  );
}
