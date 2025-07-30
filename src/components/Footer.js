import styles from '../styles/Footer.module.css';

/**
 * Footer contains legal mentions, social media links and a small note
 * reminding visitors that this site is a demonstrational version. It
 * adapts gracefully on small screens.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} KissKash – Tous droits réservés. Site démo.</p>
        <div className={styles.links}>
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}