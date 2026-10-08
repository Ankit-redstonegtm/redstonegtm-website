/**
 * Server-only map of lead-magnet files.
 * Do not import this from a page. The public example file is linked only after the form accepts a name and email.
 * Replace the public file with a private asset host when the magnet is real.
 */
export const gatedAssets: Record<string, { url: string; label: string }> = {
  'tam-mapping-checklist': {
    url: '/resources/example-tam-mapping-checklist.txt',
    label: 'Download the checklist',
  },
};
