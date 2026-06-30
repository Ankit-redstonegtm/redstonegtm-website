import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const initialForm = { name: '', email: '', domain: '' };

/**
 * Shared lead-capture form. Used both inside the modal and inline in the
 * closing CTA section. Submit is wired to a placeholder handler that is easy
 * to connect to Formspree / Tally / a custom endpoint later.
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
      setError('Please fill in every field so we can build your sample.');
      return;
    }
    setStatus('submitting');
    try {
      // TODO: connect Formspree / Tally / your own endpoint here.
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
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: 'rgba(220,38,38,0.12)' }}
        >
          <CheckCircle2 size={30} style={{ color: '#DC2626' }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Your sample is on the way.</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#839791' }}>
          We’ll map a slice of your market and send a few fully-researched, scored accounts to{' '}
          <span className="text-white font-medium">{form.email}</span>. Keep an eye on your inbox.
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
        <p className="text-sm" style={{ color: '#f87171' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all disabled:opacity-70"
        style={{ backgroundColor: '#DC2626' }}
        onMouseEnter={(e) => status !== 'submitting' && (e.currentTarget.style.backgroundColor = '#ef4444')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#DC2626')}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send me my free sample
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
      <span className="block text-xs font-medium mb-1.5" style={{ color: '#839791' }}>
        {label}
      </span>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
        style={{ backgroundColor: 'rgba(2,6,23,0.8)', border: '1px solid rgba(131,151,145,0.2)' }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#DC2626')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(131,151,145,0.2)')}
      />
    </label>
  );
}
