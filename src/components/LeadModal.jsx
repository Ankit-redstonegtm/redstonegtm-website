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
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-2xl border border-line bg-white overflow-hidden shadow-[0_40px_100px_-20px_rgba(28,25,23,0.35)]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-stone hover:text-ink transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs mb-4 border border-ember/25 bg-ember-soft text-ember font-medium">
            Strategy call
          </div>
          <h3 id="lead-modal-title" className="text-2xl font-bold text-ink mb-2 tracking-tight">
            Book a Strategy Call
          </h3>
          <p className="text-sm leading-relaxed mb-6 text-stone">
            Tell us a bit about your team and we'll set up time to map your current revenue
            workflow and see where a coordinated system would help most.
          </p>

          <LeadCaptureForm />
        </div>
      </div>
    </div>
  );
}
