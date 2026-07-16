import { Cpu, UserCheck, Workflow } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const points = [
  { icon: Cpu, text: 'AI handles scale and repetitive work.' },
  { icon: UserCheck, text: 'Human expertise guides strategy and quality.' },
  { icon: Workflow, text: 'The system runs inside the workflows your team already uses.' },
];

export default function OperatingModel() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-paper-alt">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="The Operating Model"
          title="Not Another Tool. A Revenue System Built and Operated With You."
        />

        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-stone">
            We combine the scale of AI with hands-on revenue expertise. The technology supports
            research, prioritisation, enrichment, and workflow execution. Human judgement shapes
            the strategy, validates the output, and keeps the system aligned with your commercial
            goals.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {points.map((p) => (
            <div key={p.text} className="rounded-2xl border border-line bg-white p-6 text-center">
              <span className="w-11 h-11 rounded-xl bg-ember-soft border border-ember/20 flex items-center justify-center mx-auto mb-4">
                <p.icon size={19} className="text-ember" />
              </span>
              <p className="text-sm leading-relaxed text-ink font-medium">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
