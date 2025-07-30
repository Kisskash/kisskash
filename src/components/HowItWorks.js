import styles from '../styles/HowItWorks.module.css';

/**
 * HowItWorks (CommentÇaMarche) section explains the four simple steps
 * required to use KissKash. Each step has an emoji illustrating the
 * action and a short description. The layout adapts to available width.
 */
export default function HowItWorks() {
  const steps = [
    {
      icon: '📝',
      title: 'Créez votre cagnotte',
      description:
        'Choisissez votre plateforme préférée (Lydia, PayPal…) et créez votre cagnotte en quelques clics.',
    },
    {
      icon: '🎨',
      title: 'Personnalisez votre QR code',
      description:
        'Générez un QR code design avec KissKash pour refléter votre événement.',
    },
    {
      icon: '📦',
      title: 'Recevez le support physique',
      description:
        'Recevez votre QR code imprimé, prêt à être posé lors de votre événement.',
    },
    {
      icon: '📱',
      title: 'Partagez et collectez',
      description:
        'Vos proches scannent et participent en toute simplicité et sécurité.',
    },
  ];

  return (
    <section id="how" className={`section alt`}>
      <div className="container">
        <h2>Comment ça marche&nbsp;?</h2>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}