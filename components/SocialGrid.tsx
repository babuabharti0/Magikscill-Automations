// components/SocialGrid.tsx
import React, { useEffect, useRef } from 'react';
import '../styles/social-grid.css';

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/yourprofile",
    path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 3.6-.6 5.6-2.5-4.3-.9-5.5-4.3-5.5-4.3 2.1.8 3.3.4 3.3.4C1.9 11.1 1.7 6.4 1.7 6.4c1.1 1.6 3.9 2.7 6.6 2.8C6.9 3.5 13.3 2.5 16 8c1.6-.3 2.9-1 2.9-1s-.4 2-2.1 3.2c1.7-.2 2.7-.7 2.7-.7z" // Simplified X/Twitter bird-ish shape or X shape? Using standard feather map for Twitter often used, but let's use a cleaner X shape if possible or generic. Let's use standard feather path for broader compatibility or the X shape. 
    // Actually, let's use a proper X shape:
    // M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourprofile",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z M18.406 4.155c.784.783.784 2.053 0 2.836-.784.784-2.053.784-2.836 0-.784-.783-.784-2.053 0-2.836.783-.784 2.052-.784 2.836 0z"
  },
  {
    name: "GitHub",
    url: "https://github.com/yourprofile",
    path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourprofile",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.07 29.07 0 0 0 1 11.75a29.07 29.07 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27z"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/yourphonenumber",
    path: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }
];

// Helper to fix specific paths if they are not standard svg paths (handling the X shape separately in render if needed, but path d string works for all)
const SocialGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation observer
    if (typeof window === "undefined" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sg-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const items = containerRef.current.querySelectorAll('.sg-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="sg-wrapper">
      <h3 className="sg-title">Connect with us</h3>
      <div className="sg-grid" ref={containerRef}>
        {SOCIAL_LINKS.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sg-item"
            aria-label={`Open ${link.name} — Magikscill Automations`}
            style={{ '--sg-delay': `${index * 50}ms` } as React.CSSProperties}
          >
            <div className="sg-icon-bg">
              <svg
                viewBox="0 0 24 24"
                className="sg-icon"
                fill="currentColor"
                stroke={link.name === "GitHub" || link.name === "LinkedIn" || link.name === "WhatsApp" ? "none" : "currentColor"}
                strokeWidth={link.name === "GitHub" || link.name === "LinkedIn" || link.name === "WhatsApp" ? "0" : "2"}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                 {link.name === "X (Twitter)" ? (
                   <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor" stroke="none" />
                 ) : (
                   <path d={link.path} />
                 )}
              </svg>
            </div>
            <span className="sg-tooltip">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialGrid;