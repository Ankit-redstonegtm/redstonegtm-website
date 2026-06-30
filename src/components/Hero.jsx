import { ArrowRight } from 'lucide-react';
import { useLeadForm } from '../context/LeadForm';
import AccountRecord from './mockups/AccountRecord';

export default function Hero() {
  const openForm = useLeadForm();

  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ backgroundColor: '#DC2626' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.04]"
          style={{ backgroundColor: '#839791' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(131,151,145,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(131,151,145,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border"
              style={{ backgroundColor: 'rgba(220,38,38,0.06)', borderColor: 'rgba(220,38,38,0.2)', color: '#DC2626' }}>
              The Revenue Engine
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
              Sell,{' '}
              <span className="gradient-text">Don’t Research.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#839791' }}>
              Your reps open HubSpot to accounts that are already mapped, scored, and
              researched — so they spend their day selling, not digging.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openForm}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 text-white hover:translate-y-[-1px]"
                style={{ backgroundColor: '#DC2626' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ef4444'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(220,38,38,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DC2626'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Get a free sample of your market
                <ArrowRight size={18} />
              </button>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all duration-200"
                style={{ border: '1px solid rgba(131,151,145,0.3)', color: '#839791' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#839791'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(131,151,145,0.3)'; e.currentTarget.style.color = '#839791'; }}
              >
                See how it works
              </a>
            </div>

            <p className="text-sm mt-6" style={{ color: 'rgba(131,151,145,0.6)' }}>
              The GTM data, research &amp; intelligence engine behind your sales team.
            </p>
          </div>

          {/* Right — coded CRM mockup */}
          <div className="w-full">
            <AccountRecord />
          </div>
        </div>
      </div>
    </section>
  );
}
