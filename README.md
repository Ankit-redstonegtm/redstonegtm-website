# Redstone GTM

Marketing site for [Redstone GTM](https://redstonegtm.com), Ankit Singh’s fractional GTM engineering practice in Bangalore. The site’s job is to book a discovery call. A resources section holds one page per lead magnet, video, case study, or link.

The site is an Astro project. Pages are static. The lead-magnet form posts to one on-demand route, deployed with the Vercel adapter.

## Run it

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually http://localhost:4321).

```bash
npm run build    # static pages + the Vercel function output
npm run preview  # serve the production build
npm run check    # typecheck
```

Copy `.env.example` to `.env` if you want to override the defaults. Public variables are inlined at build time, so restart the dev server or rebuild after changing them.

## Where copy and config live

| What | File |
| --- | --- |
| Homepage copy, including the draft FAQ | `src/data/home.ts` |
| Site URL, booking URL, embed URL, lead endpoint, navigation, founder | `src/data/site.ts` |
| Lead-form UI strings | `src/data/forms.ts` |
| Lead-magnet file locations (server only) | `src/data/gated-assets.ts` |
| Resource pages | `src/content/resources/*.md` or `*.mdx` |
| Environment defaults | `.env.example` |

Components do not contain marketing copy. Swap the strings in the data files and the resource frontmatter when final copy arrives.

`redstonegtm_services.md` is source context from the previous site. It is not rendered.

## Configuration

All of these are optional. The defaults in `src/data/site.ts` and `astro.config.mjs` match `.env.example`.

- `PUBLIC_SITE_URL` — canonical origin, no trailing slash. Used for canonical links, Open Graph, the sitemap, robots.txt, and JSON-LD. The domain is not decided; the default is `https://redstonegtm.com`.
- `PUBLIC_BOOKING_URL` — every “Book a call” button. Placeholder for Cal.com or Calendly.
- `PUBLIC_BOOKING_EMBED_URL` — leave empty. When set, an inline iframe renders under the final call to action. No embed script is loaded until this is set.
- `PUBLIC_LEAD_FORM_ENDPOINT` — where the lead-magnet form posts. Default `/api/lead`.

Set the same variables in the Vercel project. Changing `PUBLIC_SITE_URL` requires a rebuild.

Founder profile URLs (for example LinkedIn) can be added to `site.founder.sameAs` in `src/data/site.ts`. None are invented here.

## Add a resource

Create `src/content/resources/your-slug.md` (or `.mdx`). The collection is defined in `src/content.config.ts`.

```yaml
---
title: "Title"
description: "One or two sentences for the card and the meta description."
type: lead-magnet # or video, case-study, link
publishedAt: 2026-10-08
draft: false
example: false
gated: true
youtubeId: ""        # video only, 11-character id
externalUrl: ""      # link only, full https URL
notice: ""           # optional callout above the body
gate:                # lead magnet only
  title: Get the file
  body: What happens after submit.
  button: Send the file
---
```

`draft: true` hides the page and the card. The body is Markdown or MDX.

### Lead magnets

1. Add the file people should receive. The example lives at `public/resources/example-tam-mapping-checklist.txt`. A public file can be fetched by anyone who knows the path; move real assets behind the API or a private host before they matter.
2. Map the resource id (the filename without extension) to that file in `src/data/gated-assets.ts`. Do not import that module from a page. The URL is returned only after the form accepts a name and email.
3. Set `type: lead-magnet`, `gated: true`, and a `gate` block.

The form posts JSON to `PUBLIC_LEAD_FORM_ENDPOINT`:

```json
{ "name": "Ada Lovelace", "email": "ada@company.com", "resource": "your-slug" }
```

A successful response the page understands:

```json
{ "ok": true, "assetUrl": "/path-or-https-url", "assetLabel": "Download" }
```

`/api/lead` (`src/pages/api/lead.ts`) is a stub. It checks the name and email, ignores a filled honeypot field, and returns the mapped file. It does not call Attio or an email tool. Replace the comment in that file when a destination exists. Without JavaScript, the same route returns a short confirmation page.

### Video

Set `type: video` and `youtubeId` to the 11-character id. The page shows a play button. The YouTube iframe is created on click and is not in the initial HTML. The example entry uses a stand-in film so the player can be reviewed. Replace the id.

### Case study and link

`type: case-study` is a normal Markdown page. `type: link` adds an outbound link from `externalUrl`. The card still opens an on-site page.

## Deploy to Vercel

1. Import the repository. Framework preset: Astro. The `@astrojs/vercel` adapter is already in `astro.config.mjs`.
2. Leave the output as the adapter defines it: static pages, plus a serverless function for `/api/lead`.
3. Set `PUBLIC_SITE_URL`, `PUBLIC_BOOKING_URL`, and, when ready, `PUBLIC_LEAD_FORM_ENDPOINT` and `PUBLIC_BOOKING_EMBED_URL`.
4. Deploy. `npm run build` is the build command. Output is written for Vercel (`.vercel/output`).

No third-party API keys are required for the current stub.

## Assets and design

- Logo: `src/assets/mark.png`, cropped from `Redstone GTM Logo_bg_removed.png`. The original also remains at the repo root and at `public/logo.png`.
- Portrait: `src/assets/founder.png`, cropped from `founder.png`. `public/founder.png` is the stable URL used in JSON-LD.
- Favicon, apple touch icon, and the default Open Graph image are in `public/`.
- Colleague portraits in `public/` (`stefan.jpg`, `elias.jpg`, `chris.jpg`, `loriauna.jpg`) are kept from the previous site and are not used. The proof section is placeholders only.
- Headlines use Newsreader. Body and UI use Inter. Both are self-hosted Latin subsets via Fontsource. Stone Soft (`#8C8577`) is used only for large index numerals (26px), where it meets large-text contrast. Smaller captions use Stone (`#5C5C5C`).

## SEO

Each page sets its own title and description. The layout adds a canonical URL, Open Graph and Twitter tags, a default 1200×630 image, and JSON-LD for `ProfessionalService` and `Person`. The homepage adds `FAQPage`. Resource pages add `BreadcrumbList`. `robots.txt` and the sitemap are generated at build time from `PUBLIC_SITE_URL`.
