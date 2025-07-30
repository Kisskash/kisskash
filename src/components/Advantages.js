import styles from '../styles/Advantages.module.css';

/**
 * Advantages section enumerates the key benefits of using KissKash. Each
 * advantage is illustrated with an emoji and a succinct description.
 */
export default function Advantages() {
  const items = [
    {
      icon: '💸',
      title: 'Évitez le cash',
      description: 'Plus de billets qui traînent, tout est numérique.',
    },
    {
      icon: '🎁',
      title: 'Design personnalisé',
      description: 'Un QR code élégant adapté à votre thème.',
    },
    {
      icon: '🔒',
      title: 'Simple & sécurisé',
      description:
        'Transactions rapides et sûres grâce aux plateformes reconnues.',
    },
    {
      icon: '🎉',
      title: 'Toutes occasions',
      description:
        'Mariages, anniversaires, pots de départ, commerces locaux et plus encore.',
    },
  ];

  return (
    <section id="advantages" className={`section`}>
      <div className="container">
        <h2>Les avantages</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}