import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import {
  BENEFITS,
  COURSE,
  FAQS,
  MODULES,
  ROTATING_WORDS,
  TESTIMONIALS,
} from "../data/course";

const page = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const marquee = [
  "خرّيجو ديولينجو يرتقون",
  "فرق عن بُعد",
  "مؤسسون",
  "مسافرون",
  "طاقم صحي",
  "صنّاع محتوى",
  "طلاب في الخارج",
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.main
      className="home"
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      <section className="hero">
        <div className="hero__glow hero__glow--a" aria-hidden />
        <div className="hero__glow hero__glow--b" aria-hidden />
        <motion.div
          className="hero__orb hero__orb--1"
          aria-hidden
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          aria-hidden
          animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--3"
          aria-hidden
          animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="hero__content">
          <motion.p
            className="hero__brand"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            لينجو ليب
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            تعلّم التحدث بالإنجليزية{" "}
            <span className="hero__rotator" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ y: 28, opacity: 0, rotate: -4 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -24, opacity: 0, rotate: 4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="hero__support"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            دورة تحدث لمدة 8 أسابيع مع مدربين مباشرين وتمارين يومية — بلا
            محاضرات قواعد مملّة.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
          >
            <Link to="/checkout" className="btn btn--mint btn--lg btn--bounce">
              ابدأ التحدث — ${COURSE.price}
            </Link>
            <a href="#curriculum" className="btn btn--ghost btn--lg">
              اطّلع على الخطة
            </a>
          </motion.div>

          <motion.div
            className="hero__proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="hero__avatars" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>
              أكثر من <strong>12,400</strong> متعلم يتدرّبون هذا الأسبوع
            </p>
          </motion.div>
        </div>

        <motion.div
          className="hero__stage"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__card">
            <div className="hero__card-top">
              <span className="pill pill--mint">مباشر الآن</span>
              <span className="hero__pulse" aria-hidden />
            </div>
            <p className="hero__card-label">مهمة اليوم</p>
            <h2 className="hero__card-title">اطلب قهوة كأنك من المكان</h2>
            <div className="hero__progress">
              <motion.div
                className="hero__progress-bar"
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="hero__card-meta">سلسلة 72٪ · 4 أيام متواصلة</p>
            <div className="hero__bubbles">
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              >
                &ldquo;Can I get a flat white?&rdquo;
              </motion.span>
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 0.4 }}
              >
                &ldquo;Make it oat milk, please.&rdquo;
              </motion.span>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="marquee__item">
              {item}
              <span className="marquee__dot" />
            </span>
          ))}
        </div>
      </div>

      <section className="section benefits" id="benefits">
        <Reveal>
          <p className="eyebrow">لماذا لينجو ليب</p>
          <h2 className="section__title">
            صُممت للفم، <em>لا لأوراق العمل</em>
          </h2>
        </Reveal>
        <div className="benefit-grid">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <article className={`benefit benefit--${b.color}`}>
                <div className="benefit__icon" aria-hidden>
                  <span />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section how">
        <Reveal>
          <p className="eyebrow">كيف تعمل</p>
          <h2 className="section__title">ثلاث خطوات. ثم تتكلم.</h2>
        </Reveal>
        <div className="how__steps">
          {[
            {
              n: "1",
              t: "اختبار تحديد المستوى (3 دقائق)",
              d: "نطابق مستواك وأسلوبك — بلا اختبارات معقّدة.",
            },
            {
              n: "2",
              t: "انضم لغرف المدربين المباشرة",
              d: "مرتان أسبوعياً تتدرّب على مشاهد حقيقية مع أشخاص يشجعونك.",
            },
            {
              n: "3",
              t: "حافظ على السلسلة اليومية",
              d: "تمارين قصيرة على هاتفك. تفوّت واحدة ونذكّرك بلطف.",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="how__step">
              <motion.span
                className="how__num"
                whileHover={{ rotate: -8, scale: 1.06 }}
              >
                {s.n}
              </motion.span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section curriculum" id="curriculum">
        <div className="curriculum__head">
          <Reveal>
            <p className="eyebrow">المنهج</p>
            <h2 className="section__title">8 أسابيع لعضلات التحدث</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section__lead">
              كل أسبوع يفتح مشهداً ستستخدمه فعلاً — مقاهٍ، اجتماعات، مطارات،
              ونقاشات.
            </p>
          </Reveal>
        </div>
        <div className="module-list">
          {MODULES.map((m, i) => (
            <Reveal key={m.week} delay={i * 0.04}>
              <motion.div
                className="module-row"
                whileHover={{ x: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <span className="module-row__week">الأسبوع {m.week}</span>
                <span className="module-row__title">{m.title}</span>
                <span className="module-row__mins">{m.mins}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section quotes">
        <Reveal>
          <p className="eyebrow">كلمات حب</p>
          <h2 className="section__title">من توقّفوا عن الهمس</h2>
        </Reveal>
        <div className="quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="quote">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <Reveal>
          <div className="price-card">
            <motion.div
              className="price-card__badge"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              دفعة محدودة
            </motion.div>
            <p className="eyebrow">خطة واحدة. كل شيء مشمول.</p>
            <h2 className="price-card__name">{COURSE.name}</h2>
            <div className="price-card__row">
              <span className="price-card__now">${COURSE.price}</span>
              <span className="price-card__was">${COURSE.compareAt}</span>
            </div>
            <p className="price-card__sub">دفعة واحدة · وصول مدى الحياة</p>
            <ul className="price-card__list">
              {COURSE.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/checkout" className="btn btn--mint btn--lg btn--bounce">
              سجّل وابدأ اليوم
            </Link>
            <p className="price-card__note">
              ضمان استرداد خلال 30 يوماً بابتسامة
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section faq" id="faq">
        <Reveal>
          <p className="eyebrow">أسئلة شائعة</p>
          <h2 className="section__title">إجابات سريعة</h2>
        </Reveal>
        <div className="faq__list">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`faq__item${open ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        className="faq__a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="final-cta">
        <motion.div
          className="final-cta__blob"
          aria-hidden
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <Reveal>
          <h2>
            محادثتك القادمة
            <br />
            تبدأ هنا.
          </h2>
          <p>انضم للدفعة القادمة قبل امتلاء المقاعد.</p>
          <Link to="/checkout" className="btn btn--ink btn--lg btn--bounce">
            انتقل للدفع
          </Link>
        </Reveal>
      </section>

      <footer className="site-foot">
        <span className="nav__brand">
          <span className="nav__logo" aria-hidden />
          لينجو ليب
        </span>
        <p>© {new Date().getFullYear()} لينجو ليب. تحدّث بجرأة.</p>
      </footer>
    </motion.main>
  );
}
