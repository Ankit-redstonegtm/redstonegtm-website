import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useLeadForm } from '../context/LeadForm';

const points = [
  { stat: '90%+', label: 'Verified data accuracy' },
  { stat: 'Always', label: 'Kept fresh, automatically' },
  { stat: 'Free', label: 'Sample before you decide' },
];

export default function Guarantee() {
  const openForm = useLeadForm();

  return (
    <section id="guarantee" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.05]"
        style={{ backgroundColor: '#DC2626' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl border p-10 md:p-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(10,16,28,0.6) 100%)', borderColor: 'rgba(220,38,38,0.2)' }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)' }}>
            <ShieldCheck size={30} style={{ color: '#DC2626' }} />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border"
            style={{ backgroundColor: 'rgba(220,38,38,0.06)', borderColor: 'rgba(220,38,38,0.2)', color: '#DC2626' }}>
            Our guarantee
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            See your market before you decide
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: '#839791' }}>
            If the accounts we send back aren’t sharper than anything your reps open today, we part as friends.
          </p>

          {/* Supporting stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-10">
            {points.map((p) => (
              <div key={p.label} className="rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(2,6,23,0.5)', borderColor: 'rgba(131,151,145,0.15)' }}>
                <div className="text-2xl font-bold stat-number" style={{ color: '#DC2626' }}>{p.stat}</div>
                <div className="text-xs mt-1" style={{ color: '#839791' }}>{p.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={openForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 text-white hover:translate-y-[-2px]"
            style={{ backgroundColor: '#DC2626' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ef4444'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(220,38,38,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DC2626'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Get a free sample of your market
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
