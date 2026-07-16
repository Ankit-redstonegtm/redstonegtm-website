import { useLeadForm } from '../context/LeadForm';
import LeadCaptureForm from './LeadCaptureForm';

const points = [
  'Map your current revenue workflow',
  'Identify the biggest gaps',
  'See what a coordinated system could look like',
];

export default function FinalCTA() {
  const openForm = useLeadForm();

  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="rounded-3xl border border-line bg-white p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight text-ink">
                Build a Revenue System You Can Rely On
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-stone">
                Book a strategy call to map your current revenue workflow, identify the biggest
                gaps, and explore what a more coordinated system could look like.
              </p>
              <ul className="space-y-2 text-sm text-stone">
                {points.map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <button
                onClick={openForm}
                className="hidden lg:inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-lg font-semibold text-white bg-ember hover:bg-ember-dark hover:-translate-y-px transition-all duration-200"
              >
                Talk to Ankit
              </button>
            </div>

            <div className="rounded-2xl border border-line bg-paper-alt p-7">
              <h3 className="text-xl font-bold text-ink mb-1.5">Talk to Ankit</h3>
              <p className="text-sm leading-relaxed mb-5 text-stone">
                Tell us where to look and we'll set up time to talk.
              </p>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
