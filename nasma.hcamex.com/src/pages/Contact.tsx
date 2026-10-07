import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { lang, t } = useLanguage();
  const c = t.contact;
  const [params] = useSearchParams();
  const journey = params.get("journey");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const defaultMessage = journey
    ? lang === "ar"
      ? `أود الاستفسار عن: ${journey}`
      : `I would like to enquire about: ${journey}`
    : "";

  return (
    <>
      {/* Split layout: chalk details | forest form */}
      <div className="contact-split">
        {/* LEFT — chalk details panel */}
        <div className="contact-details-panel">
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--coral)",
                marginBottom: "0.75rem",
              }}
            >
              {c.eyebrow}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--forest)",
                lineHeight: 1.1,
                marginBottom: "0.85rem",
              }}
            >
              {c.title}
            </h1>
            <p
              style={{
                color: "var(--muted)",
                fontWeight: 300,
                fontSize: "1rem",
                maxWidth: "40ch",
                lineHeight: 1.65,
                marginBottom: "2.5rem",
              }}
            >
              {c.lead}
            </p>

            <div>
              <div className="contact-detail">
                <h3>{c.visit}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{c.address}</p>
              </div>
              <div className="contact-detail">
                <h3>{c.email}</h3>
                <a href="mailto:hello@nasmajourneys.ae">hello@nasmajourneys.ae</a>
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
        </div>

        {/* RIGHT — forest form panel */}
        <div className="contact-form-panel">
          <Reveal delay={0.06}>
            <h2 className="contact-form-title">{c.heroTitle}</h2>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              key={`${journey}-${t.brand}`}
            >
              <div className="form-row">
                <div className="field">
                  <label htmlFor="firstName">{c.firstName}</label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastName">{c.lastName}</label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">{c.emailLabel}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <label htmlFor="phone">{c.phoneLabel}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div className="field">
                <label htmlFor="interest">{c.interest}</label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue={journey ? "package" : "tailor"}
                >
                  <option value="tailor">{c.options.tailor}</option>
                  <option value="package">{c.options.package}</option>
                  <option value="honeymoon">{c.options.honeymoon}</option>
                  <option value="family">{c.options.family}</option>
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
                <button type="submit" className="btn btn--coral">
                  {c.send}
                </button>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      {/* Map band */}
      <div className="map-band" aria-label={c.mapTitle}>
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
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
