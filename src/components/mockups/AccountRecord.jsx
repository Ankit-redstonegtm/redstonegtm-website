import { TrendingUp, UserPlus, Boxes, Sparkles, Phone, Mail, Check } from 'lucide-react';

/**
 * Coded mockup of a CRM company record the way a rep would open it —
 * already scored, enriched, and researched. No external images.
 */
export default function AccountRecord() {
  return (
    <div
      className="rounded-2xl overflow-hidden border relative"
      style={{
        backgroundColor: '#0a0f1a',
        borderColor: 'rgba(131,151,145,0.18)',
        boxShadow: '0 40px 90px rgba(0,0,0,0.5), 0 0 60px rgba(220,38,38,0.06)',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ backgroundColor: 'rgba(2,6,23,0.8)', borderColor: 'rgba(131,151,145,0.12)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F2C14E' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3f4d49' }} />
        <div
          className="ml-3 flex-1 rounded-md px-3 py-1 text-[11px] truncate"
          style={{ backgroundColor: 'rgba(131,151,145,0.08)', color: 'rgba(131,151,145,0.7)' }}
        >
          app.hubspot.com / companies / northwind-logistics
        </div>
      </div>

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 text-white"
            style={{ background: 'linear-gradient(135deg, #DC2626, #7f1d1d)' }}
          >
            NL
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-lg leading-tight">Northwind Logistics</h3>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full border inline-flex items-center gap-1"
                style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#4ade80' }}
              >
                <Check size={10} strokeWidth={3} /> Ready to sell
              </span>
            </div>
            <div className="text-xs mt-0.5" style={{ color: '#839791' }}>northwind-logistics.com</div>
          </div>

          {/* Fit score badge */}
          <div
            className="text-center rounded-xl px-3 py-2 border flex-shrink-0"
            style={{ backgroundColor: 'rgba(220,38,38,0.08)', borderColor: 'rgba(220,38,38,0.3)' }}
          >
            <div className="text-[9px] uppercase tracking-wider" style={{ color: '#839791' }}>Fit score</div>
            <div className="flex items-baseline gap-1 justify-center">
              <span className="text-xl font-black" style={{ color: '#DC2626' }}>A</span>
              <span className="text-xs font-semibold text-white">94</span>
            </div>
          </div>
        </div>

        {/* Enriched firmographics */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {[
            { label: 'Employees', value: '1,240' },
            { label: 'Revenue', value: '$240M' },
            { label: 'Industry', value: 'Freight' },
            { label: 'HQ', value: 'Chicago' },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-lg px-2.5 py-2 border"
              style={{ backgroundColor: 'rgba(2,6,23,0.6)', borderColor: 'rgba(131,151,145,0.12)' }}
            >
              <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: 'rgba(131,151,145,0.6)' }}>{f.label}</div>
              <div className="text-sm font-semibold text-white truncate">{f.value}</div>
            </div>
          ))}
        </div>

        {/* Buying signals */}
        <div className="mb-5">
          <div className="text-[10px] uppercase tracking-wider mb-2 font-semibold" style={{ color: '#839791' }}>
            Buying signals
          </div>
          <div className="space-y-1.5">
            {[
              { icon: TrendingUp, text: 'Closed $55M Series C — 3 weeks ago', tone: '#4ade80' },
              { icon: UserPlus, text: 'Hired new VP of Sales', tone: '#F2C14E' },
              { icon: Boxes, text: 'Running a legacy TMS — active replacement search', tone: '#DC2626' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 border"
                style={{ backgroundColor: 'rgba(2,6,23,0.5)', borderColor: 'rgba(131,151,145,0.1)' }}
              >
                <s.icon size={14} style={{ color: s.tone }} className="flex-shrink-0" />
                <span className="text-xs text-white">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI research summary */}
        <div
          className="rounded-lg p-3 mb-4 border"
          style={{ backgroundColor: 'rgba(220,38,38,0.05)', borderColor: 'rgba(220,38,38,0.18)' }}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sparkles size={12} style={{ color: '#DC2626' }} />
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#DC2626' }}>
              Research summary
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(200,210,210,0.85)' }}>
            Fast-scaling 3PL modernizing its tech stack post-raise. The new VP of Sales is
            chartered to fix forecasting — your category is squarely in scope. Lead with
            visibility and time-to-value.
          </p>
        </div>

        {/* Best contact + actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
              style={{ backgroundColor: 'rgba(131,151,145,0.2)' }}
            >
              MS
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Marcus Shaw</div>
              <div className="text-[10px]" style={{ color: '#839791' }}>VP of Sales · Verified</div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center border" style={{ borderColor: 'rgba(131,151,145,0.15)' }}>
              <Mail size={14} style={{ color: '#839791' }} />
            </span>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
              <Phone size={14} className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
