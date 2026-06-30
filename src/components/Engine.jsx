import { Database, Users, FileSearch, RefreshCw, Coffee } from 'lucide-react';
import TamMap from './mockups/TamMap';
import ScoreBoard from './mockups/ScoreBoard';
import SignalFeed from './mockups/SignalFeed';

const featured = [
  {
    tag: 'Map',
    title: 'Your whole market, mapped',
    line: 'Every account that could ever buy from you, built as one living universe inside your CRM.',
    Visual: TamMap,
  },
  {
    tag: 'Score',
    title: 'The right accounts, ranked',
    line: 'Fit scores trained on your closed-won, so attention lands on who is most likely to convert.',
    Visual: ScoreBoard,
  },
  {
    tag: 'Signals',
    title: 'The moment they’re ready',
    line: 'Funding, new hires, tech changes — we surface the buying window the day it opens.',
    Visual: SignalFeed,
  },
];

const capabilities = [
  { icon: Database, title: 'Contact sourcing & coverage', line: 'Verified people-level data through multi-provider waterfalls.' },
  { icon: Users, title: 'Persona prioritization', line: 'Buying-committee tiers so reps reach the right people first.' },
  { icon: FileSearch, title: 'Account research automation', line: 'A ready-to-read brief on every account — no manual prep.' },
  { icon: RefreshCw, title: 'CRM enrichment & freshness', line: 'Your data stays current automatically, with zero RevOps drain.' },
  { icon: Coffee, title: 'Rep enablement', line: 'Morning briefings and pre-call prep packs, delivered daily.' },
];

export default function Engine() {
  return (
    <section id="engine" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #020617, rgba(10,16,28,0.3), #020617)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border"
            style={{ backgroundColor: 'rgba(220,38,38,0.06)', borderColor: 'rgba(220,38,38,0.2)', color: '#DC2626' }}>
            The Engine
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            The data engine behind every sale
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#839791' }}>
            One connected system that turns your market into ready-to-sell accounts.
          </p>
        </div>

        {/* Featured capability blocks — alternating layout */}
        <div className="space-y-6 mb-16">
          {featured.map((f, idx) => (
            <div
              key={f.title}
              className="rounded-2xl border p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center"
              style={{ backgroundColor: 'rgba(10,16,28,0.4)', borderColor: 'rgba(131,151,145,0.12)' }}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4"
                  style={{ backgroundColor: 'rgba(220,38,38,0.1)', borderColor: 'rgba(220,38,38,0.3)', color: '#DC2626' }}>
                  {f.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="leading-relaxed" style={{ color: '#839791' }}>{f.line}</p>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <f.Visual />
              </div>
            </div>
          ))}
        </div>

        {/* Remaining capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-xl p-5 border transition-all duration-300 hover:translate-y-[-2px]"
              style={{ backgroundColor: 'rgba(10,16,28,0.4)', borderColor: 'rgba(131,151,145,0.12)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(131,151,145,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(131,151,145,0.12)'; }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)' }}>
                <c.icon size={18} style={{ color: '#DC2626' }} />
              </div>
              <h3 className="font-bold text-white text-base mb-1.5">{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#839791' }}>{c.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
