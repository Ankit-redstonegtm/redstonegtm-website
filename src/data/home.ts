export const home = {
  meta: {
    title: 'Redstone GTM: Research-led outbound for vertical B2B SaaS',
    description:
      'Ankit Singh helps sales-led vertical SaaS teams find companies with a reason to talk to them now, and turns that research into outbound worth replying to.',
    ogTitle: 'Fit tells you who could buy. Evidence tells you who has a reason to talk now.',
    ogDescription: 'Research-led outbound for sales-led vertical B2B SaaS, by Ankit Singh.',
    imageAlt: 'Evidence card for Corvin Storeworks. Redstone GTM.',
  },
  hero: {
    eyebrow: 'For sales-led vertical B2B SaaS teams',
    title: 'Plenty of companies fit your market. Far fewer have a reason to talk to you now.',
    subhead:
      'I find the companies that have the problem your product solves, and turn what I find into outbound they reply to.',
    primary: 'Find your next customers',
    secondary: 'See an example ↓',
    stages: [
      {
        kicker: 'Your market',
        detail: 'Hundreds of companies that fit',
      },
      {
        kicker: 'One stands out',
        detail: 'Corvin Storeworks',
      },
      {
        kicker: "What's happening",
        findings: [
          { text: 'Announced expansion into the Southeast', source: 'Press release' },
          { text: 'Hiring 4 regional sales directors', source: 'Careers page' },
        ],
        why: 'More reps in more places. Coverage gets harder to manage.',
      },
      {
        kicker: 'Your message',
        detail:
          'Saw Corvin is expanding into the Southeast and hiring regional sales directors to run it…',
      },
      {
        kicker: 'Their reply',
        reply: 'Funny timing. We were just talking about this.',
      },
    ],
  },
  difference: {
    title: 'Two companies can look the same on your list. Only one needs you right now.',
    panels: ['What your list shows', 'What I find', 'What you send'] as const,
    filterLine: 'Everyone fits. No one stands out.',
    whyLabel: 'Why it might matter',
    stillLabel: 'Not confirmed',
    closing: 'Which list would you rather hand your team on Monday?',
    cta: "See who you're missing",
    examples: [
      {
        id: 'field-sales-software',
        tab: 'Field sales software',
        sells: 'software that helps field sales teams plan routes, log visits and manage territories.',
        chips: ['Home services', '50–500 employees', 'United States'],
        company: 'Cinderwell Roofing',
        companyNote: 'solar and roofing installer',
        findings: [
          {
            text: 'Opened offices in Phoenix and Tucson in the last two months',
            source: 'Local news, locations page',
          },
          {
            text: 'Hiring three door-to-door sales managers across the two new cities',
            source: 'Careers page',
          },
          {
            text: 'New job post for a sales coordinator to manage rep schedules',
            source: 'Job board',
          },
        ],
        why: 'New territories plus new managers is when routing, coverage and visibility tend to get messy.',
        still: 'whether they already have a tool. So the email asks.',
        email: {
          subject: 'Phoenix and Tucson',
          paragraphs: [
            'Hi Sloane,',
            'Saw Cinderwell opened Phoenix and Tucson and is hiring door-to-door managers for both.',
            'When a team adds cities this fast, the first thing that slips is usually knowing which rep covered which neighborhood, and when.',
            'Is that already handled, or still being figured out?',
          ],
        },
      },
      {
        id: 'returns-management',
        tab: 'Returns management',
        sells: 'software that helps ecommerce brands handle returns and exchanges.',
        chips: ['Ecommerce', '$20M+ revenue', 'Shopify'],
        company: 'Thornmere Supply',
        companyNote: 'outdoor apparel brand',
        findings: [
          { text: 'Launched a footwear line this spring', source: 'New collection pages' },
          {
            text: 'Shortened its returns window from 60 to 30 days',
            source: 'Returns policy page, compared with the archived version',
          },
          {
            text: 'Hiring its first returns and reverse logistics manager',
            source: 'Careers page',
          },
        ],
        why: 'A category where sizing drives returns, a tighter policy and a new returns hire, all in one season. That can point to returns getting expensive.',
        still: "whether it's routine housekeeping. So the email asks.",
        email: {
          subject: 'footwear and the 30-day window',
          paragraphs: [
            'Hi Amira,',
            'Noticed Thornmere added footwear this spring and moved returns from 60 to 30 days around the same time.',
            'When brands add a category where fit is hard to judge online, returns often grow faster than the process built to handle them.',
            'Was that part of the reason for the change?',
          ],
        },
      },
      {
        id: 'retail-analytics',
        tab: 'Retail analytics',
        sells: 'analytics software that helps grocers understand shoppers and store performance.',
        chips: ['Grocery chains', '20+ stores'],
        company: 'Sablebrook Markets',
        companyNote: '34-store regional grocer',
        findings: [
          {
            text: 'Relaunched its loyalty app with personalized offers',
            source: 'Press release, app store listing',
          },
          { text: 'Announced five stores in a new metro area', source: 'Local business press' },
          { text: 'Hiring its first Director of Customer Insights', source: 'Careers page' },
        ],
        why: "A loyalty relaunch and a brand-new insights role suggest they're collecting more shopper data and want to do more with it.",
        still: 'whether they have the tools yet. So the email asks.',
        email: {
          subject: 'your new insights role',
          paragraphs: [
            'Hi Mateo,',
            'Saw Sablebrook relaunched its loyalty app and is hiring its first Director of Customer Insights.',
            "That usually means a lot of new shopper data, and pressure to show what it's worth. Five new stores make that question bigger, not smaller.",
            "Who's deciding how that data gets used across the stores?",
          ],
        },
      },
    ],
  },
  problem: {
    title: "Your tools know who fits. They don't know who needs you.",
    body: "Your CRM and data tools sort by size, industry and title. None of them know what makes a company need your product. So the list stays broad, the message stays generic, and the replies don't come.",
    lines: [
      "Outbound runs every day. Replies don't.",
      "You've already contacted every account you can name.",
      'More pipeline seems to need more SDRs.',
      "You're entering a new market and the old playbook doesn't fit.",
    ],
    closing: 'All four come back to one gap: knowing who has a reason to talk to you, and why.',
  },
  method: {
    title: 'Start with why your customers buy. Then find more companies like that.',
    context:
      'Follow one account. You sell field sales software. Corvin Storeworks sends reps into retail stores.',
    accountName: 'Corvin Storeworks',
    accountLabel: 'On the Corvin account',
    steps: [
      {
        title: 'Understand why they buy',
        body: 'What was happening at your best customers when they said yes?',
        output:
          'Your best customers bought when they added territories faster than their managers could keep track of reps. The trigger was growth, not company size.',
      },
      {
        title: 'Find companies in that situation',
        body: 'I look for public signs of the same situation. Job posts, expansion news, new locations, leadership changes.',
        output:
          'Corvin announced expansion into the Southeast last month. Four regional sales director roles are open.',
      },
      {
        title: 'Find the right people',
        body: 'Who owns the problem, who feels it first, and who signs. With checked contact details.',
        output:
          'VP of Field Sales (owns coverage). The new regional directors once hired (feel it first). Sales ops manager (will evaluate tools).',
      },
      {
        title: 'Write the outbound',
        body: "Every email is built on what's happening at that company. I test angles and keep what gets replies.",
        email: {
          subject: 'the Southeast expansion',
          paragraphs: [
            'Hi Marisol,',
            'Saw Corvin is expanding into the Southeast and hiring regional sales directors to run it.',
            "When reps spread across new states, managers usually lose sight of which stores got visited and which didn't.",
            'How are you planning to keep coverage visible while the new teams ramp?',
          ],
        },
        angles: 'Angles tested on accounts like this: store coverage · ramp time for new reps · manager visibility',
      },
      {
        title: 'Keep it running',
        body: 'The search keeps going, so new companies with the same signs reach your team with the reasons attached.',
        output:
          'Next month, the next company that announces an expansion and starts hiring regional leaders shows up on its own, with the reasons already written down.',
      },
    ],
    closing: 'AI makes the digging faster. Knowing what to dig for is the job.',
    system: {
      title: 'What keeps running after the first campaign',
      items: [
        'Your market, always mapped. New companies added as they appear.',
        'Live signals, watched. You hear when something changes.',
        'Your CRM, enriched with the why, not just emails.',
      ],
    },
  },
  proof: {
    title: 'Every account comes with the reason, the source, and how sure I am.',
    brief: {
      title: 'Account brief · Corvin Storeworks',
      whoLabel: 'Who they are',
      who: 'In-store merchandising company. Reps visit retail stores across the Midwest.',
      whyNowLabel: 'Why now',
      whyNow: [
        { text: 'Announced expansion into the Southeast', source: 'Press release, last month' },
        { text: 'Four regional sales director roles open', source: 'Careers page' },
        { text: 'New VP of Field Sales joined this year', source: 'LinkedIn' },
      ],
      matterLabel: 'Why it might matter',
      matter: 'Expansion plus new leadership is when coverage and rep visibility get hard to manage.',
      whoTalkLabel: 'Who to talk to',
      whoTalk: 'VP of Field Sales first. Sales ops manager second.',
      angleLabel: 'Opening angle',
      angle: 'Keeping store coverage visible while new teams ramp.',
      confidenceLabel: 'Confidence',
      confidence:
        'Medium. The expansion and hiring are confirmed. Whether they already have a tool for this is not.',
    },
    modesTitle: 'Two ways to work together',
    modes: [
      {
        title: 'Done for you',
        line: 'I build the system and run the outbound.',
        forLabel: 'For',
        for: "teams that need more of the right conversations and don't have people to chase them.",
        listLabel: 'I handle',
        items: [
          'why your customers buy',
          'finding the companies',
          'finding the people',
          'writing, sending and testing',
          'reporting what works',
        ],
        youLabel: 'You',
        you: 'take the conversations.',
      },
      {
        title: 'Built for your team',
        line: 'I build the system. Your team runs it.',
        forLabel: 'For',
        for: 'teams with good sellers who spend too long on research.',
        listLabel: 'I build',
        items: [
          'research workflows for your market',
          'a research assistant for your reps',
          'message angles',
          'docs and training',
        ],
        youLabel: 'You',
        you: "run it. You won't need me in the loop.",
      },
    ],
    concept: {
      prompt: 'Research Corvin Storeworks for our field sales app.',
      findingsLabel: 'Findings',
      findings: [
        { text: 'Announced expansion into the Southeast', source: 'Press release' },
        { text: 'Four regional sales director roles open', source: 'Careers page' },
        { text: 'New VP of Field Sales joined this year', source: 'LinkedIn' },
      ],
      peopleLabel: 'People to contact first',
      people: ['VP of Field Sales', 'Sales ops manager'],
      anglesLabel: 'Ways to open the conversation',
      angles: ['store coverage', 'ramp time for new reps', 'manager visibility'],
    },
    fitTitle: 'Is this for you?',
    goodTitle: 'Probably yes if',
    good: [
      'You sell a B2B product into a specific industry.',
      'You can say what problem you solve in one sentence.',
      'Your team could take more good conversations.',
    ],
    badTitle: 'Probably not if',
    bad: [
      'You want 50,000 contacts by Friday.',
      'You sell self-serve.',
      "You want guaranteed meetings. I don't sell those.",
    ],
  },
  about: {
    title: "Hey, I'm Ankit.",
    paragraphs: [
      "I spent 2.5 years at The Kiln, one of Clay's leading partner agencies (acquired by 2X in 2026), building research and outbound systems for 20+ B2B companies.",
      'Every project came down to one question: which companies have a reason to talk to you right now, and how do you know?',
      'Redstone GTM is built around that question. I do the research, build the systems and write the messages myself.',
    ],
    photoAlt: 'Ankit Singh, founder of Redstone GTM, at an industry event.',
    facts: ['2.5 years at The Kiln', '20+ B2B clients'],
    recsTitle: "What it's like working with me",
    recsSubhead: 'From people I worked with at The Kiln, on LinkedIn.',
    recsLink: 'Read all recommendations on LinkedIn',
    recommendations: [
      {
        quote:
          'I worked closely with Ankit as our RevOps team implemented Clay into our GTM tech stack, and he was instrumental in helping us realize value from the platform quickly. Ankit brought a strong POV on the design of our workflows and tables that aligned to our business, and he built some very cool custom research signals for us. … Ankit provided clear, consistent updates, surfaced blockers early, and delivered thorough documentation and workflow maps that enabled our team to own and maintain the solution independently.',
        name: 'John Gilbert',
        title: 'Revenue Operations at Narvar',
        tag: 'LinkedIn recommendation, July 10, 2026',
        featured: true,
      },
      {
        quote:
          "What really sets Ankit apart is his ability to deliver sophisticated solutions while keeping client budgets in check and maximizing ROI. He's also an excellent communicator - he can break down complex technical concepts in a way that makes sense to everyone on the team. … Ankit has this great combination of deep technical skills and business sense.",
        name: 'Loriauna Mora',
        title: 'Director of AI (GTM) & Marketing Ops @ Vimeo',
        tag: 'LinkedIn recommendation, September 15, 2025',
        featured: false,
      },
      {
        quote:
          'What stands out most is how dependable he is in every collaboration. Whenever we tackle a project together, I know it’s a task that will get done with excellence. His mix of creativity, precision, and follow-through makes him an invaluable teammate and a true asset to any organization.',
        name: 'Christopher Ocampo',
        title: 'Head of Technical Operations @ The Kiln | A 2X Company',
        tag: 'LinkedIn recommendation, September 15, 2025',
        featured: false,
      },
      {
        quote:
          'Working with Ankit has been amazing, he is really thoughtful in the design and building of our Clay tables. We were doing a very complex data test across 20 providers, 3 data types, and 4 global regions with 40+ sub-regions. It required building out one core template + sourcing workflow that would ensure data consistency, cost-consciousness, and be easy to replicate across all of the regions and sub-regions.',
        name: 'Stefan Kollenberg',
        title: 'Data Partnerships @ Clay',
        tag: 'LinkedIn recommendation, October 13, 2025',
        featured: false,
      },
    ],
  },
  finalCta: {
    title: "There are good customers outside your current list. Let's find them.",
    line: "You tell me what you sell. I tell you where I'd look first.",
    primary: "Let's talk about your market",
    emailLabel: 'Email me at ankit@redstonegtm.com',
    linkedinLabel: 'Message me on LinkedIn',
  },
  footer: {
    line: 'Finding the companies with a reason to talk to you.',
    book: 'Book a call',
    email: 'ankit@redstonegtm.com',
    linkedin: 'LinkedIn',
    copyright: '© 2026 Redstone GTM',
  },
} as const;
