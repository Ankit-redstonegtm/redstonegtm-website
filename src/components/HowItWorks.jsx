import { Compass, Search, Radar, ListOrdered, Send, RefreshCw, ArrowRight, ArrowDown } from 'lucide-react';
import { flowStages } from '../data/content';
import SectionHeading from './ui/SectionHeading';

const icons = { Compass, Search, Radar, ListOrdered, Send, RefreshCw };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-paper-alt">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="How It Works"
          title="How Your Revenue System Works"
          supporting="One connected workflow from market definition to prioritised execution and cleaner CRM data."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {flowStages.map((stage, idx) => {
            const Icon = icons[stage.icon];
            const isRowEnd = (idx + 1) % 3 === 0;
            const isLast = idx === flowStages.length - 1;

            return (
              <div key={stage.n} className="relative">
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-11 h-11 rounded-xl bg-ember-soft border border-ember/20 flex items-center justify-center">
                      <Icon size={19} className="text-ember" />
                    </span>
                    <span className="text-3xl font-black leading-none text-line">{stage.n}</span>
                  </div>
                  <h3 className="font-bold text-ink text-lg mb-2">{stage.title}</h3>
                  <p className="text-sm leading-relaxed text-stone">{stage.description}</p>
                </div>

                {/* Desktop connector — horizontal, hidden at row end */}
                {!isLast && !isRowEnd && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-paper-alt items-center justify-center"
                  >
                    <ArrowRight size={14} className="text-stone-soft" />
                  </span>
                )}

                {/* Mobile/tablet connector — vertical */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="lg:hidden flex justify-center py-2"
                  >
                    <ArrowDown size={16} className="text-stone-soft" />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
