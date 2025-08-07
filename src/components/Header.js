"use client";
import { useState } from 'react';
import Image from 'next/image';

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
    <header className="sticky top-0 w-full bg-secondary border-b border-[#e9e1d9] z-50">
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <a
            href="#hero"
            className="flex items-center text-xl font-bold text-primary"
            onClick={handleNavClick}
          >
            {/* Use Next.js Image for optimized images */}
            <Image
              src="/logo.png"
              alt="KissKash logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="ml-2">KissKash</span>
          </a>
          <nav
            className={`${menuOpen ? 'flex' : 'hidden'} absolute top-full left-0 right-0 flex-col items-center gap-4 bg-secondary p-4 border-b border-[#e9e1d9] md:static md:flex md:flex-row md:bg-transparent md:p-0 md:border-b-0 md:gap-6`}
          >
            <a
              href="#hero"
              onClick={handleNavClick}
              className="text-accent font-medium hover:text-primary"
            >
              Accueil
            </a>
            <a
              href="#how"
              onClick={handleNavClick}
              className="text-accent font-medium hover:text-primary"
            >
              Fonctionnement
            </a>
            <a
              href="#advantages"
              onClick={handleNavClick}
              className="text-accent font-medium hover:text-primary"
            >
              Avantages
            </a>
            <a
              href="#audience"
              onClick={handleNavClick}
              className="text-accent font-medium hover:text-primary"
            >
              Pour qui?
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-accent font-medium hover:text-primary"
            >
              Contact
            </a>
            <a
              href="#faq"
              onClick={handleNavClick}
              className="text-accent font-medium hover:text-primary"
            >
              FAQ
            </a>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span
              className={`block w-[22px] h-[2px] my-[5px] bg-accent transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            ></span>
            <span
              className={`block w-[22px] h-[2px] my-[5px] bg-accent transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-[22px] h-[2px] my-[5px] bg-accent transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}