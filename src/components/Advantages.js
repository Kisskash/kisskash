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
    <section id="advantages" className="section">
      <div className="container">
        <h2>Les avantages</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffdfb] rounded-lg p-8 text-center shadow transition-transform hover:-translate-y-1"
            >
              <div className="text-[2.5rem] mb-4 text-primary">{item.icon}</div>
              <h3 className="mb-2 text-primary text-xl">{item.title}</h3>
              <p className="m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}