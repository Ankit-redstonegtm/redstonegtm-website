// Central content store — edit copy here without touching component code.

export const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'What We Build', href: '#what-we-build' },
  { label: 'About Ankit', href: '#about-ankit' },
  { label: 'Wall of Love', href: '#wall-of-love' },
];

// The six-stage revenue workflow, translated from the founder's hand-drawn
// process map into customer-facing language. Order and dependencies are
// preserved from the source diagram: ICP/TAM -> account research + signal
// detection -> priority & scoring -> contact sourcing -> message fit ->
// outbound/replies, with a parallel enriched-CRM / stale-contact hygiene loop.
export const flowStages = [
  {
    n: '01',
    icon: 'Compass',
    title: 'Define the Market',
    description: 'Build a clear ICP and map the accounts that fit.',
  },
  {
    n: '02',
    icon: 'Search',
    title: 'Research Accounts',
    description: 'Add relevant company, market, and account context.',
  },
  {
    n: '03',
    icon: 'Radar',
    title: 'Detect Buying Signals',
    description: 'Surface events and changes that indicate potential opportunity.',
  },
  {
    n: '04',
    icon: 'ListOrdered',
    title: 'Prioritise Opportunities',
    description: 'Score and tier accounts so the team knows where to focus.',
  },
  {
    n: '05',
    icon: 'Send',
    title: 'Enable and Execute',
    description: 'Provide contacts, context, messaging, and support across inbound and outbound.',
  },
  {
    n: '06',
    icon: 'RefreshCw',
    title: 'Enrich the CRM',
    description: 'Keep account and contact records accurate, complete, and useful.',
  },
];

export const systemQuestions = [
  'Who should we target?',
  'Which accounts matter most?',
  'Why should we engage them now?',
  'What context does the rep need?',
  'What should happen next?',
  'Is the CRM accurate and useful?',
];

export const capabilityGroups = [
  {
    key: 'market-intelligence',
    icon: 'Compass',
    title: 'Market Intelligence',
    line: 'Know who to target, and why.',
    items: ['ICP development', 'TAM mapping', 'Account research', 'Buying signal detection'],
  },
  {
    key: 'prioritisation',
    icon: 'ListOrdered',
    title: 'Prioritisation',
    line: 'Focus effort where it converts.',
    items: ['Scoring', 'Tiering', 'Account selection', 'Next-best opportunity focus'],
  },
  {
    key: 'rep-enablement',
    icon: 'Users',
    title: 'Rep Enablement',
    line: 'Give reps the context to sell.',
    items: ['Contact sourcing', 'Account context', 'Messaging support', 'Research preparation'],
  },
  {
    key: 'execution',
    icon: 'Send',
    title: 'Execution',
    line: 'Coordinate inbound and outbound.',
    items: ['Inbound workflows', 'Outbound workflows', 'Campaign coordination', 'Reply handling support'],
  },
  {
    key: 'crm-operations',
    icon: 'Database',
    title: 'CRM Operations',
    line: 'Keep your system of record trustworthy.',
    items: ['Enrichment', 'Stale contact removal', 'Account hygiene', 'Workflow updates'],
  },
];

export const founderPoints = [
  {
    title: 'Direct strategic access',
    line: 'You work with the person setting the strategy, not an account manager relaying it.',
  },
  {
    title: 'Faster decisions',
    line: 'No internal hand-offs slow down the work.',
  },
  {
    title: 'Context retained',
    line: 'The same person carries context from strategy through implementation.',
  },
  {
    title: 'Clear accountability',
    line: 'One person is accountable for the outcome, from start to finish.',
  },
];

// LinkedIn recommendations from colleagues and collaborators. These speak to
// how Ankit works, not to Redstone GTM as a customer engagement — keep the
// "LinkedIn recommendation" label attached wherever these render.
export const recommendations = [
  {
    name: 'Stefan Kollenberg',
    role: 'Data Partnerships',
    company: 'Clay',
    photo: '/stefan.jpg',
    date: 'October 2025',
    text: "Working with Ankit has been amazing — he is really thoughtful in the design and building of our Clay tables. We were doing a very complex data test across 20 providers, 3 data types, and 4 global regions with 40+ sub-regions. It required building one core template + sourcing workflow ensuring data consistency, cost-consciousness, and easy replication across all regions. I'd highly recommend working with Ankit.",
  },
  {
    name: 'Elias Stråvik',
    role: 'Building open source software',
    company: 'GTM Engineering',
    photo: '/elias.jpg',
    date: 'September 2025',
    text: "Ankit is one of the best technical talents I've ever had the pleasure of working with. On top of that, he's an amazing communicator which can be seen in a second of scrolling through his LinkedIn posts. I have no doubt in my mind that he'll be a defining voice and leader in the GTM space for years to come. Cannot highly enough recommend working with him if you get the chance.",
  },
  {
    name: 'Christopher Ocampo',
    role: 'Head of Technical Operations',
    company: 'The Kiln | A 2X Company',
    photo: '/chris.jpg',
    date: 'September 2025',
    text: "Ankit is easily one of the best Clay operators I've ever met — not only does he master the technical side, but he also brings a unique, outside-the-box approach to solving problems. What stands out most is how dependable he is in every collaboration. His mix of creativity, precision, and follow-through makes him an invaluable teammate and a true asset to any organization.",
  },
  {
    name: 'Loriauna Mora',
    role: 'Director of AI (GTM) & Marketing Ops',
    company: 'Vimeo',
    photo: '/loriauna.jpg',
    date: 'September 2025',
    text: "I've collaborated with Ankit on multiple client GTM engineering projects, and he's consistently been one of the most technically advanced teammates I've worked with. His expertise in advanced AI, agentic automation, and building complex Clay tables is truly exceptional. He makes complex engineering challenges feel manageable and always delivers practical solutions that actually work for clients.",
  },
];
