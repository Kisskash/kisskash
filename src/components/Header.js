"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

/**
 * The Header component renders the top navigation bar with the KissKash logo
 * and smooth-scrolling links to the different sections of the landing page.
 * On smaller viewports a hamburger button toggles the visibility of the
 * navigation links.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the mobile menu when navigating to a section
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} onClick={handleNavClick}>
            {/* Use Next.js Image for optimized images */}
            <Image src="/logo.png" alt="KissKash logo" width={40} height={40} />
            <span className={styles.brandName}>KissKash</span>
          </a>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <a href="#hero" onClick={handleNavClick}>Accueil</a>
            <a href="#how" onClick={handleNavClick}>Fonctionnement</a>
            <a href="#advantages" onClick={handleNavClick}>Avantages</a>
            <a href="#audience" onClick={handleNavClick}>Pour qui?</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
            <a href="#faq" onClick={handleNavClick}>FAQ</a>
          </nav>
          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}