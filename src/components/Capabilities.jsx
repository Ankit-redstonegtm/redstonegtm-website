import { Compass, ListOrdered, Users, Send, Database, Check } from 'lucide-react';
import { capabilityGroups } from '../data/content';
import SectionHeading from './ui/SectionHeading';

const icons = { Compass, ListOrdered, Users, Send, Database };

export default function Capabilities() {
  return (
    <section id="what-we-build" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="What We Build"
          title="Built Around the Work Your Revenue Team Actually Needs"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <div key={group.key} className="rounded-2xl border border-line bg-white p-7">
                <span className="w-11 h-11 rounded-xl bg-ember-soft border border-ember/20 flex items-center justify-center mb-5">
                  <Icon size={19} className="text-ember" />
                </span>
                <h3 className="font-bold text-ink text-lg mb-1.5">{group.title}</h3>
                <p className="text-sm text-stone mb-5">{group.line}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone">
                      <Check size={14} className="text-ember mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
