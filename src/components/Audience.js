import styles from '../styles/Audience.module.css';

/**
 * Audience section lists the different user groups who can benefit from
 * KissKash, splitting between particuliers and professionnels. Each
 * category lists typical use cases.
 */
export default function Audience() {
  const categories = [
    {
      icon: '💍',
      title: 'Particuliers',
      items: [
        'Mariages et unions',
        'Anniversaires et pots de départ',
        'Célébrations familiales ou amicales',
      ],
    },
    {
      icon: '🏪',
      title: 'Professionnels',
      items: [
        'Commerces de quartier et boutiques',
        'Collectes associatives ou locales',
        'Tout lieu nécessitant une solution sans espèces',
      ],
    },
  ];

  return (
    <section id="audience" className={`section alt`}>
      <div className="container">
        <h2>À qui ça s’adresse&nbsp;?</h2>
        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{cat.icon}</div>
              <h3>{cat.title}</h3>
              <ul className={styles.audienceList}>
                {cat.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
