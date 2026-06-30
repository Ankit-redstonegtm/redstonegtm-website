import { useLeadForm } from '../context/LeadForm';

export default function Footer() {
  const year = new Date().getFullYear();
  const openForm = useLeadForm();

  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#020617', borderTop: '1px solid rgba(131,151,145,0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-bold text-white">
                Redstone<span style={{ color: '#DC2626' }}>GTM</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(131,151,145,0.6)' }}>
              The GTM data, research &amp; intelligence engine that hands your reps accounts that are already ready to sell.
            </p>
          </div>

          {/* The Engine */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#839791' }}>The Engine</h4>
            <ul className="space-y-2.5 text-sm">
              {["TAM Mapping", "Account Scoring", "Signal Monitoring", "Account Research", "Rep Enablement"].map((item) => (
                <li key={item}>
                  <a href="#engine"
                    className="transition-colors"
                    style={{ color: 'rgba(131,151,145,0.5)' }}
                    onMouseEnter={e => e.target.style.color = '#839791'}
                    onMouseLeave={e => e.target.style.color = 'rgba(131,151,145,0.5)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#839791' }}>Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "How it works", href: "#how" },
                { label: "The Engine", href: "#engine" },
                { label: "Results", href: "#results" },
                { label: "Guarantee", href: "#guarantee" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                    className="transition-colors"
                    style={{ color: 'rgba(131,151,145,0.5)' }}
                    onMouseEnter={e => e.target.style.color = '#839791'}
                    onMouseLeave={e => e.target.style.color = 'rgba(131,151,145,0.5)'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={openForm}
                  className="transition-colors text-left"
                  style={{ color: 'rgba(131,151,145,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#839791'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(131,151,145,0.5)'}
                >
                  Get a free sample
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#839791' }}>Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/ankit-gtm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors flex items-center gap-2"
                  style={{ color: 'rgba(131,151,145,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#839791'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(131,151,145,0.5)'}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:ankit@redstonegtm.com"
                  className="transition-colors"
                  style={{ color: 'rgba(131,151,145,0.5)' }}
                  onMouseEnter={e => e.target.style.color = '#839791'}
                  onMouseLeave={e => e.target.style.color = 'rgba(131,151,145,0.5)'}
                >
                  ankit@redstonegtm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(131,151,145,0.08)' }}>
          <p className="text-sm" style={{ color: 'rgba(131,151,145,0.3)' }}>
            © {year} RedstoneGTM. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(131,151,145,0.2)' }}>
            Sell, Don’t Research.
          </p>
        </div>
      </div>
    </footer>
  );
}
