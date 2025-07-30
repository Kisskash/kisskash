import styles from '../styles/FAQ.module.css';

/**
 * FAQ section answers common questions about KissKash. Utilises native
 * <details>/<summary> elements for accessible disclosure widgets.
 */
export default function FAQ() {
  const faqs = [
    {
      question: 'Ai‑je besoin d’un compte KissKash&nbsp;?',
      answer:
        'Non. KissKash se connecte à votre cagnotte existante sur des plateformes comme Lydia, PayPal ou autres. Vous créez simplement votre cagnotte et nous nous occupons du QR code.',
    },
    {
      question: 'Combien coûte le support physique&nbsp;?',
      answer:
        'Nos supports physiques sont proposés à prix doux selon le format choisi. Ce site est une démonstration : contactez‑nous pour connaître les tarifs actualisés.',
    },
    {
      question: 'Est‑ce compatible avec ma cagnotte Lydia&nbsp;?',
      answer:
        'Oui&nbsp;! KissKash est pensé pour fonctionner avec Lydia et d’autres services. Il suffit de fournir l’URL de votre cagnotte lors de la création de votre QR code.',
    },
  ];

  return (
    <section id="faq" className={`section alt`}>
      <div className="container">
        <h2>Questions fréquentes</h2>
        <div className={styles.faqList}>
          {faqs.map((item, index) => (
            <details key={index} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}