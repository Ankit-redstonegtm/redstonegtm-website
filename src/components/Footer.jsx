import { useLeadForm } from '../context/LeadForm';
import { navLinks, capabilityGroups } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  const openForm = useLeadForm();

  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8 bg-paper-alt border-t border-line">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <span className="font-bold text-ink">
              Redstone<span className="text-ember">GTM</span>
            </span>
            <p className="text-sm leading-relaxed mt-4 text-stone">
              A revenue operating system for modern growth teams — unifying market intelligence,
              prioritisation, rep enablement, execution, and CRM operations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-ink">What We Build</h4>
            <ul className="space-y-2.5 text-sm">
              {capabilityGroups.map((g) => (
                <li key={g.key}>
                  <a href="#what-we-build" className="text-stone hover:text-ink transition-colors">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-ink">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-stone hover:text-ink transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={openForm} className="text-stone hover:text-ink transition-colors text-left">
                  Book a Strategy Call
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-ink">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/ankit-gtm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-ink transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:ankit@redstonegtm.com" className="text-stone hover:text-ink transition-colors">
                  ankit@redstonegtm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-soft">© {year} Redstone GTM. All rights reserved.</p>
          <p className="text-xs text-stone-soft">Revenue Operating System for Modern Growth Teams.</p>
        </div>
      </div>
    </footer>
  );
}
