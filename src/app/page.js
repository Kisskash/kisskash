// ✅ Fichier App Router – page.js
// Ajoute les métadonnées pour SEO
export const metadata = {
  title: "KissKash – La cagnotte par QR code",
  description: "Transformez chaque événement en une expérience simple, élégante et sans espèces.",
};

// 🧩 Import des composants de la landing page
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Advantages from '../components/Advantages';
import Audience from '../components/Audience';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// ✅ Composant principal exporté
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Advantages />
        <Audience />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
