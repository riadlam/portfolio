/** Payment brand marks — HTML/CSS for reliable sizing in RTL layouts. */

export function ShopPayMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`pm pm--shop${dark ? " pm--shop-on-light" : ""}`}
      dir="ltr"
      aria-hidden
    >
      <span className="pm__shop">shop</span>
      <span className="pm__pay">Pay</span>
    </span>
  );
}

export function PayPalMark() {
  return (
    <span className="pm pm--paypal" dir="ltr" aria-hidden>
      <span className="pm__pp-a">Pay</span>
      <span className="pm__pp-b">Pal</span>
    </span>
  );
}

export function ApplePayMark() {
  return (
    <span className="pm pm--apple" dir="ltr" aria-hidden>
      <svg className="pm__apple-logo" viewBox="0 0 17 20" aria-hidden>
        <path
          fill="currentColor"
          d="M14.3 10.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.1zM11.7 3.9c.6-.7 1-1.7.9-2.7-1.9.1-3.1 1.2-3.6 2.1-.5.8-.9 1.9-.3 2.9 1 .1 2.2-.5 3-1.3z"
        />
      </svg>
      <span className="pm__apple-pay">Pay</span>
    </span>
  );
}

export function VisaMark() {
  return (
    <span className="chip chip--visa" dir="ltr" aria-hidden>
      <span>VISA</span>
    </span>
  );
}

export function MastercardMark() {
  return (
    <span className="chip chip--mc" dir="ltr" aria-hidden>
      <span className="chip__mc-r" />
      <span className="chip__mc-y" />
    </span>
  );
}

export function AmexMark() {
  return (
    <span className="chip chip--amex" dir="ltr" aria-hidden>
      <span>AMEX</span>
    </span>
  );
}
