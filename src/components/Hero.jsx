import { ArrowRight } from 'lucide-react';
import { useLeadForm } from '../context/LeadForm';
import HeroDiagram from './HeroDiagram';
import Button from './ui/Button';

export default function Hero() {
  const openForm = useLeadForm();

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(28,25,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight mb-6 text-ink">
              Revenue Operating System for Modern Growth Teams
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-lg text-stone">
              We combine AI and revenue expertise to unify market intelligence, buying signals,
              account prioritisation, rep enablement, execution, and CRM operations into one
              system that helps your team focus on the right opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={openForm} size="lg">
                Book a Strategy Call
                <ArrowRight size={18} />
              </Button>
              <Button as="a" href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            <p className="text-sm mt-6 text-stone-soft">
              Founder-led from strategy through implementation.
            </p>
          </div>

          <div className="w-full">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
