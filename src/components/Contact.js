import { useState } from 'react';
import styles from '../styles/Contact.module.css';

/**
 * Contact section provides a simple form for visitors to reach out. On
 * submission it displays a thank‑you alert; no data is sent since this
 * is a demonstrational landing page. Fields are reset afterwards.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form fields
    e.target.reset();
    // Hide message after a short delay
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={`section`}>
      <div className="container">
        <h2>Une question&nbsp;? Écrivez‑nous</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nom
            <input type="text" name="name" required placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="Votre email" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Votre message..."
            ></textarea>
          </label>
          <button type="submit">Envoyer</button>
          {submitted && <p className={styles.confirm}>Merci pour votre message&nbsp;! Nous vous répondrons rapidement.</p>}
        </form>
      </div>
    </section>
  );
}