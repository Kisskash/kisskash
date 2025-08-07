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
    <section id="faq" className="section alt">
      <div className="container">
        <h2>Questions fréquentes</h2>
        <div className="mt-8 max-w-[800px]">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group mb-4 border border-[#e5ded6] rounded bg-[#fffdfb] p-2"
            >
              <summary className="list-none cursor-pointer font-semibold text-primary relative pr-6 after:content-['\\25BC'] after:absolute after:right-0 after:top-0 after:text-primary after:transition-transform group-open:after:rotate-180">
                {item.question}
              </summary>
              <p className="mt-2 pt-2 border-t border-[#e5ded6]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}