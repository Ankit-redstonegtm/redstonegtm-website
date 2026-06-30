const testimonials = [
  {
    name: "Stefan Kollenberg",
    role: "Data Partnerships",
    company: "Clay",
    photo: "/stefan.jpg",
    date: "October 2025",
    text: "Working with Ankit has been amazing — he is really thoughtful in the design and building of our Clay tables. We were doing a very complex data test across 20 providers, 3 data types, and 4 global regions with 40+ sub-regions. It required building one core template + sourcing workflow ensuring data consistency, cost-consciousness, and easy replication across all regions. I'd highly recommend working with Ankit.",
  },
  {
    name: "Elias Stråvik",
    role: "Building open source software",
    company: "GTM Engineering",
    photo: "/elias.jpg",
    date: "September 2025",
    text: "Ankit is one of the best technical talents I've ever had the pleasure of working with. On top of that, he's an amazing communicator which can be seen in a second of scrolling through his LinkedIn posts. I have no doubt in my mind that he'll be a defining voice and leader in the GTM space for years to come. Cannot highly enough recommend working with him if you get the chance.",
  },
  {
    name: "Christopher Ocampo",
    role: "Head of Technical Operations",
    company: "The Kiln | A 2X Company",
    photo: "/chris.jpg",
    date: "September 2025",
    text: "Ankit is easily one of the best Clay operators I've ever met — not only does he master the technical side, but he also brings a unique, outside-the-box approach to solving problems. What stands out most is how dependable he is in every collaboration. His mix of creativity, precision, and follow-through makes him an invaluable teammate and a true asset to any organization.",
  },
  {
    name: "Loriauna Mora",
    role: "Director of AI (GTM) & Marketing Ops",
    company: "Vimeo",
    photo: "/loriauna.jpg",
    date: "September 2025",
    text: "I've collaborated with Ankit on multiple client GTM engineering projects, and he's consistently been one of the most technically advanced teammates I've worked with. His expertise in advanced AI, agentic automation, and building complex Clay tables is truly exceptional. He makes complex engineering challenges feel manageable and always delivers practical solutions that actually work for clients.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#DC2626" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function WallOfLove() {
  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-[0.04]"
        style={{ backgroundColor: '#839791' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border"
            style={{ backgroundColor: 'rgba(131,151,145,0.06)', borderColor: 'rgba(131,151,145,0.2)', color: '#839791' }}>
            Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Wall of Love ❤️
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-7 flex flex-col border transition-all duration-200"
              style={{ backgroundColor: 'rgba(10,16,28,0.5)', borderColor: 'rgba(131,151,145,0.12)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(131,151,145,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(131,151,145,0.12)'}
            >
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(200,210,210,0.85)' }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs truncate" style={{ color: '#839791' }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder section */}
        <div className="mt-16 rounded-2xl overflow-hidden border"
          style={{ background: 'linear-gradient(135deg, rgba(10,16,28,0.8) 0%, rgba(10,16,28,0.4) 100%)', borderColor: 'rgba(131,151,145,0.12)' }}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 flex flex-col justify-center">
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#DC2626' }}>From the Founder</div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#839791' }}>
                "I built RedstoneGTM because I kept seeing the same problem: brilliant sales teams
                spending their day researching instead of selling. The fix isn't more emails —
                it's handing reps accounts that are already mapped, scored, and researched."
              </p>
              <div className="flex items-center gap-3">
                <img src="/founder.png" alt="Ankit Singh" className="w-12 h-12 object-cover object-top rounded-full"
                  style={{ backgroundColor: 'rgba(131,151,145,0.1)' }} />
                <div>
                  <div className="font-bold text-white">Ankit Singh</div>
                  <div className="text-sm" style={{ color: '#839791' }}>Founder, RedstoneGTM</div>
                </div>
                <a
                  href="https://www.linkedin.com/in/ankit-gtm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 transition-colors"
                  style={{ color: 'rgba(131,151,145,0.4)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#839791'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(131,151,145,0.4)'}
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-[200px] overflow-hidden"
              style={{ backgroundColor: 'rgba(220,38,38,0.04)' }}>
              <img
                src="/founder.png"
                alt="Ankit Singh"
                className="h-full w-full object-cover object-top opacity-40"
                style={{ maxHeight: '300px' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,16,28,0.85), transparent)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
