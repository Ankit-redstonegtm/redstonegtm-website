/** Coded mockup: fit-scoring distribution across the mapped market. */
const tiers = [
  { grade: 'A', label: 'Strong fit · prioritize now', pct: 18, count: 231, tone: '#DC2626' },
  { grade: 'B', label: 'Good fit · nurture', pct: 34, count: 437, tone: '#F2C14E' },
  { grade: 'C', label: 'Low fit · monitor', pct: 48, count: 616, tone: '#839791' },
];

export default function ScoreBoard() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ backgroundColor: '#0a0f1a', borderColor: 'rgba(131,151,145,0.15)' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(131,151,145,0.1)' }}>
        <div className="text-xs font-semibold text-white">Fit scoring</div>
        <div className="text-[11px]" style={{ color: '#839791' }}>trained on your closed-won</div>
      </div>
      <div className="p-4 space-y-4">
        {tiers.map((t) => (
          <div key={t.grade}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="text-[11px] font-bold w-5 h-5 rounded flex items-center justify-center"
                  style={{ backgroundColor: `${t.tone}22`, color: t.tone, border: `1px solid ${t.tone}55` }}
                >
                  {t.grade}
                </span>
                <span className="text-[11px]" style={{ color: '#839791' }}>{t.label}</span>
              </div>
              <span className="text-[11px] font-semibold text-white">{t.count}</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(131,151,145,0.12)' }}>
              <div className="h-full rounded-full" style={{ width: `${t.pct}%`, backgroundColor: t.tone }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
