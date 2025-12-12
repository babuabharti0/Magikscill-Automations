// components/Layout.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { IconWrapper } from './UI';
import "../styles/smoother.css";
import ScrollSmoother from "./ScrollSmoother";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-white bg-brand-bg">
      <ScrollSmoother />
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-brand-bg/80 backdrop-blur-md border-brand-border py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <LogoIcon className="h-10 w-10 text-brand-accent group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-300 icon-animate" />
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight leading-tight text-white">
                Magikscill
              </span>
              <span className="text-xs text-brand-textSoft uppercase tracking-wider">
                Automations
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-accent'
                    : 'text-brand-textSoft hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <Link
                to="/contact"
                className="btn-animate px-5 py-2 rounded-md bg-brand-accent hover:bg-brand-accent2 text-white text-sm font-medium transition-all shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40"
              >
                Book Strategy Call
              </Link>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <IconWrapper>
                  <X size={24} />
                </IconWrapper>
              ) : (
                <IconWrapper>
                  <Menu size={24} />
                </IconWrapper>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-brand-accent'
                    : 'text-brand-textSoft'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-animate mt-4 w-full text-center px-5 py-3 rounded-md bg-brand-accent text-white font-medium"
            >
              Book Strategy Call
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <div className="smoother-wrapper">
          <div className="smoother-content">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border bg-brand-bgSoft pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <LogoIcon className="h-8 w-8 icon-animate" />
                <span className="font-semibold text-lg text-white">Magikscill Automations</span>
              </div>
              <p className="text-brand-textSoft text-sm leading-relaxed max-w-sm">
                Enterprise-grade AI agents and workflow automation infrastructure. 
                We build the digital workforce that scales your operations like software.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-brand-textSoft">
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 text-sm text-brand-textSoft">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">AI Agents</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Workflow Automation</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">AI Advisory</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-textSoft">
            <p>&copy; {currentYear} Magikscill Automations. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};