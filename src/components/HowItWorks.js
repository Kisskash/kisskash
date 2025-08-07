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
    <section id="how" className="section alt">
      <div className="container">
        <h2>Comment ça marche&nbsp;?</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 text-center shadow transition-transform hover:-translate-y-1"
            >
              <div className="text-[2.5rem] mb-4 text-primary">{step.icon}</div>
              <h3 className="mb-2 text-primary text-xl">{step.title}</h3>
              <p className="m-0">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}