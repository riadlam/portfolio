import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo" aria-hidden />
          لينجو ليب
        </Link>

        <nav className="nav__links" aria-label="القائمة الرئيسية">
          <a href="#benefits">لماذا تنجح</a>
          <a href="#curriculum">المنهج</a>
          <a href="#pricing">الأسعار</a>
          <a href="#faq">الأسئلة</a>
        </nav>

        <div className="nav__right">
          <Link to="/checkout" className="btn btn--ink btn--sm">
            سجّل الآن
          </Link>
          <button
            type="button"
            className="nav__burger"
            aria-label="القائمة"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "is-open" : undefined} />
            <span className={open ? "is-open" : undefined} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#benefits" onClick={() => setOpen(false)}>
              لماذا تنجح
            </a>
            <a href="#curriculum" onClick={() => setOpen(false)}>
              المنهج
            </a>
            <a href="#pricing" onClick={() => setOpen(false)}>
              الأسعار
            </a>
            <a href="#faq" onClick={() => setOpen(false)}>
              الأسئلة
            </a>
            <Link
              to="/checkout"
              className="btn btn--mint"
              onClick={() => setOpen(false)}
            >
              سجّل الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
