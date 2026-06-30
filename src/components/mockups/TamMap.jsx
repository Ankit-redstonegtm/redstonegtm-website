/** Coded mockup: an account-level map of the addressable market. */
const rows = [
  { name: 'Northwind Logistics', meta: 'Chicago · 1,240', grade: 'A', tone: '#DC2626' },
  { name: 'Harbor Freight Systems', meta: 'Seattle · 890', grade: 'A', tone: '#DC2626' },
  { name: 'Meridian Supply Co.', meta: 'Austin · 2,100', grade: 'B', tone: '#F2C14E' },
  { name: 'Cobalt Distribution', meta: 'Denver · 540', grade: 'B', tone: '#F2C14E' },
  { name: 'Atlas Carriers', meta: 'Atlanta · 320', grade: 'C', tone: '#839791' },
];

export default function TamMap() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ backgroundColor: '#0a0f1a', borderColor: 'rgba(131,151,145,0.15)' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(131,151,145,0.1)' }}>
        <div className="text-xs font-semibold text-white">TAM · Freight &amp; Logistics</div>
        <div className="text-[11px]" style={{ color: '#839791' }}>
          <span className="font-semibold" style={{ color: '#DC2626' }}>1,284</span> accounts mapped
        </div>
      </div>
      <div className="divide-y" style={{ borderColor: 'rgba(131,151,145,0.08)' }}>
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-3 px-4 py-2.5" style={{ borderTop: '1px solid rgba(131,151,145,0.06)' }}>
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
              style={{ backgroundColor: 'rgba(131,151,145,0.15)' }}
            >
              {r.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white truncate">{r.name}</div>
              <div className="text-[10px]" style={{ color: '#839791' }}>{r.meta} employees</div>
            </div>
            <span
              className="text-[10px] font-bold w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${r.tone}22`, color: r.tone, border: `1px solid ${r.tone}55` }}
            >
              {r.grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
