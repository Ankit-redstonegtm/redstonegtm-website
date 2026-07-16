export default function SectionHeading({ eyebrow, title, supporting, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-5 border border-ember/25 bg-ember-soft text-ember font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-ink max-w-2xl">
        {title}
      </h2>
      {supporting && (
        <p className="mt-4 text-lg leading-relaxed text-stone max-w-xl">
          {supporting}
        </p>
      )}
    </div>
  );
}
