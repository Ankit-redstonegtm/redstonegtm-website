function clean(value: string | undefined, fallback: string) {
  const next = (value && value.trim()) || fallback;
  return next.replace(/\/$/, '');
}

export const site = {
  name: 'Redstone GTM',
  url: clean(import.meta.env.PUBLIC_SITE_URL, 'https://redstonegtm.com'),
  description:
    'Ankit Singh helps sales-led vertical SaaS teams find companies with a reason to talk to them now, and turns that research into outbound worth replying to.',
  bookingUrl: clean(
    import.meta.env.PUBLIC_BOOKING_URL,
    'https://cal.com/ankit-singh-gtm/discovery-call',
  ),
  /**
   * Leave empty. The locked homepage does not mount an inline scheduler.
   */
  bookingEmbedUrl: (import.meta.env.PUBLIC_BOOKING_EMBED_URL || '').trim(),
  leadFormEndpoint: (import.meta.env.PUBLIC_LEAD_FORM_ENDPOINT || '/api/lead').trim() || '/api/lead',
  locale: 'en_US',
  email: 'ankit@redstonegtm.com',
  linkedin: 'https://www.linkedin.com/in/ankit-gtm/',
  youtube: 'https://www.youtube.com/@AnkitSinghGTM',
  substack: 'https://theinsiderplays.substack.com',
  subscribeUrl: 'https://theinsiderplays.substack.com/subscribe',
  substackEmbed: 'https://theinsiderplays.substack.com/embed',
  substackLatest: {
    title: "Your competitor's followers already know the category",
    url: 'https://theinsiderplays.substack.com/p/your-competitors-followers-already',
  },
  founder: {
    name: 'Ankit Singh',
    jobTitle: 'Founder',
    sameAs: [
      'https://www.linkedin.com/in/ankit-gtm/',
      'https://www.youtube.com/@AnkitSinghGTM',
      'https://theinsiderplays.substack.com',
    ],
  },
} as const;

export const navCta = "Let's talk";

export const primaryCta = "Let's talk about your market";

export const nav = [
  { label: 'Examples', href: '/#examples' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About', href: '/#about' },
  { label: 'Resources', href: '/resources' },
] as const;

export const resourceTypeLabel = {
  'lead-magnet': 'Lead magnet',
  video: 'Video',
  'case-study': 'Case study',
  link: 'Link',
  guide: 'Guide',
  template: 'Template',
} as const;

export type ResourceType = keyof typeof resourceTypeLabel;
