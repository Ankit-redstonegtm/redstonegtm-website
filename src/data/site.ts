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
  founder: {
    name: 'Ankit Singh',
    jobTitle: 'Founder',
    location: 'Bangalore',
    sameAs: ['https://www.linkedin.com/in/ankit-gtm/'],
  },
} as const;

export const navCta = "Let's talk";

export const primaryCta = "Let's talk about your market";

export const nav = [
  { label: 'Examples', href: '/#examples' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About Ankit', href: '/#about' },
] as const;

export const resourceTypeLabel = {
  'lead-magnet': 'Lead magnet',
  video: 'Video',
  'case-study': 'Case study',
  link: 'Link',
} as const;

export type ResourceType = keyof typeof resourceTypeLabel;
