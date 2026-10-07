import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const storyImg =
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80";

const leaderPhotos = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=2000&q=80"
            alt={a.heroAlt}
          />
        </div>
        <div className="container page-hero__content">
          <h1>{a.heroTitle}</h1>
          <p>{a.heroLead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <Reveal>
            <p className="section__eyebrow">{a.storyEyebrow}</p>
            <h2 className="section__title">{a.storyTitle}</h2>
            <div className="about-story__text">
              <p>{a.storyP1}</p>
              <p>{a.storyP2}</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="about-story__visual">
              <img src={storyImg} alt={a.storyAlt} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.valuesEyebrow}</p>
              <h2 className="section__title">{a.valuesTitle}</h2>
              <p className="section__lead">{a.valuesLead}</p>
            </div>
          </Reveal>
          <div className="values">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <article className="value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section__header">
              <p className="section__eyebrow">{a.leadershipEyebrow}</p>
              <h2 className="section__title">{a.leadershipTitle}</h2>
              <p className="section__lead">{a.leadershipLead}</p>
            </div>
          </Reveal>
          <div className="leadership">
            {a.leaders.map((leader, i) => (
              <Reveal key={leader.name} delay={0.1 * i}>
                <article className="leader">
                  <div className="leader__photo">
                    <img src={leaderPhotos[i]} alt={leader.name} />
                  </div>
                  <h3>{leader.name}</h3>
                  <p className="leader__role">{leader.role}</p>
                  <p>{leader.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
