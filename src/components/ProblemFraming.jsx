import { systemQuestions } from '../data/content';
import SectionHeading from './ui/SectionHeading';

export default function ProblemFraming() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeading
          title="Revenue Shouldn't Depend on Disconnected Systems"
        />

        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-stone">
            As companies grow, customer data becomes fragmented, priorities become unclear,
            research becomes manual, and execution spreads across too many tools and workflows.
          </p>
          <p className="text-lg leading-relaxed text-stone mt-4">
            We bring market intelligence, account prioritisation, rep enablement, execution, and
            CRM operations into one coordinated revenue system.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-white p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-stone-soft mb-6 text-center">
            A coordinated system should help you answer
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {systemQuestions.map((q) => (
              <div key={q} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                <span className="text-ink font-medium leading-snug">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
