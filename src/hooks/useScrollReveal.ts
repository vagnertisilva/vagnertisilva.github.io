import { useEffect } from 'react';

// Animate existing blocks without adding wrappers or changing their layout.
export default function useScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = document.querySelectorAll<HTMLElement>(
      '.titulo-wrapper, .sobre-texto, .timeline-item, .formacao-texto, .faculdade, .footer-container',
    );
    const revealed = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !preference.matches && !revealed.has(entry.target)) {
          entry.target.classList.add('motion-reveal');
          revealed.add(entry.target);
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });

    function syncPreference() {
      observer.disconnect();
      for (const target of targets) {
        if (preference.matches) target.classList.remove('motion-reveal');
        else if (!revealed.has(target)) observer.observe(target);
      }
    }

    syncPreference();
    preference.addEventListener('change', syncPreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', syncPreference);
      targets.forEach((target) => target.classList.remove('motion-reveal'));
    };
  }, []);
}
