function clean(value: string | undefined, fallback: string) {
  const next = (value && value.trim()) || fallback;
  return next.replace(/\/$/, '');
}

export const site = {
  name: 'Redstone GTM',
  url: clean(import.meta.env.PUBLIC_SITE_URL, 'https://redstonegtm.com'),
  description:
    'Ankit Singh is a fractional GTM engineer for sales-led vertical B2B SaaS companies. Market mapping, account data, buying signals, and outbound systems.',
  bookingUrl: clean(import.meta.env.PUBLIC_BOOKING_URL, 'https://cal.com/redstone-gtm/discovery'),
  /**
   * Leave empty until an inline Cal.com or Calendly embed should render.
   * The final call-to-action already mounts the embed slot.
   */
  bookingEmbedUrl: (import.meta.env.PUBLIC_BOOKING_EMBED_URL || '').trim(),
  leadFormEndpoint: (import.meta.env.PUBLIC_LEAD_FORM_ENDPOINT || '/api/lead').trim() || '/api/lead',
  locale: 'en_US',
  email: '',
  founder: {
    name: 'Ankit Singh',
    jobTitle: 'Fractional GTM Engineer',
    location: 'Bangalore',
    /** Add public profile URLs here when they should appear in JSON-LD. */
    sameAs: [] as string[],
  },
} as const;

export const bookingCta = 'Book a call';

export const nav = [
  { label: 'Situations', href: '/#situations' },
  { label: 'What I own', href: '/#what-i-own' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Resources', href: '/resources' },
] as const;

export const resourceTypeLabel = {
  'lead-magnet': 'Lead magnet',
  video: 'Video',
  'case-study': 'Case study',
  link: 'Link',
} as const;

export type ResourceType = keyof typeof resourceTypeLabel;
