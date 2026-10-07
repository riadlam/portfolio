import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "../components/Reveal";

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const OFFICE_IMG =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [params] = useSearchParams();
  const prefill = params.get("practice") ?? "";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: prefill || "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <Reveal>
            <span className="eyebrow">{t.nav.contact}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero-title">{c.heroTitle}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="page-hero-lead">{c.heroLead}</p>
          </Reveal>
        </div>
      </div>

      {/* Main content */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-layout">
            {/* Left rail */}
            <Reveal>
              <aside className="contact-rail">
                <div className="contact-rail-row">
                  <p className="contact-rail-label">{c.visit}</p>
                  <p className="contact-rail-value">{c.address}</p>
                </div>
                <div className="contact-rail-row">
                  <p className="contact-rail-label">{c.email}</p>
                  <p className="contact-rail-value">counsel@mizanchambers.ae</p>
                </div>
                <div className="contact-rail-row">
                  <p className="contact-rail-label">{c.phone}</p>
                  <p className="contact-rail-value">+971 4 000 0000</p>
                </div>
                <div className="contact-rail-row">
                  <p className="contact-rail-label">{c.hours}</p>
                  <p className="contact-rail-value">{c.hoursValue}</p>
                </div>
              </aside>
            </Reveal>

            {/* Form */}
            <div>
              <Reveal>
                <span className="eyebrow contact-form-eyebrow">{c.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.07}>
                <h2 className="contact-form-title">{c.title}</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="contact-form-lead">{c.lead}</p>
              </Reveal>

              <Reveal delay={0.16}>
                {sent ? (
                  <div className="form-success">{c.success}</div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">
                          {c.firstName}
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          className="form-input"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">
                          {c.lastName}
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="form-input"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          {c.emailLabel}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          required
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          {c.phoneLabel}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="interest">
                        {c.interest}
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="form-select"
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          —
                        </option>
                        <option value="corporate">{c.options.corporate}</option>
                        <option value="disputes">{c.options.disputes}</option>
                        <option value="real-estate">{c.options.realEstate}</option>
                        <option value="employment">{c.options.employment}</option>
                        <option value="private">{c.options.private}</option>
                        <option value="other">{c.options.other}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        {c.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        required
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="form-submit">
                      {c.send}
                    </button>
                  </form>
                )}
              </Reveal>

              {/* Office image band */}
              <Reveal delay={0.2}>
                <div className="contact-map-band">
                  <img
                    className="contact-map-img"
                    src={OFFICE_IMG}
                    alt={c.mapAlt}
                    loading="lazy"
                  />
                  <div className="contact-map-caption">
                    <span className="contact-map-title">{c.mapTitle}</span>
                    <span className="contact-map-city">· {c.mapCity}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
