import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLeadForm } from '../context/LeadForm';
import { navLinks } from '../data/content';
import Button from './ui/Button';

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const openForm = useLeadForm();

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur-md border-b border-line shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="flex items-baseline gap-3">
          <span className="font-bold text-xl tracking-tight text-ink">
            Redstone<span className="text-ember">GTM</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button onClick={openForm} size="md">
            Book a Strategy Call
          </Button>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-line px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-stone hover:text-ink transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => { setMobileOpen(false); openForm(); }}
            className="w-full mt-2"
          >
            Book a Strategy Call
          </Button>
        </div>
      )}
    </nav>
  );
}
