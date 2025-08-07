/**
 * Footer contains legal mentions, social media links and a small note
 * reminding visitors that this site is a demonstrational version. It
 * adapts gracefully on small screens.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[#e9e1d9] py-8 bg-secondary text-sm text-accent">
      <div className="container">
        <p>
          © {new Date().getFullYear()} KissKash – Tous droits réservés. Site démo.
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <a href="#" className="text-primary font-medium hover:underline">
            Mentions légales
          </a>
          <a href="#" className="text-primary font-medium hover:underline">
            Politique de confidentialité
          </a>
          <a href="#" className="text-primary font-medium hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}