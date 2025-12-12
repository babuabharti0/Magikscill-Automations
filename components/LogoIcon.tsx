import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Magikscill Automations Logo"
    role="img"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    
    {/* Main path connecting the nodes */}
    <path 
      d="M40 160 V60 L100 120 L160 60 V160" 
      stroke="url(#logoGradient)" 
      strokeWidth="20" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Node endpoints with gaps */}
    <circle cx="40" cy="60" r="16" fill="#020617" stroke="url(#logoGradient)" strokeWidth="6" />
    <circle cx="40" cy="160" r="16" fill="#020617" stroke="url(#logoGradient)" strokeWidth="6" />
    <circle cx="100" cy="120" r="16" fill="#020617" stroke="url(#logoGradient)" strokeWidth="6" />
    <circle cx="160" cy="60" r="16" fill="#020617" stroke="url(#logoGradient)" strokeWidth="6" />
    <circle cx="160" cy="160" r="16" fill="#020617" stroke="url(#logoGradient)" strokeWidth="6" />
  </svg>
);
