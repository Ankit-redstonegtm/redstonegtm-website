import { ArrowRight, Map, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Map,
    title: 'We map your market',
    line: 'Your total addressable market, built as an account-level universe right inside your CRM.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'We score & research it',
    line: 'Every account graded A/B/C, enriched with contacts, signals, and a ready-to-read brief.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Your reps sell',
    line: 'They open HubSpot to accounts that are already done — and spend the day selling.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(10,16,28,0.2)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border"
            style={{ backgroundColor: 'rgba(131,151,145,0.06)', borderColor: 'rgba(131,151,145,0.2)', color: '#839791' }}>
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            From raw market to <span className="gradient-text">ready-to-sell</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#839791' }}>
            Three steps. Your reps never open a blank account again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="h-full rounded-2xl p-7 transition-all duration-300 border"
                style={{ backgroundColor: 'rgba(10,16,28,0.5)', borderColor: 'rgba(131,151,145,0.12)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(220,38,38,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(131,151,145,0.12)'}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.25)' }}>
                    <step.icon size={20} style={{ color: '#DC2626' }} />
                  </div>
                  <div className="text-4xl font-black leading-none" style={{ color: 'rgba(131,151,145,0.12)' }}>
                    {step.number}
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#839791' }}>{step.line}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center">
                  <ArrowRight size={16} style={{ color: 'rgba(220,38,38,0.5)' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg" style={{ color: '#839791' }}>
            Most teams see their first scored, researched accounts within{' '}
            <span className="font-semibold" style={{ color: '#F2C14E' }}>2–3 weeks</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
