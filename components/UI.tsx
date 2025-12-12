import React from 'react';
import { ChevronRight } from 'lucide-react';
import '../styles/brand-animations.css';

// Pill Label
export const PillLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-brand-border/50 border border-brand-border text-xs font-semibold uppercase tracking-widest text-brand-textSoft mb-4">
    {children}
  </span>
);

// Buttons
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "btn-animate inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-bg focus:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-accent to-brand-accent2 text-white hover:shadow-lg hover:shadow-brand-accent/25 border border-transparent",
    outline: "bg-transparent border border-brand-border text-white hover:bg-brand-border/50",
    ghost: "bg-transparent text-brand-accent hover:text-brand-accent2 px-0 py-0"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Cards
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => (
  <div className={`bg-brand-card border border-brand-border rounded-xl p-8 ${hoverEffect ? 'hover:border-brand-accent/50 transition-colors duration-300' : ''} ${className}`}>
    {children}
  </div>
);

// Section Header
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">{title}</h2>
    {subtitle && <p className="text-brand-textSoft text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

// IconWrapper
export const IconWrapper: React.FC<{ children: React.ReactNode; className?: string; rotate?: boolean; ariaLabel?: string }> = ({ children, className = "", rotate = false, ariaLabel }) => {
  const classes = `inline-flex items-center justify-center ${className} ${rotate ? "icon-animate-hover icon-animate-hover--rotate" : "icon-animate-hover"}`;
  return (
    <span className={classes} aria-hidden={ariaLabel ? undefined : "true"} aria-label={ariaLabel}>
      {children}
    </span>
  );
};