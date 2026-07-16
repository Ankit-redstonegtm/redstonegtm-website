import SectionHeading from './ui/SectionHeading';

export default function AboutFounder() {
  return (
    <section id="about-ankit" className="py-24 px-4 sm:px-6 lg:px-8 bg-paper-alt">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-line bg-white aspect-square">
            <img
              src="/founder.png"
              alt="Ankit Singh, founder of Redstone GTM"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Ankit"
              title="Built by Someone Who's Done the Work"
            />
            <p className="mt-6 text-lg leading-relaxed text-stone max-w-xl">
              Before founding Redstone GTM, Ankit spent more than two years at The Kiln, a
              revenue growth agency, working closely with B2B revenue systems and go-to-market
              execution.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone max-w-xl">
              That experience shaped a practical approach: connect the data, prioritise the
              right opportunities, enable the team, and build workflows people actually use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
