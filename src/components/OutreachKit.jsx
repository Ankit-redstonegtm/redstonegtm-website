import { Send, Sparkles } from 'lucide-react';

export default function OutreachKit() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.05]"
        style={{ backgroundColor: '#DC2626' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border"
              style={{ backgroundColor: 'rgba(242,193,78,0.08)', borderColor: 'rgba(242,193,78,0.25)', color: '#F2C14E' }}>
              Bonus
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Ready-to-Send Outreach Kit
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#839791' }}>
              We draft the personalized outreach off the research. Your reps just hit send.
            </p>
          </div>

          {/* Email draft mockup */}
          <div className="rounded-2xl overflow-hidden border"
            style={{ backgroundColor: '#0a0f1a', borderColor: 'rgba(131,151,145,0.18)', boxShadow: '0 30px 70px rgba(0,0,0,0.45)' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(131,151,145,0.1)' }}>
              <div className="flex items-center gap-2">
                <Sparkles size={13} style={{ color: '#DC2626' }} />
                <span className="text-xs font-semibold text-white">Draft · personalized</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full border"
                style={{ backgroundColor: 'rgba(131,151,145,0.08)', borderColor: 'rgba(131,151,145,0.2)', color: '#839791' }}>
                Northwind Logistics
              </span>
            </div>

            {/* Fields */}
            <div className="px-4 py-3 space-y-2 border-b text-xs" style={{ borderColor: 'rgba(131,151,145,0.08)' }}>
              <div className="flex gap-2">
                <span style={{ color: 'rgba(131,151,145,0.55)' }}>To</span>
                <span className="text-white">Marcus Shaw &lt;marcus@northwind-logistics.com&gt;</span>
              </div>
              <div className="flex gap-2">
                <span style={{ color: 'rgba(131,151,145,0.55)' }}>Subject</span>
                <span className="text-white">Forecasting after the Series C</span>
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-4 text-xs leading-relaxed space-y-3" style={{ color: 'rgba(200,210,210,0.85)' }}>
              <p>Hi Marcus,</p>
              <p>
                Congrats on the raise — and on the new seat. Most VPs walking into a
                post-Series-C 3PL tell us the same thing: the forecast is held together
                with spreadsheets and the legacy TMS won’t give them the visibility the
                board now expects.
              </p>
              <p>
                We helped a similar carrier get to a clean forecast in under a quarter.
                Worth 20 minutes to compare notes?
              </p>
              <p style={{ color: 'rgba(131,151,145,0.7)' }}>— Jane</p>
            </div>

            {/* Send bar */}
            <div className="px-4 py-3 border-t flex items-center justify-between" style={{ borderColor: 'rgba(131,151,145,0.1)' }}>
              <span className="text-[10px]" style={{ color: 'rgba(131,151,145,0.55)' }}>Your rep hits send</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                style={{ backgroundColor: '#DC2626' }}>
                <Send size={12} /> Send
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
