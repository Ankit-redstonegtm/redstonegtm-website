import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const initialForm = { name: '', email: '', domain: '' };

/**
 * Shared lead-capture form. Used both inside the modal and inline in the
 * closing CTA section. Submit is wired to a placeholder handler that is easy
 * to connect to Formspree / Tally / a scheduling tool later.
 */
export default function LeadCaptureForm({ onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.domain) {
      setError('Please fill in every field so we can prepare for the call.');
      return;
    }
    setStatus('submitting');
    try {
      // TODO: connect Formspree / Tally / a scheduling tool (e.g. Calendly) here.
      // Example:
      // await fetch('https://formspree.io/f/XXXXX', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      //   body: JSON.stringify(form),
      // });
      await new Promise((res) => setTimeout(res, 700)); // placeholder latency
      setStatus('success');
      onSuccess && onSuccess(form);
    } catch (err) {
      setStatus('idle');
      setError('Something went wrong. Email ankit@redstonegtm.com and we’ll sort it out.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <div className="w-14 h-14 rounded-full bg-ember-soft flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={30} className="text-ember" />
        </div>
        <h3 className="text-xl font-bold text-ink mb-2">Thanks — we'll be in touch.</h3>
        <p className="text-sm leading-relaxed text-stone">
          We'll reach out to <span className="text-ink font-medium">{form.email}</span> to find a
          time to map your revenue workflow.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <Field label="Name" type="text" placeholder="Jane Rivera" value={form.name} onChange={update('name')} />
      <Field label="Work email" type="email" placeholder="jane@company.com" value={form.email} onChange={update('email')} />
      <Field label="Company website" type="text" placeholder="company.com" value={form.domain} onChange={update('domain')} />

      {error && (
        <p className="text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white bg-ember hover:bg-ember-dark transition-all disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request a Strategy Call
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium mb-1.5 text-stone">{label}</span>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-lg text-sm text-ink outline-none transition-all bg-paper border border-line focus:border-ember"
      />
    </label>
  );
}
