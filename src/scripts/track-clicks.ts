import { track } from '@vercel/analytics';

function propertiesFrom(node: HTMLElement) {
  const properties: Record<string, string> = {};
  for (const [key, value] of Object.entries(node.dataset)) {
    if (!key.startsWith('track') || key === 'track' || !value) continue;
    const rest = key.slice('track'.length);
    properties[rest.charAt(0).toLowerCase() + rest.slice(1)] = value;
  }
  return properties;
}

export function bindClickTracking() {
  const root = window as Window & { __redstoneTrack?: boolean };
  if (root.__redstoneTrack) return;
  root.__redstoneTrack = true;

  document.addEventListener(
    'click',
    (event) => {
      const source = event.target;
      if (!(source instanceof Element)) return;
      const node = source.closest<HTMLElement>('[data-track]');
      if (!node) return;
      const name = node.dataset.track;
      if (!name) return;
      const properties = propertiesFrom(node);
      try {
        if (Object.keys(properties).length > 0) track(name, properties);
        else track(name);
      } catch {
        // A failed analytics call must not stop the link.
      }
    },
    true,
  );
}
