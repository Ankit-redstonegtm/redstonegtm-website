import LeadCaptureForm from './LeadCaptureForm';

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.06) 0%, #020617 50%, #020617 100%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.05]"
        style={{ backgroundColor: '#DC2626' }} />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(131,151,145,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(131,151,145,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Stop researching.{' '}
              <span className="gradient-text">Start selling.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#839791' }}>
              See it for yourself. We’ll map a real slice of your market and send back accounts
              that are already scored and researched.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: '#839791' }}>
              {['Real accounts from your market', 'Fit-scored and researched', 'No pitch, no commitment'].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#DC2626' }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Inline form card */}
          <div className="rounded-2xl border p-7"
            style={{ backgroundColor: 'rgba(10,16,28,0.6)', borderColor: 'rgba(220,38,38,0.2)', boxShadow: '0 0 60px rgba(220,38,38,0.08)' }}>
            <h3 className="text-xl font-bold text-white mb-1.5">Get a free sample of your market</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#839791' }}>
              Tell us where to look and we’ll do the rest.
            </p>
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
}
