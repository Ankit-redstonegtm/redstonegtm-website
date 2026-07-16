import { Compass, Radar, ListOrdered, Send, Database } from 'lucide-react';

const nodes = [
  { icon: Compass, label: 'Market Intelligence', line: 'ICP, TAM, and account research' },
  { icon: Radar, label: 'Buying Signals', line: 'Events that signal a real opportunity' },
  { icon: ListOrdered, label: 'Prioritisation', line: 'Scored and tiered by fit' },
  { icon: Send, label: 'Rep Enablement & Execution', line: 'Context, messaging, inbound and outbound' },
  { icon: Database, label: 'CRM Operations', line: 'Clean, current account and contact records' },
];

/** An elegant, static representation of one connected revenue system — no fabricated data. */
export default function HeroDiagram() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-[0_30px_70px_-30px_rgba(28,25,23,0.25)]">
      <ol className="relative">
        {nodes.map((node, idx) => (
          <li key={node.label} className="relative flex gap-4 pb-7 last:pb-0">
            {idx < nodes.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[19px] top-10 bottom-0 w-px bg-line"
              />
            )}
            <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-ember/25 bg-ember-soft flex items-center justify-center">
              <node.icon size={18} className="text-ember" />
            </span>
            <div className="pt-1.5">
              <div className="font-semibold text-ink text-[15px] leading-tight">{node.label}</div>
              <div className="text-sm text-stone mt-0.5 leading-snug">{node.line}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
