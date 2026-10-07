import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { COURSE } from "../data/course";
import {
  AmexMark,
  ApplePayMark,
  MastercardMark,
  PayPalMark,
  ShopPayMark,
  VisaMark,
} from "../components/PaymentMarks";

type PayMethod = "card" | "paypal" | "shopify";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [payMethod, setPayMethod] = useState<PayMethod>("card");
  const [remember, setRemember] = useState(true);
  const [billingSame, setBillingSame] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const subtotal = COURSE.price;
  const discountAmt = discountApplied ? 20 : 0;
  const tax = Math.round((subtotal - discountAmt) * 0.05 * 100) / 100;
  const total = Math.round((subtotal - discountAmt + tax) * 100) / 100;

  const applyDiscount = () => {
    if (discount.trim().toUpperCase() === "LEAP20") {
      setDiscountApplied(true);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="checkout-success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="checkout-success__mark"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 16,
            delay: 0.1,
          }}
        >
          ✓
        </motion.div>
        <h1>أنت معنا!</h1>
        <p>
          أُرسل التأكيد إلى <strong>{email || "بريدك"}</strong>. افتح تطبيق
          لينجو ليب وقل مرحباً لمدربك.
        </p>
        <Link to="/" className="btn btn--mint btn--lg">
          العودة إلى لينجو ليب
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="checkout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="checkout__main">
        <header className="checkout__brand-bar">
          <Link to="/" className="nav__brand">
            <span className="nav__logo" aria-hidden />
            لينجو ليب
          </Link>
        </header>

        <button
          type="button"
          className="checkout__summary-toggle"
          onClick={() => setSummaryOpen((v) => !v)}
          aria-expanded={summaryOpen}
        >
          <span>{summaryOpen ? "إخفاء" : "عرض"} ملخص الطلب</span>
          <strong>${total.toFixed(2)}</strong>
        </button>

        <AnimatePresence>
          {summaryOpen && (
            <motion.div
              className="checkout__summary checkout__summary--mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <OrderSummary
                discount={discount}
                setDiscount={setDiscount}
                discountApplied={discountApplied}
                applyDiscount={applyDiscount}
                subtotal={subtotal}
                discountAmt={discountAmt}
                tax={tax}
                total={total}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <form className="checkout__form" onSubmit={onSubmit}>
          <section className="co-section">
            <h2 className="co-section__title">الدفع السريع</h2>
            <div className="express-row" dir="ltr">
              <button
                type="button"
                className="express express--shop"
                aria-label="Shop Pay"
              >
                <ShopPayMark />
              </button>
              <button
                type="button"
                className="express express--paypal"
                aria-label="PayPal"
              >
                <PayPalMark />
              </button>
              <button
                type="button"
                className="express express--apple"
                aria-label="Apple Pay"
              >
                <ApplePayMark />
              </button>
            </div>
            <div className="co-or" role="separator">
              <span>أو</span>
            </div>
          </section>

          <section className="co-section">
            <div className="co-section__head">
              <h2 className="co-section__title">التواصل</h2>
              <a
                href="#sign-in"
                className="co-link"
                onClick={(e) => e.preventDefault()}
              >
                تسجيل الدخول
              </a>
            </div>
            <label className="co-field">
              <span className="co-label">البريد الإلكتروني</span>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="co-check">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>أرسل لي الأخبار والعروض</span>
            </label>
          </section>

          <section className="co-section">
            <h2 className="co-section__title">عنوان الفوترة</h2>
            <div className="co-grid co-grid--2">
              <label className="co-field">
                <span className="co-label">الاسم الأول</span>
                <input
                  required
                  autoComplete="given-name"
                  placeholder="الاسم الأول"
                />
              </label>
              <label className="co-field">
                <span className="co-label">اسم العائلة</span>
                <input
                  required
                  autoComplete="family-name"
                  placeholder="اسم العائلة"
                />
              </label>
            </div>
            <label className="co-field">
              <span className="co-label">العنوان</span>
              <input
                required
                autoComplete="street-address"
                placeholder="العنوان"
              />
            </label>
            <label className="co-field">
              <span className="co-label">شقة، جناح، إلخ (اختياري)</span>
              <input
                autoComplete="address-line2"
                placeholder="شقة، جناح، إلخ"
              />
            </label>
            <div className="co-grid co-grid--3">
              <label className="co-field">
                <span className="co-label">المدينة</span>
                <input
                  required
                  autoComplete="address-level2"
                  placeholder="المدينة"
                />
              </label>
              <label className="co-field">
                <span className="co-label">الدولة</span>
                <select required defaultValue="AE" autoComplete="country">
                  <option value="AE">الإمارات العربية المتحدة</option>
                  <option value="SA">المملكة العربية السعودية</option>
                  <option value="US">الولايات المتحدة</option>
                  <option value="GB">المملكة المتحدة</option>
                  <option value="EG">مصر</option>
                </select>
              </label>
              <label className="co-field">
                <span className="co-label">الرمز البريدي</span>
                <input
                  required
                  autoComplete="postal-code"
                  placeholder="الرمز البريدي"
                />
              </label>
            </div>
            <label className="co-field">
              <span className="co-label">الهاتف (اختياري)</span>
              <input type="tel" autoComplete="tel" placeholder="الهاتف" />
            </label>
          </section>

          <section className="co-section">
            <h2 className="co-section__title">الدفع</h2>
            <p className="co-hint">جميع المعاملات آمنة ومشفّرة.</p>

            <div className="pay-methods" role="radiogroup" aria-label="طريقة الدفع">
              <div className={`pay-block${payMethod === "card" ? " is-active" : ""}`}>
                <label className="pay-option">
                  <input
                    type="radio"
                    name="pay"
                    checked={payMethod === "card"}
                    onChange={() => setPayMethod("card")}
                  />
                  <span className="pay-option__label">بطاقة ائتمان</span>
                  <span className="pay-option__brands" aria-hidden dir="ltr">
                    <VisaMark />
                    <MastercardMark />
                    <AmexMark />
                  </span>
                </label>

                <AnimatePresence initial={false}>
                  {payMethod === "card" && (
                    <motion.div
                      className="pay-card-fields"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <label className="co-field">
                        <span className="co-label">رقم البطاقة</span>
                        <div className="co-input-wrap">
                          <input
                            required={payMethod === "card"}
                            inputMode="numeric"
                            autoComplete="cc-number"
                            placeholder="رقم البطاقة"
                          />
                          <span className="co-lock" aria-hidden>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="5"
                                y="11"
                                width="14"
                                height="10"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M8 11V8a4 4 0 1 1 8 0v3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </label>
                      <div className="co-grid co-grid--2">
                        <label className="co-field">
                          <span className="co-label">تاريخ الانتهاء</span>
                          <input
                            required={payMethod === "card"}
                            autoComplete="cc-exp"
                            placeholder="MM / YY"
                          />
                        </label>
                        <label className="co-field">
                          <span className="co-label">رمز الأمان</span>
                          <input
                            required={payMethod === "card"}
                            autoComplete="cc-csc"
                            placeholder="CVV"
                          />
                        </label>
                      </div>
                      <label className="co-field">
                        <span className="co-label">الاسم على البطاقة</span>
                        <input
                          required={payMethod === "card"}
                          autoComplete="cc-name"
                          placeholder="الاسم على البطاقة"
                        />
                      </label>
                      <label className="co-check">
                        <input
                          type="checkbox"
                          checked={billingSame}
                          onChange={(e) => setBillingSame(e.target.checked)}
                        />
                        <span>استخدم عنوان الشحن كعنوان للفوترة</span>
                      </label>
                      <p className="co-stripe">
                        مدعوم من{" "}
                        <strong style={{ color: "#635BFF" }}>stripe</strong>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className={`pay-block${payMethod === "paypal" ? " is-active" : ""}`}
              >
                <label className="pay-option">
                  <input
                    type="radio"
                    name="pay"
                    checked={payMethod === "paypal"}
                    onChange={() => setPayMethod("paypal")}
                  />
                  <span className="pay-option__label pay-option__label--logo">
                    <PayPalMark />
                  </span>
                </label>
                {payMethod === "paypal" && (
                  <p className="pay-redirect">
                    سيتم توجيهك إلى PayPal لإتمام عملية الشراء بأمان.
                  </p>
                )}
              </div>

              <div
                className={`pay-block${payMethod === "shopify" ? " is-active" : ""}`}
              >
                <label className="pay-option">
                  <input
                    type="radio"
                    name="pay"
                    checked={payMethod === "shopify"}
                    onChange={() => setPayMethod("shopify")}
                  />
                  <span className="pay-option__label pay-option__label--logo">
                    <ShopPayMark dark />
                  </span>
                </label>
                {payMethod === "shopify" && (
                  <p className="pay-redirect">
                    ستستخدم Shop Pay لإتمام الدفع بسرعة بمعلوماتك المحفوظة.
                  </p>
                )}
              </div>
            </div>
          </section>

          <button type="submit" className="btn btn--pay btn--lg">
            ادفع الآن
          </button>

          <p className="checkout__legal">
            بالنقر على ادفع الآن، فإنك توافق على شروط خدمة لينجو ليب وسياسة
            الخصوصية.
          </p>

          <div className="checkout__foot-links">
            <button type="button" className="co-link">
              سياسة الاسترداد
            </button>
            <button type="button" className="co-link">
              الخصوصية
            </button>
            <button type="button" className="co-link">
              الشروط
            </button>
          </div>
        </form>
      </div>

      <aside className="checkout__aside">
        <OrderSummary
          discount={discount}
          setDiscount={setDiscount}
          discountApplied={discountApplied}
          applyDiscount={applyDiscount}
          subtotal={subtotal}
          discountAmt={discountAmt}
          tax={tax}
          total={total}
        />
      </aside>
    </motion.div>
  );
}

function OrderSummary({
  discount,
  setDiscount,
  discountApplied,
  applyDiscount,
  subtotal,
  discountAmt,
  tax,
  total,
}: {
  discount: string;
  setDiscount: (v: string) => void;
  discountApplied: boolean;
  applyDiscount: () => void;
  subtotal: number;
  discountAmt: number;
  tax: number;
  total: number;
}) {
  return (
    <div className="order-box">
      <div className="order-line">
        <div className="order-thumb-wrap">
          <img src={COURSE.image} alt="" className="order-thumb" />
          <span className="order-qty">1</span>
        </div>
        <div className="order-meta">
          <p className="order-name">{COURSE.name}</p>
          <p className="order-variant">مكثّف · وصول مدى الحياة</p>
        </div>
        <p className="order-price">${subtotal.toFixed(2)}</p>
      </div>

      <div className="order-discount">
        <input
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="رمز خصم أو بطاقة هدية"
          aria-label="رمز الخصم"
        />
        <button
          type="button"
          className="btn btn--ghost-dark"
          onClick={applyDiscount}
        >
          تطبيق
        </button>
      </div>
      {discountApplied && (
        <p className="order-discount-ok">تم تطبيق LEAP20 (−$20.00)</p>
      )}

      <div className="order-totals">
        <div>
          <span>المجموع الفرعي</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {discountAmt > 0 && (
          <div>
            <span>الخصم</span>
            <span>−${discountAmt.toFixed(2)}</span>
          </div>
        )}
        <div>
          <span>الضريبة</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="order-totals__total">
          <span>الإجمالي</span>
          <span>
            <small>USD</small> ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
