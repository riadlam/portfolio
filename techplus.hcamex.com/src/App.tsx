import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PRODUCT, STORE } from "./data/product";

export default function App() {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [stock, setStock] = useState(PRODUCT.stock);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const total = useMemo(() => PRODUCT.price * qty, [qty]);
  const savePct = Math.round(
    ((PRODUCT.compareAt - PRODUCT.price) / PRODUCT.compareAt) * 100
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setStock((s) => (s > 5 ? s - 1 : s));
    }, 28000);
    return () => window.clearInterval(id);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="thanks">
        <div className="thanks__card">
          <div className="thanks__ok">✓</div>
          <h1>تم تسجيل طلبك بنجاح</h1>
          <p>
            شكراً <strong>{form.name}</strong>. سيتصل بك فريق التوصيل على{" "}
            <strong>{form.phone}</strong> لتأكيد الطلب.
          </p>
          <ul>
            <li>
              المنتج: {PRODUCT.shortName} × {qty}
            </li>
            <li>
              المبلغ: {total} {PRODUCT.currency}
            </li>
            <li>الدفع: عند الاستلام</li>
          </ul>
          <button
            type="button"
            className="btn btn--red"
            onClick={() => setSubmitted(false)}
          >
            العودة للصفحة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      {/* Notice bar */}
      <div className="notice">
        <span>الدفع عند الاستلام</span>
        <span className="notice__dot" />
        <span>توصيل سريع لجميع المدن</span>
        <span className="notice__dot" />
        <span>ضمان استبدال 48 ساعة</span>
      </div>

      {/* Header */}
      <header className="top">
        <div className="top__inner">
          <a href={import.meta.env.BASE_URL} className="logo">
            <span className="logo__mark" />
            {STORE.name}
          </a>
          <button type="button" className="btn btn--red btn--lg" onClick={scrollToOrder}>
            اطلب الآن
          </button>
        </div>
      </header>

      {/* Hero product */}
      <section className="hero">
        <div className="hero__gallery">
          <div className="hero__main">
            <AnimatePresence mode="wait">
              <motion.img
                key={PRODUCT.images[activeImg]}
                src={PRODUCT.images[activeImg]}
                alt={PRODUCT.name}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
            <span className="hero__badge">-{savePct}%</span>
          </div>
          <div className="hero__thumbs">
            {PRODUCT.images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`thumb${i === activeImg ? " is-active" : ""}`}
                onClick={() => setActiveImg(i)}
                aria-label={`صورة ${i + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="hero__info">
          <p className="eyebrow">{PRODUCT.badge}</p>
          <h1>{PRODUCT.name}</h1>
          <p className="hero__sub">{PRODUCT.subtitle}</p>

          <div className="rating">
            <span className="stars" aria-label={`${PRODUCT.rating} من 5`}>
              {"★★★★★"}
            </span>
            <strong>{PRODUCT.rating}</strong>
            <span>
              ({PRODUCT.reviewsCount.toLocaleString("ar-MA")} تقييم) ·{" "}
              {PRODUCT.sold} مبيع
            </span>
          </div>

          <div className="price-box">
            <div>
              <span className="price-box__now">
                {PRODUCT.price} {PRODUCT.currency}
              </span>
              <span className="price-box__was">
                {PRODUCT.compareAt} {PRODUCT.currency}
              </span>
            </div>
            <p className="price-box__save">
              وفّر {PRODUCT.compareAt - PRODUCT.price} {PRODUCT.currency}
            </p>
          </div>

          <ul className="checks">
            {PRODUCT.highlights.slice(0, 4).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="stock">
            تبقى فقط <strong>{stock}</strong> قطعة في المخزون
          </div>

          <button type="button" className="btn btn--red btn--xl" onClick={scrollToOrder}>
            اطلب الآن — الدفع عند الاستلام
          </button>
          <p className="hero__note">لا تدفع شيئاً الآن · افحص المنتج قبل الدفع</p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust">
        {[
          { t: "الدفع عند الاستلام", d: "أمن 100٪" },
          { t: "توصيل سريع", d: "24–72 ساعة" },
          { t: "دعم واتساب", d: STORE.phone },
          { t: "ضمان الجودة", d: "استبدال سهل" },
        ].map((item) => (
          <div key={item.t} className="trust__item">
            <strong>{item.t}</strong>
            <span>{item.d}</span>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="section">
        <div className="section__head">
          <h2 className="section__title">لماذا GM2 Pro؟</h2>
          <p className="section__lead">
            ست نقاط تجعلها من أكثر سماعات AliExpress طلباً في فئتها
          </p>
        </div>
        <div className="feat-grid">
          {PRODUCT.highlights.map((h, i) => (
            <article key={h} className="feat">
              <span className="feat__n">{String(i + 1).padStart(2, "0")}</span>
              <p>{h}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits">
        <div className="section__head">
          <h2 className="section__title">مميزات تلاحظها من أول يوم</h2>
          <p className="section__lead">
            تصميم عملي لمحبي الألعاب والموسيقى والتنقل اليومي — بنفس روح عروض
            YouCan الأكثر تحويلاً.
          </p>
        </div>
        {PRODUCT.benefits.map((b, i) => (
          <article
            key={b.title}
            className={`benefit${i % 2 === 1 ? " benefit--rev" : ""}`}
          >
            <div className="benefit__media">
              <img src={b.image} alt="" loading="lazy" />
            </div>
            <div className="benefit__body">
              <span className="benefit__tag">ميزة {i + 1}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              <ul className="benefit__points">
                {b.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn--red btn--lg"
                onClick={scrollToOrder}
              >
                اطلب حصتك الآن
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Gallery mosaic */}
      <section className="section gallery-sec">
        <div className="section__head">
          <h2 className="section__title">شوف المنتج عن قرب</h2>
          <p className="section__lead">صور توضيحية مستوحاة من عروض السماعات الرائجة</p>
        </div>
        <div className="gallery">
          {PRODUCT.images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`gallery__cell gallery__cell--${i + 1}`}
              onClick={() => {
                setActiveImg(i);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="section">
        <div className="section__head">
          <h2 className="section__title">المواصفات التقنية</h2>
          <p className="section__lead">كل ما تحتاجه قبل ما تأكد الطلب</p>
        </div>
        <div className="specs">
          {PRODUCT.specs.map((s) => (
            <div key={s.label} className="specs__card">
              <span>{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle / offer band */}
      <section className="offer-band">
        <div className="offer-band__inner">
          <div>
            <p className="offer-band__eyebrow">عرض محدود اليوم</p>
            <h2>
              اطلب الآن بـ {PRODUCT.price} {PRODUCT.currency} فقط
            </h2>
            <p>
              بدل {PRODUCT.compareAt} {PRODUCT.currency} · توصيل سريع · الدفع عند
              الاستلام
            </p>
          </div>
          <button
            type="button"
            className="btn btn--white btn--lg"
            onClick={scrollToOrder}
          >
            استفد من العرض
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section className="section reviews-sec">
        <div className="section__head">
          <h2 className="section__title">آراء الزبائن</h2>
          <p className="section__lead">
            تقييم {PRODUCT.rating}/5 من أكثر من{" "}
            {PRODUCT.reviewsCount.toLocaleString("ar-MA")} رأي
          </p>
        </div>
        <div className="reviews-score">
          <div className="reviews-score__num">{PRODUCT.rating}</div>
          <div>
            <div className="stars">★★★★★</div>
            <p>بناءً على تجارب مشترين حقيقيين</p>
          </div>
        </div>
        <div className="reviews">
          {PRODUCT.reviews.map((r) => (
            <blockquote key={r.name} className="review">
              <div className="review__top">
                <span className="review__avatar" aria-hidden>
                  {r.name.charAt(0)}
                </span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.city}</span>
                </div>
                <div className="stars">{"★".repeat(r.stars)}</div>
              </div>
              <p>{r.text}</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section__title">أسئلة شائعة</h2>
        <div className="faq">
          {PRODUCT.faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className={`faq__item${open ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  {f.q}
                  <span aria-hidden>{open ? "−" : "+"}</span>
                </button>
                {open && <p className="faq__a">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Order form — YouCan express checkout style */}
      <section className="order" id="order">
        <div className="order__inner">
          <div className="order__head">
            <h2>أتمم طلبك الآن</h2>
            <p>املأ المعلومات وسنتصل بك لتأكيد التوصيل · الدفع عند الاستلام</p>
          </div>

          <div className="order__grid">
            <aside className="order__summary">
              <img src={PRODUCT.images[0]} alt="" />
              <div>
                <h3>{PRODUCT.shortName}</h3>
                <p>{PRODUCT.brand}</p>
                <div className="order__price">
                  <strong>
                    {PRODUCT.price} {PRODUCT.currency}
                  </strong>
                  <span>
                    {PRODUCT.compareAt} {PRODUCT.currency}
                  </span>
                </div>
              </div>
            </aside>

            <form className="order__form" onSubmit={onSubmit}>
              <label>
                <span>الاسم الكامل</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="الاسم الكامل"
                />
              </label>
              <label>
                <span>رقم الهاتف</span>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="06XXXXXXXX"
                />
              </label>
              <label>
                <span>المدينة</span>
                <select
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                >
                  <option value="">اختر المدينة</option>
                  {PRODUCT.cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>العنوان</span>
                <input
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="الحي / الشارع / رقم المنزل"
                />
              </label>

              <div className="qty">
                <span>الكمية</span>
                <div className="qty__ctrl">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="إنقاص"
                  >
                    −
                  </button>
                  <strong>{qty}</strong>
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.min(5, q + 1))}
                    aria-label="زيادة"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="order__total">
                <span>المجموع</span>
                <strong>
                  {total} {PRODUCT.currency}
                </strong>
              </div>

              <button type="submit" className="btn btn--red btn--xl btn--pulse">
                أكد الطلب — الدفع عند الاستلام
              </button>
              <p className="order__secure">
                معلوماتك محمية · لن يتم خصم أي مبلغ الآن
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="foot">
        <strong>{STORE.name}</strong>
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </footer>

      {/* Sticky mobile buy bar */}
      <div className="sticky-bar">
        <div>
          <strong>
            {PRODUCT.price} {PRODUCT.currency}
          </strong>
          <span>
            بدل {PRODUCT.compareAt} {PRODUCT.currency}
          </span>
        </div>
        <button type="button" className="btn btn--red" onClick={scrollToOrder}>
          اطلب الآن
        </button>
      </div>
    </div>
  );
}
