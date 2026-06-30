import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLeadForm } from '../context/LeadForm';

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const openForm = useLeadForm();

  const links = [
    { label: 'How it works', href: '#how' },
    { label: 'The Engine', href: '#engine' },
    { label: 'Results', href: '#results' },
    { label: 'Guarantee', href: '#guarantee' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-md border-b shadow-lg shadow-black/30'
        : 'bg-transparent'
    }`}
    style={scrolled ? { backgroundColor: 'rgba(2,6,23,0.96)', borderColor: 'rgba(131,151,145,0.15)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-3 group">
          <span className="font-bold text-2xl tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif', lineHeight: '1' }}>Redstone<span style={{ color: '#DC2626' }}>GTM</span></span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap"
              style={{ color: '#839791' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = '#839791'}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#DC2626' }} />
            </a>
          ))}
          <button
            onClick={openForm}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg text-white"
            style={{ backgroundColor: '#DC2626' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ef4444'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#DC2626'}
          >
            Get your free sample
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: '#839791' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md border-t px-4 py-4 space-y-3"
          style={{ backgroundColor: 'rgba(2,6,23,0.98)', borderColor: 'rgba(131,151,145,0.15)' }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium transition-colors"
              style={{ color: '#839791' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); openForm(); }}
            className="block w-full px-5 py-2.5 rounded-lg text-sm font-semibold text-center text-white mt-2"
            style={{ backgroundColor: '#DC2626' }}
          >
            Get your free sample
          </button>
        </div>
      )}
    </nav>
  );
}
