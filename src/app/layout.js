import '../styles/globals.css';

export const metadata = {
  title: "KissKash",
  description: "La cagnotte par QR code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
