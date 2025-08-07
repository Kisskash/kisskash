"use client";
import { useState } from 'react';

/**
 * Contact section provides a simple form for visitors to reach out. On
 * submission it displays a thank‑you alert; no data is sent since this
 * is a demonstrational landing page. Fields are reset afterwards.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form fields
    e.target.reset();
    // Hide message after a short delay
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Une question&nbsp;? Écrivez‑nous</h2>
        <form
          className="max-w-[600px] mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col font-medium text-accent">
            Nom
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="mt-1 p-3 border border-[#d4cfc8] rounded text-base font-sans focus:outline-none focus:border-primary focus:shadow-[0_0_0_2px_rgba(179,10,84,0.2)]"
            />
          </label>
          <label className="flex flex-col font-medium text-accent">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="mt-1 p-3 border border-[#d4cfc8] rounded text-base font-sans focus:outline-none focus:border-primary focus:shadow-[0_0_0_2px_rgba(179,10,84,0.2)]"
            />
          </label>
          <label className="flex flex-col font-medium text-accent">
            Message
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Votre message..."
              className="mt-1 p-3 border border-[#d4cfc8] rounded text-base font-sans focus:outline-none focus:border-primary focus:shadow-[0_0_0_2px_rgba(179,10,84,0.2)]"
            ></textarea>
          </label>
          <button type="submit">Envoyer</button>
          {submitted && (
            <p className="mt-4 text-primary font-medium">
              Merci pour votre message&nbsp;! Nous vous répondrons rapidement.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}