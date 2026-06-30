import { TrendingUp, UserPlus, Building2, Cpu } from 'lucide-react';

/** Coded mockup: a live feed of buying-moment alerts. */
const signals = [
  { icon: TrendingUp, account: 'Harbor Freight Systems', text: 'Raised $30M Series B', time: '2h', tone: '#4ade80' },
  { icon: UserPlus, account: 'Meridian Supply Co.', text: 'Hired VP of Revenue Ops', time: '5h', tone: '#F2C14E' },
  { icon: Cpu, account: 'Cobalt Distribution', text: 'Dropped legacy TMS vendor', time: '1d', tone: '#DC2626' },
  { icon: Building2, account: 'Atlas Carriers', text: 'Opened 2 new regional hubs', time: '2d', tone: '#839791' },
];

export default function SignalFeed() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ backgroundColor: '#0a0f1a', borderColor: 'rgba(131,151,145,0.15)' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(131,151,145,0.1)' }}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#DC2626' }} />
          <div className="text-xs font-semibold text-white">Buying signals · live</div>
        </div>
        <div className="text-[11px]" style={{ color: '#839791' }}>4 new today</div>
      </div>
      <div className="divide-y" style={{ borderColor: 'rgba(131,151,145,0.08)' }}>
        {signals.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5" style={{ borderTop: '1px solid rgba(131,151,145,0.06)' }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${s.tone}1a` }}>
              <s.icon size={13} style={{ color: s.tone }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white truncate">{s.text}</div>
              <div className="text-[10px] truncate" style={{ color: '#839791' }}>{s.account}</div>
            </div>
            <span className="text-[10px] flex-shrink-0" style={{ color: 'rgba(131,151,145,0.6)' }}>{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
