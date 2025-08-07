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
    <section id="audience" className="section alt">
      <div className="container">
        <h2>À qui ça s’adresse&nbsp;?</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {categories.map((cat, index) => (
            <div key={index} className="bg-secondary rounded-lg p-8 shadow">
              <div className="text-[2.5rem] mb-4 text-primary">{cat.icon}</div>
              <h3 className="mb-3 text-primary">{cat.title}</h3>
              <ul className="list-none p-0">
                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="mb-2 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}