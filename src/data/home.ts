export const home = {
  meta: {
    title: 'Redstone GTM: Research-led outbound for vertical B2B SaaS',
    description:
      'Ankit Singh helps sales-led vertical SaaS teams find companies with a reason to talk to them now, and turns that research into outbound worth replying to.',
    ogTitle: 'Fit tells you who could buy. Evidence tells you who has a reason to talk now.',
    ogDescription: 'Research-led outbound for sales-led vertical B2B SaaS, by Ankit Singh.',
    imageAlt: 'Example evidence card for Corvin Storeworks. Redstone GTM.',
  },
  hero: {
    eyebrow: 'For sales-led vertical B2B SaaS teams',
    title: 'Plenty of companies fit your market. Far fewer have a reason to talk to you now.',
    subhead:
      'I find the companies dealing with the problem your product solves, **show you the evidence**, and turn it into outbound worth replying to. The goal is simple: more of the right sales conversations.',
    primary: "Let's talk about your market",
    secondary: 'See the difference ↓',
    microcopy: "You'll talk to me, not a sales team. Bring what you sell.",
    stripLabel: 'Example',
    stages: [
      {
        kicker: 'Your market',
        detail: 'Hundreds of companies that fit',
      },
      {
        kicker: 'One has something going on',
        detail: 'Corvin Storeworks',
      },
      {
        kicker: 'The evidence',
        findings: [
          { text: 'Announced expansion into the Southeast', source: 'Press release' },
          { text: 'Hiring 4 regional sales directors', source: 'Careers page' },
        ],
        why: 'More reps in more places usually makes coverage harder to manage.',
      },
      {
        kicker: 'A reason to reach out',
        detail:
          'Saw Corvin is expanding into the Southeast and hiring regional sales directors to run it…',
      },
      {
        kicker: 'The goal: a real conversation',
        reply: 'Funny timing. We were just talking about this.',
      },
    ],
  },
  difference: {
    eyebrow: 'The difference',
    title: 'Same industry. Same size. Same tools. Only one has a reason to reply.',
    subhead:
      "Two companies can look identical in your database. One of them might be dealing with the exact problem your product solves this quarter. Pick an example and see what changes when you look for **evidence instead of fit**.",
    panels: ['The usual filter', 'What research turns up', 'What you could actually say'] as const,
    filterLine: 'Every company here fits. Nothing here tells you who to call first.',
    whyLabel: 'Why it might matter',
    stillLabel: 'Still unconfirmed',
    exampleLabel: 'Example',
    closing: 'Which list would you rather hand your team on Monday?',
    cta: "Let's talk about your market",
    microcopy: "Tell me what you sell. I'll tell you what I'd look for.",
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
        still: 'whether they already have a tool for this. The message asks instead of assuming.',
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
        still: "it might be routine housekeeping. The message asks; it doesn't diagnose.",
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
        still: "whether they have the tools for that yet. That's the question worth asking.",
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
    eyebrow: 'Why outbound stalls',
    title: "You probably don't need another tool. Your tools need something to look for.",
    paragraphs: [
      "You've got a CRM. Probably a contact database. Maybe an outbound platform too. They're good at telling you who fits. None of them know what makes someone need your product.",
      'So the list stays broad. The message stays generic. And the replies are polite "not right now"s, or nothing at all. That\'s rarely a copywriting problem. It\'s a **"why this company, why now"** problem.',
    ],
    scenes: [
      {
        title: "Outbound is running. Conversations aren't.",
        body: 'The team is busy and the emails go out every day. Most replies are "not a priority" or an unsubscribe. The activity is fine. The reason to talk isn\'t there.',
      },
      {
        title: "You've worked through the obvious accounts.",
        body: "Every company your team can name has heard from you twice. The ones you haven't found yet don't show up under the filters you've been using.",
      },
      {
        title: 'More pipeline seems to mean more hires.',
        body: 'Your best rep researches properly, so they can only get through a handful of accounts a day. Everything else gets the template. Three more SDRs means three more people doing the same thing.',
      },
      {
        title: "You're moving into a new market.",
        body: 'Your targeting and messaging were built for one kind of customer. A new vertical has different triggers, different titles and different words for the same problem.',
      },
    ],
    closing:
      'Four different situations. One missing piece: knowing which companies have a reason to talk to you, and what that reason is.',
  },
  method: {
    eyebrow: 'How it works',
    title: 'Start with why your customers buy. Then go find everyone else in that spot.',
    subhead:
      'Before I look for a single company, I want to understand **what makes someone need your product**. Then I look for evidence of those situations across your market, find the right people, and build outbound around something worth talking about.',
    context:
      'Following one account: you sell field sales software, and Corvin Storeworks is an in-store merchandising company whose reps visit retail stores.',
    accountName: 'Corvin Storeworks',
    accountLabel: 'On the Corvin account',
    steps: [
      {
        title: 'Understand what makes someone buy',
        body: "I dig into your product, your best customers and the deals you've won. What was going on at those companies when they said yes? What made it urgent?",
        output:
          'Your best customers bought when they added territories faster than their managers could keep track of reps. The trigger was growth, not company size.',
      },
      {
        title: 'Find companies in that situation',
        body: 'Then I look for public evidence of that trigger across your market. Job posts, expansion news, new locations, leadership changes, industry directories, local filings. Wherever your buyers leave traces.',
        output:
          'Corvin announced expansion into the Southeast last month. Four regional sales director roles are open.',
      },
      {
        title: 'Find the people who matter',
        body: "A good reason is wasted on the wrong person. I work out who owns the problem, who feels it first and who signs off, and find contact details I've checked.",
        output:
          'VP of Field Sales (owns coverage). The new regional directors once hired (feel it first). Sales ops manager (will evaluate tools).',
      },
      {
        title: 'Turn research into outbound',
        body: "Each message is built around what's actually happening at that company. I test a few angles and keep the ones that start real conversations.",
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
        title: 'Make it repeatable',
        body: 'The research shouldn\'t start from zero every quarter. I set it up so the same search keeps running, and new companies that show the same signs reach your team with the evidence attached.',
        output:
          'Next month, the next company that announces an expansion and starts hiring regional leaders shows up on its own, with the reasons already written down.',
      },
    ],
    closing:
      "AI makes the digging faster. It doesn't know what to dig for. Deciding that, and deciding what's worth saying, is judgment. That's most of the job.",
    system: {
      title: 'The conversations are the point. What builds up behind them is worth something too.',
      items: [
        'Your market, mapped and kept current. New companies get added as they show up.',
        'Live signals, watched. When something changes at an account, you hear about it.',
        'Your CRM, enriched with what the research found, not just names and emails.',
      ],
      closing: "It keeps working after the first campaign. That's what I mean by a system.",
    },
  },
  proof: {
    eyebrow: 'The work',
    title: "You don't get a spreadsheet. You get reasons to reach out.",
    subhead:
      'I spent about 2.5 years doing this work at The Kiln, with 20+ clients across different industries. The tools changed every few months. The question never did: **why would this company care right now?**',
    brief: {
      title: 'Account brief · Corvin Storeworks',
      label: 'Example',
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
      caption: 'Every account comes with the evidence, the source and an honest read on how sure I am.',
    },
    modesTitle: 'Choose who runs it. The thinking is the same.',
    modes: [
      {
        title: 'Done for you',
        line: 'I build the system and run the outbound.',
        forLabel: 'For',
        for: "Teams that need more of the right conversations and don't have the people to chase them.",
        listLabel: 'What I handle',
        items: [
          'Working out why your customers buy',
          'Finding the companies that show those signs',
          'Finding the right people and their contact details',
          'Writing, sending and testing the messages',
          "Telling you what's working and what isn't",
        ],
        youLabel: 'What you do',
        you: "Take the conversations, and tell me what you're hearing so the targeting keeps getting sharper.",
      },
      {
        title: 'Built for your team',
        line: 'I build the system. Your team runs it.',
        forLabel: 'For',
        for: 'Teams with sellers who are good at conversations but spend too long on research.',
        listLabel: 'What I build',
        items: [
          'Research workflows and sources for your specific market',
          'A research assistant your reps can use on any account',
          'Message angles for the situations your buyers are usually in',
          'Documentation and training, so your team owns it without me',
        ],
        youLabel: 'What you do',
        you: "Run it. You shouldn't need me in the loop.",
      },
    ],
    concept: {
      label: 'Concept. The real version is built around your market.',
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
    modesNote: 'No packages to pick from. You can decide which fits after we talk.',
    fitTitle: 'Is this for you?',
    goodTitle: 'This is probably for you if',
    good: [
      'You sell a sales-led B2B product into a specific industry.',
      'You can describe the problem your product solves in one sentence.',
      "Your team could handle more good conversations than it's getting.",
    ],
    badTitle: 'Probably not for you if',
    bad: [
      'You want 50,000 contacts by Friday.',
      'Your product is sold self-serve to anyone with a credit card.',
      "You're looking for guaranteed meetings. I don't promise those. I promise better reasons to start them.",
    ],
    cta: "Let's talk about your market",
  },
  about: {
    eyebrow: "Who you'd work with",
    title: "Hey, I'm Ankit.",
    paragraphs: [
      'I spent about 2.5 years at The Kiln, a GTM agency, working with 20+ clients on how they find and reach new customers.',
      "Most of that time went into a few questions. Which companies are actually worth contacting? Where do you find them when they're not in the usual databases? What makes them relevant this month and not last year? And how do you turn that into a message a busy person answers?",
      "Different industries, different products, same lesson. Finding more contacts is the easy part. **Understanding why a company might need what you sell** is the part that starts conversations.",
      "That's what Redstone GTM is built around.",
      'When you work with me, you work with me. I do the research, build the systems and write the messages myself. No account managers in between.',
      "If you're trying to reach more of the right companies, I'd like to hear what you're selling.",
    ],
    photoAlt: 'Ankit Singh, founder of Redstone GTM, at an industry event.',
    facts: ['About 2.5 years at The Kiln', '20+ clients', 'Based in Bangalore'],
    factsNote: 'The Kiln was my previous employer. Redstone GTM is my own, independent business.',
    recsTitle: "What it's like working with me",
    recsSubhead: 'LinkedIn recommendations from people I worked with at The Kiln. Quoted as written.',
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
    title: 'Somewhere outside your current list are companies with a reason to talk to you.',
    subhead:
      "If your product solves a real problem, there's probably more to your market than the companies your team already knows. Let's look at what you sell and where those companies might be.",
    nextLabel: 'What happens next',
    steps: [
      { title: 'Pick a time.', body: "It's a call with me, not a sales team." },
      {
        title: 'We talk through your market.',
        body: "What you sell, who buys it today, and what you've already tried.",
      },
      {
        title: 'You get my honest take.',
        body: "Where I'd start looking, and whether I'm the right person to help. If I'm not, I'll say so.",
      },
    ],
    primary: "Let's talk about your market",
    emailLabel: 'Email me at ankit@redstonegtm.com',
    linkedinLabel: 'Message me on LinkedIn',
    microcopy: 'No pitch deck. No obligation. Just a conversation about your market.',
  },
  footer: {
    line: 'Finding the companies with a reason to talk to you, and starting the conversation.',
    book: 'Book a call',
    email: 'ankit@redstonegtm.com',
    linkedin: 'LinkedIn',
    note: 'Recommendations are from LinkedIn and describe my work at The Kiln.',
    copyright: '© 2026 Redstone GTM · Bangalore, India',
  },
} as const;
