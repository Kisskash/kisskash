import styles from '../styles/Hero.module.css';

/**
 * Hero section introducing the product with a compelling headline, a short
 * description and a call‑to‑action button. The background illustrates
 * the QR code theme and uses an overlay to maintain text contrast.
 */
export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} section`}>
      <div className={styles.overlay}></div>
      <div className="container">
        <h1>La cagnotte physique&nbsp;… qui passe au QR code</h1>
        <p>
          Avec KissKash, transformez chaque événement en une expérience simple,
          élégante et sans espèces. Scannez, donnez, partagez.
        </p>
        <a
          href="https://www.lydia-app.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Créer ma cagnotte
        </a>
      </div>
    </section>
  );
}