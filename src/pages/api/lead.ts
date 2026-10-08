import type { APIRoute } from 'astro';
import { gatedAssets } from '../../data/gated-assets';

export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[char] ?? char;
  });
}

function safeReturnPath(value: string) {
  if (!value.startsWith('/resources/')) return '/resources';
  if (value.startsWith('//') || value.includes('://') || value.includes('\\')) return '/resources';
  return value;
}

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') || '';
  let name = '';
  let email = '';
  let resource = '';
  let honeypot = '';
  let returnTo = '/resources';

  try {
    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = String(body.name ?? '').trim();
      email = String(body.email ?? '').trim();
      resource = String(body.resource ?? '').trim();
      honeypot = String(body.company_website ?? '').trim();
      returnTo = safeReturnPath(String(body.return_to ?? ''));
    } else {
      const form = await request.formData();
      name = String(form.get('name') ?? '').trim();
      email = String(form.get('email') ?? '').trim();
      resource = String(form.get('resource') ?? '').trim();
      honeypot = String(form.get('company_website') ?? '').trim();
      returnTo = safeReturnPath(String(form.get('return_to') ?? ''));
    }
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  const wantsJson =
    contentType.includes('application/json') || (request.headers.get('accept') || '').includes('application/json');

  if (honeypot) {
    return wantsJson
      ? json({ ok: true, assetUrl: '', assetLabel: '' })
      : new Response(null, { status: 303, headers: { Location: returnTo } });
  }

  if (!name || name.length > 120) {
    return json({ ok: false, error: 'Please add your name.' }, 400);
  }
  if (!EMAIL.test(email) || email.length > 200) {
    return json({ ok: false, error: 'Please add a valid work email.' }, 400);
  }
  if (!/^[a-z0-9-]+$/.test(resource)) {
    return json({ ok: false, error: 'This resource is not available.' }, 404);
  }

  const asset = gatedAssets[resource];
  if (!asset) {
    return json({ ok: false, error: 'This resource is not available.' }, 404);
  }

  // Stub for later forwarding to Attio or an email tool. No third-party call is made.
  // The name and email are intentionally not written to the log.
  console.info('[lead] accepted', resource);

  if (wantsJson) {
    return json({ ok: true, assetUrl: asset.url, assetLabel: asset.label });
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>The file is ready | Redstone GTM</title>
    <style>
      body { margin: 0; background: #fbf9f5; color: #1c1917; font-family: Inter, Helvetica, Arial, sans-serif; }
      main { max-width: 38rem; margin: 0 auto; padding: 4rem 1.25rem; }
      h1 { font-weight: 500; font-size: 2.4rem; letter-spacing: -0.02em; }
      p { color: #5c5c5c; line-height: 1.6; }
      a { color: #7f1f13; }
    </style>
  </head>
  <body>
    <main>
      <p>Redstone GTM</p>
      <h1>The file is ready.</h1>
      <p>Thanks, ${escapeHtml(name)}. This example is not sent by email.</p>
      <p><a href="${escapeHtml(asset.url)}">${escapeHtml(asset.label)}</a></p>
      <p><a href="${escapeHtml(returnTo)}">Back to the resource</a></p>
    </main>
  </body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};
