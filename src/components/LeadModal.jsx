import { useEffect } from 'react';
import { X } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

export default function LeadModal({ open, onClose }) {
  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(2,6,23,0.8)' }}
        onClick={onClose}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-md rounded-2xl border overflow-hidden"
        style={{
          backgroundColor: '#0a0f1a',
          borderColor: 'rgba(220,38,38,0.25)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(220,38,38,0.12)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #DC2626, transparent)' }}
        />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 transition-colors"
          style={{ color: 'rgba(131,151,145,0.6)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(131,151,145,0.6)')}
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs mb-4 border"
            style={{ backgroundColor: 'rgba(220,38,38,0.08)', borderColor: 'rgba(220,38,38,0.25)', color: '#DC2626' }}
          >
            Free market sample
          </div>
          <h3 id="lead-modal-title" className="text-2xl font-bold text-white mb-2 tracking-tight">
            Get a free sample of your market
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#839791' }}>
            Tell us where to look. We’ll send back a handful of accounts from your market —
            mapped, scored, and researched — so you can see exactly what your reps would open to.
          </p>

          <LeadCaptureForm />

          <p className="text-xs mt-4 text-center" style={{ color: 'rgba(131,151,145,0.45)' }}>
            No pitch, no commitment. Just a look at your market.
          </p>
        </div>
      </div>
    </div>
  );
}
