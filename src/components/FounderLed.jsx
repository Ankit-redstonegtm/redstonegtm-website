import { founderPoints } from '../data/content';
import SectionHeading from './ui/SectionHeading';

export default function FounderLed() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Founder-Led"
              title="Founder-Led, From Strategy to Implementation"
            />
            <p className="mt-6 text-lg leading-relaxed text-stone max-w-lg">
              You work directly with Ankit throughout the engagement — no account-manager
              hand-offs and no layers between strategy and execution. From mapping your revenue
              process to building the workflows and refining execution, Ankit stays personally
              involved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {founderPoints.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-bold text-ink text-base mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-stone">{p.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
