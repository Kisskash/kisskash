/**
 * Hero section introducing the product with a compelling headline, a short
 * description and a call‑to‑action button. The background illustrates
 * the QR code theme and uses an overlay to maintain text contrast.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative section text-center text-secondary bg-[url('/hero-bg.png')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-primary/65 z-0"></div>
      <div className="container relative z-10 py-24">
        <h1>La cagnotte physique&nbsp;… qui passe au QR code</h1>
        <p>
          Avec KissKash, transformez chaque événement en une expérience simple,
          élégante et sans espèces. Scannez, donnez, partagez.
        </p>
        <a
          href="https://www.lydia-app.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Créer ma cagnotte</button>
        </a>
      </div>
    </section>
  );
}